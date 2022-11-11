import { Express } from "express";
import stockRoutes from "./stock.routes";

const appStockRouter = (app: Express) => {
  app.use("", stockRoutes);
};

export default appStockRouter;
