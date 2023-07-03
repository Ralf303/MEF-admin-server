import { Router } from "express";
import Logs from "../db/models/Logs-model.js";

const logsRouter = new Router();

logsRouter.get("/logs", async (req, res) => {
  try {
    const logs = await Logs.findAll();
    res.json(logs);
  } catch (error) {
    console.error("Error retrieving logs:", error);
    res.status(500).json({ error: "Server error. Unable to fetch logs." });
  }
});

export default logsRouter;
