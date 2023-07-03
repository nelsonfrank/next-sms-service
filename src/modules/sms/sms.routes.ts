import express from "express";

import SmsController from "./sms.controller";

const Router = express.Router();

/**
 * POST /send
 * Send sms route
 */

Router.post("/send", SmsController.sendSms);


/**
 * POST /schedule
 * Schedule sms route
 */
Router.post(
    "/schedule",
    SmsController.scheduleSms
);


export default Router;