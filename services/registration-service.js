import Roles from "../db/models/Role-model.js";
import User from "../db/models/User-model.js";

class RegistrationService {
  async registration(data) {
    const { username, password } = data;

    const user = await User.findOne({ where: { chatId: username } });
    const role = await Roles.findOne({ where: { roleId: user.id } });
    const status = role.status;

    if (status && password === role.password) {
      return { authenticated: true, status: status };
    } else {
      return { authenticated: false, status: null };
    }
  }

  async authorization(data) {
    const { id } = data;

    const user = await User.findOne({ where: { chatId: id } });
    const role = await Roles.findOne({ where: { roleId: user.id } });

    if (role) {
      return { authenticated: true };
    } else {
      return { authenticated: false };
    }
  }
}

export default new RegistrationService();
