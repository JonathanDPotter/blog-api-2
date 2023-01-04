import { Router } from "express";
import controller from "../controllers/post.controller";
import extractJWT from "../middleware/extractJWT";

const router = Router();
router.post("/", extractJWT, controller.createPostHandler);
router.get("/", controller.getAllPostsHandler);
router.get("/:_id", controller.getPostHandler);
router.get("/user/:_id", controller.getUserPostsHandler);
router.patch("/:_id", extractJWT, controller.updatePostHandler);
router.delete("/:_id", extractJWT, controller.deletePostHandler);

export default router;
