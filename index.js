//dependencies
const express = require("express")
const securityConfig = require("./src/configs/securityConfig")
const corsConfig = require("./src/configs/corsConfig")
const { errorController } = require("./src/controllers/errorController")
const connectDatabase = require("./src/configs/databaseConfig")
require("dotenv").config()  //dot-env


//creating app object
const app = express()

//appling configuration on the app
app.use(...securityConfig)
app.use(corsConfig())

app.use(express.json())

//router
app.use("api/v1",(req,res,next)=>{
    res.json("roni")
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