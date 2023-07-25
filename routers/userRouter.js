import { Router } from "express";

import PutControllers from "../controllers/putControllers.js";
import GetControllers from "../controllers/getControllers.js";
import PostControllers from "../controllers/postControllers.js";

const userRouter = new Router();

userRouter.get("/getAllUsers", GetControllers.getUsers);

userRouter.post("/registration", PostControllers.userRegistration);

// Route to handle updating user balance
userRouter.put("/changeValue/:id/balance", PutControllers.changeBalance);

// Route to handle updating user balance
userRouter.put("/changeValue/:id/meflvl", PutControllers.changeMeflvl);

// Route to handle updating timelvl
userRouter.put("/changeValue/:id/timelvl", PutControllers.changeTimelvl);

export default userRouter;
