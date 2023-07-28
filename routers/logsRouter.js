import { Router } from "express";
import LogsGetController from "../controllers/logs-controllers/logs-get-controller.js";

const logsRouter = new Router();

logsRouter.get("/getLogs", LogsGetController.getLogs);

export default logsRouter;
