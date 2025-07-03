import {Router} from "express";
import { checkAuth } from "../middlewares/middleware.js";
import { createProject, getAllProjects, getUserProjects } from "../controllers/project.controller.js";

const projectRouter = Router();
projectRouter.post("/create",checkAuth,createProject);
projectRouter.get("/all",checkAuth,getAllProjects);
projectRouter.get("/me",checkAuth,getUserProjects);
export default projectRouter;