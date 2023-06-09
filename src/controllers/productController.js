//dependencies
const ProductModel = require("../models/productModel")
exports.getAllProduct = async (req, res, next)=>{
    const product = await ProductModel.find({},{_id : 0, name : 1, price : 1})
    res.json(product)
}

exports.createProduct = async (req, res, next)=>{
    const {name = "", price = null, description = "", owner = ""} = req.body
    if(!name){next({code : 400, msg : "fill all the field"})}
    if(!price){next({code : 400, msg : "fill all the field"})}

    const product = new ProductModel({
        name,
        price,
        description,
        owner,
    })
    await product.save()
    .then(data=>{ 
        const {name, price, description, createdAt} = data  //destructring data for info
        const resData = {name, price, description, createdAt}   //creating resData
        res.json({status : "created successfully", data : resData})
    })
    .catch(err=>next({code : 400, msg : "Check your data"}))
    
}