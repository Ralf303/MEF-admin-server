import { Router } from "express";
import UserGetController from "../controllers/user-controllers/user-get-controller.js";
import UserPostController from "../controllers/user-controllers/user-post-controller.js";
import UserPutController from "../controllers/user-controllers/user-put-controller.js";

const userRouter = new Router();

userRouter.get("/getAllUsers", UserGetController.getUsers);

userRouter.get("/getOneUser/:id", UserGetController.getOneUser);

userRouter.post("/registration", UserPostController.userRegistration);

// Route to handle updating user balance
userRouter.put("/changeValue/:id/balance", UserPutController.changeBalance);

// Route to handle updating user balance
userRouter.put("/changeValue/:id/meflvl", UserPutController.changeMeflvl);

// Route to handle updating timelvl
userRouter.put("/changeValue/:id/timelvl", UserPutController.changeTimelvl);

export default userRouter;
