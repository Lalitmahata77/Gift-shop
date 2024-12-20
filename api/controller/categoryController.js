import asyncHandler from "../middleware/asycHandler.js";
import Category from "../model/categoryModel.js";

export const create = asyncHandler(async(req,res,next)=>{
    try {
        const {name} = req.body;
        const {categoryId} = req.params;
        if (!name) {
            res.status(400)
            throw new Error("Name is required")
        }

        const category = await Category.findOne({_id : categoryId})
        if (category) {
            res.status(400)
            throw new Error("Category already exist")
        }
      const newCategory = new Category({name})
      await newCategory.save()
      res.status(200).json({newCategory, success:true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const getCategories = asyncHandler(async(req,res,next)=>{
    try {
        const categories = await Category.find({})
        res.status(200).json({categories,success:true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const caregoryDetails = asyncHandler(async(req,res,next)=>{
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json({category,success:true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
})

export const upadteCategory = asyncHandler(async(req,res,next)=>{
    try {
        const {name} = req.body;
        const {id} = req.params;
        const category = await Category.findOne({_id : id})
        if (!category) {
           return res.json({message : "category not found"})
        }
        category.name = name
        const updatedCategory = await category.save()
        res.status(200).json(updatedCategory)

    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal server error"})
        
    }
})

export const deleteCategory = asyncHandler(async(req,res,next)=>{
    try {
        const {id} = req.params;
        const remove = await Category.findByIdAndDelete(id)
        res.status(200).json({message:"category removed", remove});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
})