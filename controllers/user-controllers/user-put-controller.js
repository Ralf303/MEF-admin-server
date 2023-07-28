import User from "../../db/models/User-model.js";
import UpdateService from "../../services/update-service.js";

class UsersPutController {
  async changeBalance(req, res) {
    try {
      const update = await UpdateService.mefUpdate(req);

      res.json(update);
    } catch (error) {
      console.error("Error updating balance:", error);
      res
        .status(500)
        .json({ error: "Server error. Unable to update balance." });
    }
  }

  async changeMeflvl(req, res) {
    try {
      const update = await UpdateService.meflvlUpdate(req);

      res.json(update);
    } catch (error) {
      console.error("Error updating meflvl:", error);
      res.status(500).json({ error: "Server error. Unable to update meflvl." });
    }
  }

  async changeTimelvl(req, res) {
    try {
      const update = await UpdateService.timelvlUpdate(req);

      res.json(update);
    } catch (error) {
      console.error("Error updating timelvl:", error);
      res
        .status(500)
        .json({ error: "Server error. Unable to update timelvl." });
    }
  }
}

export default new UsersPutController();
