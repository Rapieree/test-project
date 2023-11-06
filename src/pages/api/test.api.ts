import {NextApiRequest, NextApiResponse} from "next";
import {createRouter} from "next-connect";
import {prisma} from "../../service/prisma-client";
import {ApiError} from "../../service/api/error";
import {TApiErrorData} from "../../service/api/types";

const router = createRouter<NextApiRequest, NextApiResponse>();

const onError = (err: unknown, req: NextApiRequest, res: NextApiResponse) => {
  if (err instanceof ApiError) {
    const errorResult: TApiErrorData = {
      name: err.name,
      statusCode: err.statusCode,
      message: err.message,
    };
    res.status(400).json({error: errorResult});
    return;
  }

  throw err;
};

router.get(async (req, res) => {
  const email = req.query.email as string;

  if (!email) {
    throw new ApiError({
      name: `Validation Error`,
      message: `Invalid email param`,
      statusCode: 400,
    });
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
    }
  });

  if (!user) {
    throw new ApiError({
      name: `Api Error`,
      message: `Missed user with email`,
      statusCode: 400,
    });
  }

  res.json({user});
});

export default router.handler({onError});
