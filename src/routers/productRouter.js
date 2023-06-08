const { getAllProduct, createProduct } = require("../controllers/productController")

//dependencies 
const express = require("express")
const productRouter = express.Router()


//routes
productRouter.get("/products",  getAllProduct)
productRouter.post("/products", createProduct)


//exporting
module.exports = productRouter