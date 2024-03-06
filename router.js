const express= require("express")
const router = express.Router();
const Product=require('./model/product.js')
const {getProducts,createProducts, updateProducts, deleteProducts, getProductsId}=require('./controllers.js')

//get all products
router.get('/',getProducts)

//get product by id
router.get('/:id',getProductsId)

//update products
router.put('/:id',updateProducts)

//create
router.post('/',createProducts)

//delete
router.delete('/:id',deleteProducts)

module.exports=router;