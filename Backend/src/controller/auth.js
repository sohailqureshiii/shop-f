const User = require('../models/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {OAuth2Client} = require('google-auth-library')
const { response } = require('express')
const fetch = require('node-fetch')

// const client = new OAuth2Client("578690882773-rkanjv60fh7ip7gus67q1s0kshnfu14b.apps.googleusercontent.com")

exports.signup = (req, res) => {
    User.findOne({ loginId: req.body.loginId })
        .exec(async (error, user) => {

            if (user) return res.status(401).json({
                message: "User already registered"
            });

            const {
                loginId,
                password,
                name,
            } = req.body;
            const _user = new User({
                loginId,
                password,
                name,
                role: 'user',
            });

            const salt = await bcrypt.genSalt(10)
            _user.password = await bcrypt.hash(password,salt);

            _user.save((error, data) => {
                if (error) {
                    return res.status(401).json({
                        "error":error
                    })
                }
                if (data) {

                  const token = jwt.sign({ _id: data._id,role:data.role}, process.env.JWT_SECRET);
                  res.cookie('token', token);
                                              // const { _id,name,email } = data;
                                              res.status(200).json({
                                                  token,
                                                  user: {
                                                      // _id,name,email
                                                      _id:data._id,
                                                      name:data.name,
                                                      loginId:data.loginId
                                                  },
                                                
                                              })

                    // return res.status(200).json({
                    //     message: "User created Successfully...!"
                    // })
                }
            })
        });
}

exports.signin = (req, res) => {
    User.findOne({ loginId: req.body.loginId })
        .exec(async(error, user) => {
            if (error) return res.status(401).json({message: "User not found"})
            if (user) {

                const checkpassword = await bcrypt.compare(req.body.password,user.password);

                if ( checkpassword && user.role === 'user') {
                    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
                    const { _id,name, role,following,loginId } = user;
                    res.cookie('token', token);
                    res.status(200).json({
                        token,
                        user: {
                            _id,name, role,following,loginId
                        },
                        following
                    })
                } else {
                    return res.status(401).json({
                        message: "Invalid Password"
                    })
                }
            }
            else {
                return res.status(401).json({ message: "something went wrong" })
            }
        })
}

// exports.googlelogin = (req,res) =>{
//     const {idToken} = req.body;

//     client.verifyIdToken({idToken, audience: "578690882773-rkanjv60fh7ip7gus67q1s0kshnfu14b.apps.googleusercontent.com"})
//     .then(response =>{
//         const {email_verfied,name,email} = response.payload;
 
//        if(email_verfied){
//             User.findOne({email})
//             .exec((error,user)=>{
//                 if (error) 
//                 {
//                     return(
//                  res.status(401).json({error:"Something went Wrong"}))
//                 }
                  
//                 else{
//                     if(user){

//                         const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET);
//                         const { _id,name,email } = user;
//                         res.cookie('token', token);
//                         res.status(200).json({
//                             token,
//                             user: {
//                                 _id,name,email 
//                             }
//                         })
//                     }else{
                        
//                         let password = email;
//                         let newUser = new User({name,email,password});
//                         newUser.save((error,data)=>{
//                             if (error) {
//                                return res.status(401).json({error:"Something went Wrong"})
//                             }
                        

//                             const token = jwt.sign({ _id: data._id}, process.env.JWT_SECRET);
//                             const { _id,name,email } = newUser;
//                             res.status(200).json({
//                                 token,
//                                 user: {
//                                     _id,name,email
//                                 },
                              
//                             })
                            
//                         })


//                     }
//                 }
//             })
//         }
//     })
//     // .catch(error=>{
//     //     console.log(error)
//     // })
// }

exports.signout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: 'SignOut Successfully...!'
    })
}


// exports.edituserProfile = async(req,res)=>{
//     const {
//         firstName, lastName, email
//      } = req.body;  
     
//      const updatedUserProdile = await User.findOneAndUpdate({_id:req.user._id},{$set:{firstName,lastName,email}},
//         {new:true,useFindAndModify: false},
//         (err,updatedUserInfo)=>{
//             if(err) {
//                  return res.status(400).json({err});
//             }
//             if(updatedUserInfo){
//                 const user = User.findOne({_id:req.user._id})
//                 .select("-password")
//                 .exec((err,userInfo)=>{
//                     if(err)    return res.status(400).json({err});
//                     if(userInfo){
//                         return res.status(201).json({userInfo});
//                     }
//                 });
//             }
//         })
// }


