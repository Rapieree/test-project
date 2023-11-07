import {NextApiRequest, NextApiResponse} from "next";
import {createRouter} from "next-connect";
import {postController} from "../../../controllers/post/post.controller";
import {onError} from "../../../service/api/middlewares/on-error";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(postController.create);

export default router.handler({onError});
