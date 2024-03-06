const express= require('express')
const mongoose = require('mongoose')
const Product=require('./model/product.js')
const productRoute=require('./router.js')
const app= express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products', productRoute)


app.get('/', (req, res)=>{
    res.send("Hello there I am API")
})



mongoose.connect("mongodb+srv://harshumandekar123:JOQp2jAk2pBPfq8y@backenddb.jwtwiji.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server is runnning at port 3000")
    })
    console.log("Connected to Database")
})
.catch(()=>{
    console.log("Connection failed")
})