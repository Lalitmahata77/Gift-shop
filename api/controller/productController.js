import asyncHandler from "../middleware/asycHandler.js";
import Product from "../model/productModel.js";


export const cerate = asyncHandler(async(req,res,next)=>{
    try {
        const {name, description, price, category, quantity,brand} = req.fields;
        switch (true) {
            case !name:
              return res.json({ error: "Name is required" });
            case !description:
              return res.json({ error: "Description is required" });
            case !price:
              return res.json({ error: "Price is required" });
              case !brand:
                return res.json({ error: "Brand is required" });
            case !category:
              return res.json({ error: "Category is required" });
            case !quantity:
              return res.json({ error: "Quantity is required" });
          }
        const product = new Product({...req.fields})
        await product.save()
        res.status(200).json({product, success : true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})


export const updateProduct = asyncHandler(async(req,res,next)=>{
    try {
        const {name,description,brand,quantity,price,category} = req.fields;
        switch(true){
            case !name :
                res.json({error : "Name is required"})
                case !description :
                    res.json({error : "Description is required"})
                    case brand :
                        res.json({error : "Brand is required"})
                        case !quantity :
                            res.json({error : "Quantity is required"})
                            case !price :
                                res.json({error : "Price is required"})
                                case !category :
                                    res.json({error : "Category is required"})
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{...req.fields},{new:true})
        await updatedProduct.save()
        res.status(200).json({updatedProduct, success:true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})


export const deleteProduct = asyncHandler(async(req,res,next)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({product,success:true})
    } catch (error) {
        console.log(error);
        res.status(200).json({message : "Internal server error"})
        
    }
})


export const getAllProducts = asyncHandler(async(req,res,next)=>{
    try {
        const products = await Product.find({}).populate("category", "name _id")
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(200).json({message : "Internal server error"})
        
    }
})

export const readProductById = asyncHandler(async(req,res,next)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error);
        res.status(200).json({message:"Internal server error"})
        
    }
})

export const fetchProduct = asyncHandler(async(req,res,next)=>{
    try {
        const pageSize = 6;
        const keyword = req.query.keyword ? {
         name : {
           $regex : req.query.keyword,
           $options : "i"
         },
        }: {}
        const count = await Product.countDocuments({...keyword})
        const products =await Product.find({...keyword}).limit(pageSize)
        res.status(200).json({
         products,
         page : 1,
         pages : Math.ceil(count/pageSize),
         hasMore : false
        })
     
    } catch (error) {
        console.log(error);
        res.status(200).json({message:"Internal server error"})
        
    }
})

export const addProductReview = asyncHandler(async(req,res,next)=>{
try {
    const {rating,comment} = req.body;
    const product = await Product.findById(req.params.id)
    if (product) {
        const productAlreadyReview = product.reviews.find((r)=>r.user.toString() === req.user._id.toString())
        if (productAlreadyReview) {
            res.status(400)
            throw new Error("Product already reviewed")
        }

        const review = {
            name : req.user.username,
            rating : Number(rating),
            comment,
            user : req.user._id
        }
        product.reviews.push(review)
        product.numReviews = product.reviews.length

        product.rating = product.reviews.reduce((acc,item)=>item.rating + acc,0) / product.reviews.length
        await product.save()
        res.status(201).json("Reviewed added")
    }else{
        res.status(404);
        throw new Error("Product not found");
    }
} catch (error) {
    console.log(error);
    res.status(500).json({message : "Internal server error"})
    
}
})

export const fetchTopProduct = asyncHandler(async(req,res,next)=>{
    try {
      const product = await Product.find({}).sort({rating : -1}).limit(4)
      
      
      res.status(200).json(product)
    
    } catch (error) {
     console.error(error);
     res.status(400).json(error.message);
    }
   })
   
   export const fetchNewProduct = asyncHandler(async(req,res,next)=>{
     try {
       const product = await Product.find({}).sort({_id : -1}).limit(5)
       res.status(200).json(product)
     } catch (error) {
       console.error(error);
     res.status(400).json(error.message);
     }
    
   })
   
   export const filterProducts = asyncHandler(async(req,res,next)=>{
     try {
       const { checked, radio } = req.body;
   
       let args = {};
       if (checked?.length > 0) args.category = checked;
       if (radio?.length) args.price = { $gte: radio[0], $lte: radio[1] };
   
       const products = await Product.find(args);
       res.json(products);
     } catch (error) {
       console.error(error);
       res.status(500).json({ error: "Server Error" });
     }
   })