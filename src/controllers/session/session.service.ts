import {ApiError} from "../../service/api/error";
import {prisma} from "../../service/prisma-client";
import {generateToken} from "../../service/token";
import {handlePromise, log} from "../../utils/utils";

type TTokens = {
  accessToken: string,
  refreshToken: string,
}

const ACCESS_TOKEN_AGE_IN_SEC = 30 * 60;
const REFRESH_TOKEN_AGE_IN_SEC = 30 * 24 * 60 * 60;

const sessionService = {
  generateTokens(data: string | object | Buffer): TTokens {
    const accessToken = generateToken(data, ACCESS_TOKEN_AGE_IN_SEC);
    const refreshToken = generateToken(data, REFRESH_TOKEN_AGE_IN_SEC);

    return {accessToken, refreshToken};
  },

  async saveToken(userId: string, refreshToken: string) {
    const [sessionError, session] = await handlePromise(prisma.session.upsert({
      where: {userId},
      update: {
        refreshToken,
      },
      create: {
        userId,
        refreshToken,
      }
    }));

    if (sessionError) {
      log(`Session Service saveTokens:`, sessionError);
      throw ApiError.internalServerError();
    }

    return session;
  }
};

export {
  sessionService,
};
