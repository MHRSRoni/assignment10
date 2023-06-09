const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const { generateToken } = require("../utils/auth")


exports.signup = async (req, res, next) =>{
    const {name = "", email = "", password = ""} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const existUser = await UserModel.findOne({email})
    if(existUser){next({code : 400, msg : "Email already exist"})}
    else{
        const user = UserModel({
            name,
            email,
            password: hashedPassword,
        })
        await user.save()
        .then(()=>{
            const {_id, name, email, createdAt} = user
            res.json({_id,name,email,createdAt})
        })
        .catch((err)=>next({code : 400, msg : "check your data"}))
    }
}


exports.login = async (req, res, next) => {
    const {email = "", password = ""} = req.body
    if(!email){next({code : 400, msg : "fill all the field"})}
    if(!password){next({code : 400, msg : "fill all the field"})}
    const user = await UserModel.findOne({email})
    if(!user){next({code : 404, msg : "user not exist"})}
    else{
        const passMatch = await bcrypt.compare(password, user.password)
        if(!passMatch){next({code : 400, msg : "verification failed"})}
        else{
            const token = generateToken({_id : user._id, name : user.name})
            res.json({
                name : user.name,
                email : user.email,
                access_token : token,
                valid_for : "7d"
            })
        }
    }
}

