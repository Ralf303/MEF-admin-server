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

  async changeMineCases(req, res) {
    try {
      const update = await UpdateService.mineCasesUpdate(req);

      res.json(update);
    } catch (error) {
      console.error("Error updating mineCase:", error);
      res
        .status(500)
        .json({ error: "Server error. Unable to update mineCase." });
    }
  }

  async changeFalloutCases(req, res) {
    try {
      const update = await UpdateService.falloutCasesUpdate(req);

      res.json(update);
    } catch (error) {
      console.error("Error updating falloutCase:", error);
      res
        .status(500)
        .json({ error: "Server error. Unable to update falloutCase." });
    }
  }

  async changeBrawlCases(req, res) {
    try {
      const update = await UpdateService.brawlCasesUpdate(req);

      res.json(update);
    } catch (error) {
      console.error("Error updating brawlCase:", error);
      res
        .status(500)
        .json({ error: "Server error. Unable to update brawlCase." });
    }
  }

  async changeHotlineCases(req, res) {
    try {
      const update = await UpdateService.hotlineCasesUpdate(req);

      res.json(update);
    } catch (error) {
      console.error("Error updating hotlineCase:", error);
      res
        .status(500)
        .json({ error: "Server error. Unable to update hotlineCase." });
    }
  }

  async changeDonateCases(req, res) {
    try {
      const update = await UpdateService.donateCasesUpdate(req);

      res.json(update);
    } catch (error) {
      console.error("Error updating donateCase:", error);
      res
        .status(500)
        .json({ error: "Server error. Unable to update donateCase." });
    }
  }
}

export default new UsersPutController();
