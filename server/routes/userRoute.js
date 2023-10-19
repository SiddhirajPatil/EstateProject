import express from "express";
import jwtCheck from "../config/auth0Config.js";
import { bookVisit, cancelBookings, createUser, getAllBookings, toFav } from "../controllers/userController.js";

const router = express.Router()
router.post("/register",jwtCheck,createUser)
router.post("/allBookings",getAllBookings)
router.post("/bookVisit/:id",jwtCheck,bookVisit)
router.post("/removeBooking/:id" ,jwtCheck,cancelBookings)
router.post("/toFav/:rid",jwtCheck,toFav)
export {router as UserRoute}