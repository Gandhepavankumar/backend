import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();


app.use(cors({
    origin: process.env.CLIENT_URL,
}));
export default app;