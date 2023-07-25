import User from "../db/models/User-model.js";

class PutControllers {
  async changeBalance(req, res) {
    try {
      const { id } = req.params;
      const { amount } = req.body;

      // Find the user by ID
      const user = await User.findOne({ where: { chatId: id } });

      // Update the user balance and save changes to the database
      user.balance += amount;
      await user.save();

      res.json({ balance: user.balance });
    } catch (error) {
      console.error("Error updating balance:", error);
      res
        .status(500)
        .json({ error: "Server error. Unable to update balance." });
    }
  }

  async changeMeflvl(req, res) {
    try {
      const { id } = req.params;
      const { amount } = req.body;

      // Find the user by ID
      const user = await User.findOne({ where: { chatId: id } });

      // Update the meflvl and save changes to the database
      user.meflvl = amount;
      await user.save();

      res.json({ meflvl: user.meflvl });
    } catch (error) {
      console.error("Error updating meflvl:", error);
      res.status(500).json({ error: "Server error. Unable to update meflvl." });
    }
  }

  async changeTimelvl(req, res) {
    try {
      const { id } = req.params;
      const { amount } = req.body;

      // Find the user by ID
      const user = await User.findOne({ where: { chatId: id } });

      // Update the timelvl and save changes to the database
      user.timelvl = amount;
      await user.save();

      res.json({ timelvl: user.timelvl });
    } catch (error) {
      console.error("Error updating timelvl:", error);
      res
        .status(500)
        .json({ error: "Server error. Unable to update timelvl." });
    }
  }
}

export default new PutControllers();
