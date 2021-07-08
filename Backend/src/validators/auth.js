const { check,validationResult } = require("express-validator");

exports.validateSignupRequest =[
     check('name')
    .notEmpty()
    .withMessage('name is required'),
     check('loginId')
    .notEmpty()
    .withMessage('loginId is required'),
     check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 character long'),


]

exports.validateSigninRequest =[
   
     check('loginId')
    .notEmpty()
    .withMessage('Valid loginId is required'),
     check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 character long'),


]

exports.isRequestVaildated = (req,res,next)  =>{
        const errors = validationResult(req);
        if(errors.array().length>0){
            return res.status(400).json({error: errors.array()[0].msg})
        }

        next()
}
