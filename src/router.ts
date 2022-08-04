import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import {createUserShema} from "./schema/user.schema"
const routes = (app: Express) =>{
 app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

 app.post('api/users', validateResource(createUserShema), createUserHandler)
}

export default routes;