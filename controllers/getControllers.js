import Logs from "../db/models/Logs-model.js";
import Roles from "../db/models/Role-model.js";
import User from "../db/models/User-model.js";

class GetControllers {
  async getLogs(req, res) {
    try {
      const logs = await Logs.findAll();
      res.json(logs);
    } catch (error) {
      console.error("Error retrieving logs:", error);
      res.status(500).json({ error: "Server error. Unable to fetch logs." });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.findAll({
        include: [{ model: Roles, as: "role" }],
      });
      res.json(users);
    } catch (error) {
      console.error("Error retrieving users:", error);
      res.status(500).json({ error: "Server error. Unable to fetch users." });
    }
  }
}

export default new GetControllers();
