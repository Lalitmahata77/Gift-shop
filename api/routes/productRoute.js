import express from "express"
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js"
import { addProductReview, cerate, deleteProduct, fetchNewProduct, fetchProduct, fetchTopProduct, filterProducts, getAllProducts, readProductById, updateProduct } from "../controller/productController.js"
import formidable from "express-formidable"
const router = express.Router()


router.route("/").post(authenticate,authorizeAdmin,formidable(),cerate)
.get(fetchProduct)
router.route("/topproduct").get(fetchTopProduct)
router.route("/newproduct").get(fetchNewProduct)
router.route("/filtered-products").post(filterProducts)
router.route("/all").get(getAllProducts)
router.route("/:id").put(authenticate,authorizeAdmin,formidable(),updateProduct)
router.route("/:id").delete(authenticate,authorizeAdmin,deleteProduct)
router.route("/:id").get(readProductById)
router.route("/:id/addreview").post(authenticate,authorizeAdmin,addProductReview)
export default router