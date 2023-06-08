//error controller

exports.errorController = (err, req, res, next)=>{
    const {code = 500 , msg = "Internal Server Error"} = err

    
    //creating error obj for console log
    const error = {
        code : code,
        message : msg,
    }
    //consoling error
    console.log("====> Error : ", error)

    //sending response to the server
    !res.headersSent ?  res.status(code).json(msg) : console.log("====>","Error was not handled from Error Controller")
    
}