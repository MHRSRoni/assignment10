const { signup, login } = require("../controllers/userController")

const userRouter = require("express").Router()


userRouter.post("/signup", signup)
userRouter.post("/login", login)



module.exports = userRouter