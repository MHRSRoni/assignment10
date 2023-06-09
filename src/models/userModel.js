//dependencies
const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    name : {
        type : String,
        minlength : 3,
        trim : true,
        required : true,
    },
    email : {
        type : String,
        minlength : 5,
        trim : true,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        minlength : 6,
        required : true,
    }
},{
    timestamps : true,
    versionKey : false,
})

const UserModel = model("user", userSchema)

module.exports = UserModel