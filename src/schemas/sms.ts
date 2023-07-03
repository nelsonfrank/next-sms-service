import { z } from "zod";


export const SmsDTO = z.object({
    phoneNumber: z.string(),
    message: z.string()
});

export const ScheduleSmsDTO = z.object({
    phoneNumber: z.string(),
    message: z.string(),
    date: z.string(),
    time: z.string(),
});


export type SmsType = z.infer<typeof SmsDTO>;
export type ScheduleSmsType = z.infer<typeof ScheduleSmsDTO>;