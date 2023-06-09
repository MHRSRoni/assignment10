const { getAllProduct, createProduct } = require("../controllers/productController")

//dependencies 
const express = require("express")
const { authorize } = require("../utils/auth")
const productRouter = express.Router()


//routes
productRouter.get("/products", getAllProduct)
productRouter.post("/products",authorize, createProduct)


//exporting
module.exports = productRouter