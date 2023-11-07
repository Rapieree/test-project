import {NextApiRequest, NextApiResponse} from "next";
import {createRouter} from "next-connect";
import {ApiError} from "../../service/api/error";
import {onError} from "../../service/api/middlewares/on-error";
import {prisma} from "../../service/prisma-client";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
  const email = req.query.email as string;

  if (!email) {
    throw ApiError.badRequest(`Отсутствует емейл`);
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
    }
  });

  if (!user) {
    throw ApiError.badRequest(`Юзер с указанным емейлом не найден`);
  }

  res.json({user});
});

export default router.handler({onError});
