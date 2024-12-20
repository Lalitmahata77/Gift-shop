import express from "express"
import { deleteUser, getAllUsers, getUserDetails, getUserProfile, login, logout, register, upadteUserById, updateCurrentUserProfile } from "../controller/userController.js"
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js"
const router = express.Router()

router.route("/").post(register)
.get(authenticate,authorizeAdmin,getAllUsers)
router.route("/login").post(login)
router.route("/logout").post(authenticate,logout)
router.route("/profile").get(authenticate,getUserProfile)
.put(authenticate,updateCurrentUserProfile)
router.route("/:id")
.delete(authenticate, authorizeAdmin, deleteUser)
.get(authenticate, authorizeAdmin, getUserDetails)
.put(authenticate, authorizeAdmin,upadteUserById)
export default router