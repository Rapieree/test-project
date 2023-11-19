import {NextApiRequest, NextApiResponse} from "next";
import {createRouter} from "next-connect";
import {userController} from "../../controllers/user/user.controller";
import {onError} from "../../service/api/middlewares/on-error";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(userController.activateUser);

export default router.handler({onError});
