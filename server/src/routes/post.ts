import express from "express"

import { handleCreatePost, handleGetPosts} from "../handlers/v1/post"
import { PostAuth } from "../middleware/postauth"
const router = express.Router()

router.post("/create", PostAuth,  handleCreatePost)
// handle query on get request
router.get("/",PostAuth, handleGetPosts)


module.exports = router
