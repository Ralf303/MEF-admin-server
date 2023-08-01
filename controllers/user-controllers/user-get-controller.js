import Item from "../../db/models/Item-model.js";
import Roles from "../../db/models/Role-model.js";
import User from "../../db/models/User-model.js";

class GetUsersControllers {
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

  async getOneUser(req, res) {
    console.log("дошло");
    const userId = req.params.id;
    try {
      const user = await User.findOne({
        where: { chatId: userId },
        include: [
          { model: Item, as: "items" },
          { model: Roles, as: "role" },
        ],
      });
      res.json(user);
    } catch (error) {
      console.error("Error retrieving user data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new GetUsersControllers();
