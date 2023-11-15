import {NextApiRequest, NextApiResponse} from "next";
import {log} from "../../../utils/utils";
import {ApiError} from "../error";
import {TApiErrorData} from "../types";

export const onError = (err: unknown, req: NextApiRequest, res: NextApiResponse) => {
  if (err instanceof ApiError) {
    const errorResult: TApiErrorData = {
      statusCode: err.statusCode,
      message: err.message,
      ...(err.data ? {data: err.data} : {}),
    };
    res.status(errorResult.statusCode).json({error: errorResult});
    return;
  }

  log(`Api Unhandled Error:`, err);
  res.status(500).json({error: {
    name: `Common Error`,
    statusCode: 500,
    message: `Internal Server Error`,
  }});
};
