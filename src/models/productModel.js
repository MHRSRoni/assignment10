//dependencies for product model
const {Schema, model} = require("mongoose")

//creating product schema
const productSchema = new Schema({
    name : {
        type : String,
        required : true,
        minlength : 3,
    },
    price : {
        type : Number,
        required : true,
        min : 0,
    },
    description : String,
},{
    timestamps : true,
})

//creating product model
const ProductModel = model("product",   productSchema)

//exporting product model 
module.exports = ProductModel