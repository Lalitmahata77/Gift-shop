import express from "express"
import {  contact } from "../controller/contact.js"

const router = express.Router()

router.route("/send-email").post(contact)



export default router