const express = require("express");
const mailRouter = express.Router();
const mailController = require("../controllers/mailController");

mailRouter.post("/schedule-email", mailController.scheduleEmail);

mailRouter.get("/scheduled-emails", mailController.getScheduledEmails);

mailRouter.get(
  "/scheduled-emails/:id",
  mailController.getScheduledEmailDetails
);

mailRouter.delete("/scheduled-emails/:id", mailController.cancelScheduledEmail);

module.exports = mailRouter;
