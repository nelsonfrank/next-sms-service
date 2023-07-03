import dotenv from "dotenv";
import createServer from "./server";

dotenv.config();

const config = process.env;

const startServer = async () => {
    const app = createServer();

    const port: number = parseInt(<string>config.PORT, 10) || 4000;

    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at port ${port}`);
    });
};

startServer().catch((err) => console.log(err));