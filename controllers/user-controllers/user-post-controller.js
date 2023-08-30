import RegistrationService from "../../services/registration-service.js";

class UserPostController {
  async userRegistration(req, res) {
    try {
      const response = await RegistrationService.registration(req.body);
      res.send(response);
    } catch (error) {
      console.error("Error retrieving password:", error);
      res.status(500).json({ error: "Server error." });
    }
  }

  async userAuthorization(req, res) {
    try {
      const response = await RegistrationService.authorization(req.body);
      res.send(response);
    } catch (error) {
      console.error("Error retrieving password:", error);
      res.status(500).json({ error: "Server error." });
    }
  }
}

export default new UserPostController();
