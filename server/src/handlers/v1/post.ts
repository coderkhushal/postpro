import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient()
export const handleCreatePost = async (req: Request, res: Response) => {
    try {

        let { title, content } = req.body
                if (!title || !content) {
                    console.log(title, content)
            return res.status(400).json({ message: "All fields are required" })
        }


        let post = await prisma.post.create({
            data: {
                title,
                content,
                authorId: req.body.user.id
            }
        });

        if (!post) {
            return res.status(500).json({ msg: "Internal Server Error" });
        }
        res.json({ success: true, message: "Created Successfully" });
    }
    catch (er) {
        console.log(er)
        return res.status(500).json({ msg: "Internal Server Error" })
    }



}

export const handleGetPosts = async (req: Request, res: Response) => {
    try{

        const query = req.query
        let user = req.body.user
        let page = (query.page && parseInt(query.page.toString())>1) ? parseInt(query.page.toString()) : 1
        let posts = await prisma.post.findMany({
            where: {
                authorId: user.id
            },
            
            skip: 10 * (page -1),
            take : 10, 

        })
        res.json({success:true, data:posts})

    }
    catch(err){
        console.log(err)
        return res.status(500).json({msg:"Internal Server Error"})
    }
        
}