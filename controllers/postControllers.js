import Roles from "../db/models/Role-model.js";
import User from "../db/models/User-model.js";

class PostControllers {
  async userRegistration(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ where: { chatId: username } });
      const role = await Roles.findOne({ where: { roleId: user.id } });
      const status = role.status;

      if (status && password === role.password) {
        res.send({ authenticated: true, status: status });
      } else {
        res.send({ authenticated: false, status: null });
      }
    } catch (error) {
      console.error("Error retrieving password:", error);
      res.status(500).json({ error: "Server error." });
    }
  }
}

export default new PostControllers();
