import express from "express";

const routes = express.Router()
import { addUser, getUser , loginUser, registerUser, userVerify} from "../controller/userController.js";
import { authmiddleware } from "../middleware/authmiddleware.js";

routes.get("/get", getUser)
routes.post("/addUser", addUser)
routes.post("/loginUser", loginUser)
routes.post("/registerUser", registerUser)
routes.post("/userVerify",authmiddleware, userVerify)

export default routes