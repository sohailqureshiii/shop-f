const jwt = require('jsonwebtoken');
const multerS3 = require('multer-s3')
const  aws = require("aws-sdk")
const shortid = require('shortid');
const multer = require('multer')



exports.requireSignin = ( req, res, next) => {

  if(req.headers.authorization){
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
     
  }else{
      return res.status(400).json({ message: 'Authorization Required'});
  }
 
  next();
}

exports.userMiddleware = (req, res, next) => {
  if(req.user.role !== 'user'){
      return res.status(400).json({ message: 'user access denied'});
  }
  next();
}



const s3 = new aws.S3({
  accessKeyId: "AKIAUJCXMGNZ2OINXLGZ",
  secretAccessKey : "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",
})

 exports.uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'shopisthan-demo-images',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null,shortid.generate()+'-'+file.originalname)
    }
  })
})