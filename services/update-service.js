import User from "../db/models/User-model.js";

class UpdateService {
  async mefUpdate(data) {
    const { id } = data.params;
    const { amount } = data.body;

    const user = await User.findOne({ where: { chatId: id } });

    user.balance += amount;
    await user.save();

    return { balance: user.balance };
  }

  async meflvlUpdate(data) {
    const { id } = data.params;
    const { amount } = data.body;

    const user = await User.findOne({ where: { chatId: id } });

    user.meflvl = amount;
    await user.save();

    return { meflvl: user.meflvl };
  }

  async timelvlUpdate(data) {
    const { id } = data.params;
    const { amount } = data.body;

    const user = await User.findOne({ where: { chatId: id } });

    user.timelvl = amount;
    await user.save();

    return { timelvl: user.timelvl };
  }
}

export default new UpdateService();
