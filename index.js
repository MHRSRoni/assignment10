//dependencies
const express = require("express")
const securityConfig = require("./src/configs/securityConfig")
const corsConfig = require("./src/configs/corsConfig")
const { errorController } = require("./src/controllers/errorController")
const connectDatabase = require("./src/configs/databaseConfig")
const productRouter = require("./src/routers/productRouter")
const userRouter = require("./src/routers/userRouter")
require("dotenv").config()  //dot-env


//creating app object
const app = express()

//appling configuration on the app
app.use(...securityConfig)
app.use(corsConfig())


app.use(express.json())

//router
app.use("/api/v1/user", userRouter)
app.use("/api/v1",  productRouter)

//not valid routes
app.use("*",(req, res, next)=>{
    next({code : 404, msg : "requested url doesn't exist"})
})


//error controller
app.use(errorController)

const PORT = process.env.PORT || 3000

// Starting listening
app.listen(PORT,
        ()=>{
            console.log("server is running on port " + PORT)
            connectDatabase();  //connecting database
        })   