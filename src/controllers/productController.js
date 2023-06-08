//dependencies
const ProductModel = require("../models/productModel")
exports.getAllProduct = async (req, res, next)=>{
    const {name = "", price = null, description = ""} = req.body
    if(!name){next({code : 400, msg : "fill all the field"})}
    if(!price){next({code : 400, msg : "fill all the field"})}

    const product = new ProductModel({
        name,
        price,
        description
    })
    await product.save().catch(err=>console.log("failed to save"))
    res.json({status : "created successfull", data : product})
}

exports.createProduct = (req, res, next)=>{

}