import { Router } from "express";

const stockRoutes = Router();

stockRoutes.get("/stock");
stockRoutes.post("/stock");

export default stockRoutes;
