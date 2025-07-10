const productModel = require("../models/productModel");
const ProductModel = require("../models/productModel")

//Get Product API - /API/V1/PRODUCTS

exports.getProducts = async (req,res) => {

   const query = req.query.keyword?{ name : {
        $regex: req.query.keyword,
        $options: 'i'
    }}:{}
const products = await ProductModel.find(query);

res.json({
    success: true,
    products
})
}

//Get Single Product API - /API/V1/PRODUCTS/:ID

exports.getSingleProducts = async (req,res) => {
try {
   console.log(req.params.id, 'ID')
 const product = await ProductModel.findById(req.params.id);

    res.json({
    success: true,
    product
})
} catch(error)
{
    res.status(404).json({
        success: false,
        message: 'Unable to get product with that Id'
    })
}
}