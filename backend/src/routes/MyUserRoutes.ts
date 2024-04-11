import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

/// Get User Data
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);

// Create a User
router.post("/", jwtCheck, MyUserController.createCurrentUser);

// Update Information of the User
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default router;
