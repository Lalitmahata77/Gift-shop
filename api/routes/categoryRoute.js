import express from "express"
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js"
import { caregoryDetails, create, deleteCategory, getCategories, upadteCategory } from "../controller/categoryController.js"
const router = express.Router()


router.route("/").post(authenticate,authorizeAdmin,create)
.get(authenticate,getCategories)
router.route("/:id").get(authenticate,caregoryDetails)
router.route("/update/:id").put(authenticate,authorizeAdmin,upadteCategory)
router.route("/delete/:id").delete(authenticate,authorizeAdmin,deleteCategory)

export default router