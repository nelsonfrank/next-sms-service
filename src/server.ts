/* eslint-disable @typescript-eslint/no-unused-vars */

// dependencies
import express, { Application, NextFunction, Response } from "express";
import cors from "cors";


// Routes
import SmsRoutes from "./modules/sms/sms.routes";


export default function createServer() {
    const app: Application = express();

    // body parser
    app.use(express.json());

    // cors
    app.use(
        cors({
            origin: [
                "http://localhost",
            ],
            credentials: true,
        })
    );

    // Routes
    app.use("/api/sms", SmsRoutes);



    // 404 Error Handler
    app.use((_req, res, _next) => {
        res.status(404).send("Not found");
    });

    // Global error handler middleware
    app.use((err: any,
        _req: any,
        res: Response,
        _next: NextFunction) => {
        // Default error status and message
        let status = 500;
        let message = 'Internal Server Error';

        // Check if the error has a specific status and message
        if (err.status) {
            status = err.status;
        }
        if (err.message) {
            message = err.message;
        }

        // Log the error for debugging
        console.error(err);

        // Send the error response
        res.status(status).json({
            error: {
                message: message,
            },
        });
    });
    return app;
}