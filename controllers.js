const Product=require('./model/product.js')

//get products
const getProducts=async(req,res)=>{
    try {
        const products=await  Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}

//get products by id
const getProductsId=async(req,res)=>{
    try {
        const { id }= req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}


//post create product
const createProducts=async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
       } catch (error) {
        res.status(500).json({message:error.message});
       }

}

//put update product
const updateProducts=async(req,res)=>{
    try {
        const { id }=req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product)
        {
            res.status(404).json({message: "Product not found"})
        }
        const updateProduct  = await Product.findById(id);
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}

//delete
const deleteProducts=async(req,res)=>{
    try {
        const { id }=req.params;
        const product = await Product.findByIdAndDelete (id, req.body);
        if(!product)
        {
            res.status(404).json({message: "Product not found"})
        }

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}

module.exports={getProducts, createProducts, updateProducts, deleteProducts, getProductsId};