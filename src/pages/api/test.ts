import {NextApiRequest, NextApiResponse} from "next";
import {createRouter} from "next-connect";
import {prisma} from "../../service/prisma-client";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
  const users = await prisma.user.findFirst({
    where: {
      email: {
        contains: `mail.ru`,
        mode: `insensitive`,
      },
    },
  });

  res.json({users});
});

export default router.handler();
