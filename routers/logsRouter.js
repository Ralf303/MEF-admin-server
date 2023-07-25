import { Router } from "express";
import GetControllers from "../controllers/getControllers.js";

const logsRouter = new Router();

logsRouter.get("/getLogs", GetControllers.getLogs);

export default logsRouter;
