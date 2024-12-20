import express from "express"
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js"
import { calcualteTotalSalesByDate, calculateTotalSales, countTotalOrder, createOrder, findOrderById, getAllOrders, getUserOrders, markOrderAsPaid, markOrderDelivered } from "../controller/orderController.js"
const router = express.Router()

router.route("/").post(authenticate,createOrder)
router.route("/all").get(authenticate,authorizeAdmin,getAllOrders)
router.route("/mine").get(authenticate,getUserOrders)
router.route("/total-orders").get(countTotalOrder)
router.route("/total-sales").get(calculateTotalSales)
router.route("/total-sales-by-date").get(calcualteTotalSalesByDate);
router.route("/:id").get(authenticate, findOrderById);
router.route("/:id/pay").put(authenticate, markOrderAsPaid);
router
  .route("/:id/deliver")
  .put(authenticate, authorizeAdmin, markOrderDelivered);
export default router