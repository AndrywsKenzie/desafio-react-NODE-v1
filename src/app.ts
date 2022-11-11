import "reflect-metadata";
import "express-async-errors";
import express from "express";
import appStockRouter from "./routes";
//import { errorMiddleware } from "./middlewares/error.middleware"

const app = express();
app.use(express.json());
appStockRouter(app);

//app.use(errorMiddleware)

export default app;
