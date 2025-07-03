import {Router} from "express";
import {checkAuth} from "../middlewares/middleware.js"
import { createTicket, getProjectTickets } from "../controllers/ticket.controller.js";
const ticketRouter = Router();
ticketRouter.post("/create",checkAuth,createTicket);
ticketRouter.get("/project/:id",checkAuth,getProjectTickets);
export default ticketRouter;