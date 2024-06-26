import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { PrismaClient  } from "@prisma/client";
let prisma = new PrismaClient()
export const PostAuth = async(req: Request, res: Response, next: NextFunction)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ msg: "Unauthorized" })
    }
    let payload: any = jwt.verify(token.toString(), process.env.JWT_SECRET as string);
    if(!payload){
        return res.status(401).json({ msg: "Invalid token" });
    }
    let user = await prisma.user.findUnique({
        where: {
            id: payload.id
        }
    })
    if (!user) {
        return res.status(401).json({ msg: "Unauthorized" });
    }
    req.body.user = user
    next()

}