const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
// Google Login
exports.googleController = (req, res) => {
  const { idToken } = req.body;

  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
    .then(response => {
      // console.log('GOOGLE LOGIN RESPONSE',response)
      console.log(response.payload);
      const { email_verified, name, email } = response.payload;
      if (email_verified) {
        User.findOne({ loginId:email }).exec((err, user) => {
          if (user) {
            // const token = jwt.sign({ _id: user._id,role:user.role}, process.env.JWT_SECRET, {
            //   expiresIn: '7d'
            // });
            const token = jwt.sign({ _id: user._id,role:user.role}, process.env.JWT_SECRET);
            res.cookie('token', token);
            const { _id, loginId, name, role } = user;
            return res.json({
              token,
              user: { _id, loginId, name, role }
            });
          } else {
            let password = email + process.env.JWT_SECRET;
            user = new User({ name, loginId:email, password });
            user.save((err, data) => {
              if (err) {
                console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
                return res.status(400).json({
                  error: 'User signup failed with google'
                });
              }
              const token = jwt.sign(
                { _id: data._id,role:data.role },
                process.env.JWT_SECRET
              );
              res.cookie('token', token);
              const { _id, loginId, name, role } = data;
              return res.json({
                token,
                user: { _id, loginId, name, role }
              });
            });
          }
        });
      } else {
        return res.status(400).json({
          error: 'Google login failed. Try again'
        });
      }
    });
};




// const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
// // Google Login
// exports.googleController = (req, res) => {
//   const { idToken } = req.body;

//   client
//     .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
//     .then(response => {
//       // console.log('GOOGLE LOGIN RESPONSE',response)
//       const { email_verified, name, email } = response.payload;
//       if (email_verified) {
//         User.findOne({ email }).exec((err, user) => {
//           if (user) {
//             const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//               expiresIn: '7d'
//             });
//             const { _id, email, name, role } = user;
//             return res.json({
//               token,
//               user: { _id, email, name, role }
//             });
//           } else {
//             let password = email + process.env.JWT_SECRET;
//             user = new User({ name, email, password });
//             user.save((err, data) => {
//               if (err) {
//                 console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
//                 return res.status(400).json({
//                   error: 'User signup failed with google'
//                 });
//               }
//               const token = jwt.sign(
//                 { _id: data._id },
//                 process.env.JWT_SECRET,
//                 { expiresIn: '7d' }
//               );
//               const { _id, email, name, role } = data;
//               return res.json({
//                 token,
//                 user: { _id, email, name, role }
//               });
//             });
//           }
//         });
//       } else {
//         return res.status(400).json({
//           error: 'Google login failed. Try again'
//         });
//       }
//     });
// };


exports.facebooklogin = (req,res) =>{
  // console.log(req.body.accessToken);
  // console.log(req.body.userID);

  const {userID,accessToken} = req.body;

  let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`

  fetch(urlGraphFacebook,{
    method:'GET'
  })
  .then(response => response.json())
  .then(response =>{

    const {email,name} =response;
    console.log(response)

    User.findOne({ loginId:email }).exec((err, user) => {
      if(err)  {
        res.status(400).json({error:"Something went wrong..."})
      }else{
        if(user){
          const token = jwt.sign({ _id: user._id,role:user.role}, process.env.JWT_SECRET);
              res.cookie('token', token);
              const { _id, loginId, name, role } = user;
              return res.json({
                token,
                user: { _id, loginId, name, role }
              });
        }else{
          let password = email + process.env.JWT_SECRET;
          user = new User({ name, loginId:email, password });
          user.save((err, data) => {
            if (err) {
              console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
              return res.status(400).json({
                error: 'User signup failed with google'
              });
            }
            const token = jwt.sign(
              { _id: data._id,role:data.role },
              process.env.JWT_SECRET
            );
            res.cookie('token', token);
            const { _id, loginId, name, role } = data;
            return res.json({
              token,
              user: { _id, loginId, name, role }
            });
          });
        }
      }

    })
  })

}