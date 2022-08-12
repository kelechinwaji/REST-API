import {Response, Request} from "express"
import { createSession, findSessions } from "../service/session.service";
import { validatePassword } from "../service/user.service"
import { signJwt } from "../utils/jwt.utils";
import config from "config";

export const createUserSessionHandler = async (req:Request , res:Response)=>{

    //Validate the user's password
   const user = await validatePassword(req.body);
   if (!user){
    return res.status(401).send("Invalid email or password")
   }
    //create a session
   const session = await createSession(user._id, req.get('user-agent') || "")
    //create an access token
    const accessToken = signJwt({...user, session: session._id}, {expiresIn: config.get('accessTokenTtl')}
        )

    //create a refresh token

    const refreshToken = signJwt({...user, session: session._id}, {expiresIn: config.get('refreshTokenTtl')}
        )

    //return access and refresh tokens

    return res.send({accessToken, refreshToken})
}

export const getUserSessionsHandler = async (req:Request , res:Response)=>{
    const userId = res.locals.user._id;

    const sessions = await findSessions({ user: userId, value: true});

    return res.send(sessions)

}