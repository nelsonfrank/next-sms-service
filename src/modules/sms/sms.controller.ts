//dependencies
import { Response, Request } from "express";

// libs
import Axios from '../../libs/axios';

// dto
import { ScheduleSmsDTO, SmsDTO } from '../../schemas/sms'

const SmsController = {

    sendSms: async (req: Request, res: Response) => {
        const payload = req.body;
        const result = SmsDTO.safeParse(payload);
        if (!result.success) res.status(400).send(result.error.message);

        try {
            const next_payload = {
                from: "NEXTSMS",
                to: payload.phoneNumber,
                text: payload.message,
                reference: 'aswqetgcv'
            }
            await Axios.post('/api/sms/v1/text/single', next_payload);
            // SendSms
            return res.status(201).json({
                message: 'Message sent successfully'
            });
        } catch (error) {
            return res.status(400).json({
                message: error
            });
        }
    },


    scheduleSms: async (req: Request, res: Response) => {
        const payload = req.body;
        const result = ScheduleSmsDTO.safeParse(payload);
        if (!result.success) res.status(400).send(result.error.message);

        try {
            const next_payload = {
                from: "NEXTSMS",
                to: payload.phoneNumber,
                text: payload.message,
                date: payload.date,
                time: payload.time,
                reference: 'aswqetgcv'
            }
            await Axios.post('/api/sms/v1/text/single', next_payload);
            // Schedule sms
            return res.status(201).json({
                message: 'Messge scheduled successfully'
            });
        } catch (error) {
            return res.status(400).json({
                message: error
            });
        }


    },


};

export default SmsController;