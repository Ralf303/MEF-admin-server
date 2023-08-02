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

  async mineCasesUpdate(data) {
    const { id } = data.params;
    const { amount } = data.body;

    const user = await User.findOne({ where: { chatId: id } });

    user.minecraftCase += amount;
    await user.save();

    return { minecraftCase: user.minecraftCase };
  }

  async falloutCasesUpdate(data) {
    const { id } = data.params;
    const { amount } = data.body;

    const user = await User.findOne({ where: { chatId: id } });

    user.falloutCase += amount;
    await user.save();

    return { falloutCase: user.falloutCase };
  }

  async brawlCasesUpdate(data) {
    const { id } = data.params;
    const { amount } = data.body;

    const user = await User.findOne({ where: { chatId: id } });

    user.brawlCase += amount;
    await user.save();

    return { brawlCase: user.brawlCase };
  }

  async hotlineCasesUpdate(data) {
    const { id } = data.params;
    const { amount } = data.body;

    const user = await User.findOne({ where: { chatId: id } });

    user.hotlineCase += amount;
    await user.save();

    return { hotlineCase: user.hotlineCase };
  }

  async donateCasesUpdate(data) {
    const { id } = data.params;
    const { amount } = data.body;

    const user = await User.findOne({ where: { chatId: id } });

    user.donateCase += amount;
    await user.save();

    return { donateCase: user.donateCase };
  }
}

export default new UpdateService();
