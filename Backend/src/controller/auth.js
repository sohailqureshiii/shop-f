const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");
const { response } = require("express");
const fetch = require("node-fetch");

exports.signup = (req, res) => {
  User.findOne({ loginId: req.body.loginId }).exec(async (error, user) => {
    if (user)
      return res.status(401).json({
        message: "User already registered",
      });

    const { loginId, password, name } = req.body;
    const _user = new User({
      loginId,
      password,
      name,
      role: "user",
    });

    const salt = await bcrypt.genSalt(10);
    _user.password = await bcrypt.hash(password, salt);

    _user.save((error, data) => {
      if (error) {
        return res.status(401).json({
          error: error,
        });
      }
      if (data) {
        const token = jwt.sign(
          { _id: data._id, role: data.role },
          process.env.JWT_SECRET
        );
        res.cookie("token", token);
        // const { _id,name,email } = data;
        res.status(200).json({
          token,
          user: {
            // _id,name,email
            _id: data._id,
            name: data.name,
            loginId: data.loginId,
          },
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ loginId: req.body.loginId }).exec(async (error, user) => {
    if (error) return res.status(401).json({ message: "User not found" });
    if (user) {
      const checkpassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (checkpassword && user.role === "user") {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET
        );
        const { _id, name, role, following, loginId } = user;
        res.cookie("token", token);
        res.status(200).json({
          token,
          user: {
            _id,
            name,
            role,
            following,
            loginId,
          },
          following,
        });
      } else {
        return res.status(401).json({
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(401).json({ message: "something went wrong" });
    }
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "SignOut Successfully...!",
  });
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT);

exports.googleController = (req, res) => {
  const { idToken } = req.body;

  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
    .then((response) => {
      const { email_verified, name, email } = response.payload;
      if (email_verified) {
        User.findOne({ loginId: email }).exec((err, user) => {
          if (user) {
            const token = jwt.sign(
              { _id: user._id, role: user.role },
              process.env.JWT_SECRET
            );
            res.cookie("token", token);
            const { _id, loginId, name, role } = user;
            return res.json({
              token,
              user: { _id, loginId, name, role },
            });
          } else {
            let password = email + process.env.JWT_SECRET;
            user = new User({ name, loginId: email, password });
            user.save((err, data) => {
              if (err) {
                console.log("ERROR GOOGLE LOGIN ON USER SAVE", err);
                return res.status(400).json({
                  error: "User signup failed with google",
                });
              }
              const token = jwt.sign(
                { _id: data._id, role: data.role },
                process.env.JWT_SECRET
              );
              res.cookie("token", token);
              const { _id, loginId, name, role } = data;
              return res.json({
                token,
                user: { _id, loginId, name, role },
              });
            });
          }
        });
      } else {
        return res.status(400).json({
          error: "Google login failed. Try again",
        });
      }
    });
};

exports.facebooklogin = (req, res) => {
  const { userID, accessToken } = req.body;

  let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

  fetch(urlGraphFacebook, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      const { email, name } = response;
      console.log(response);

      User.findOne({ loginId: email }).exec((err, user) => {
        if (err) {
          res.status(400).json({ error: "Something went wrong..." });
        } else {
          if (user) {
            const token = jwt.sign(
              { _id: user._id, role: user.role },
              process.env.JWT_SECRET
            );
            res.cookie("token", token);
            const { _id, loginId, name, role } = user;
            return res.json({
              token,
              user: { _id, loginId, name, role },
            });
          } else {
            let password = email + process.env.JWT_SECRET;
            user = new User({ name, loginId: email, password });
            user.save((err, data) => {
              if (err) {
                console.log("ERROR GOOGLE LOGIN ON USER SAVE", err);
                return res.status(400).json({
                  error: "User signup failed with google",
                });
              }
              const token = jwt.sign(
                { _id: data._id, role: data.role },
                process.env.JWT_SECRET
              );
              res.cookie("token", token);
              const { _id, loginId, name, role } = data;
              return res.json({
                token,
                user: { _id, loginId, name, role },
              });
            });
          }
        }
      });
    });
};
