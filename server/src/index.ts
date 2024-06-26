// write a express app
import express from 'express';
import { Request, Response } from 'express';
import cors from "cors"
import bodyParser from 'body-parser';
import { ratelimiter } from './middleware/ratelimit';
const app = express()
app.use(express.json())
app.use(cors({
    credentials: true,
    
}));
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(ratelimiter)
app.use("/auth", require("./routes/auth"))
app.use("/post", require("./routes/post"))
app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})
