import { Router } from "express";
import User from "./db/models.js";

const router = new Router();

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Server error. Unable to fetch users." });
  }
});

// Route to handle updating user balance
router.put("/users/:id/balance", async (req, res) => {
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
    res.status(500).json({ error: "Server error. Unable to update balance." });
  }
});

// Route to handle updating user balance
router.put("/users/:id/meflvl", async (req, res) => {
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
});

// Route to handle updating timelvl
router.put("/users/:id/timelvl", async (req, res) => {
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
    res.status(500).json({ error: "Server error. Unable to update timelvl." });
  }
});

export default router;
