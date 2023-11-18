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

  async saveTokens(userId: string, refreshToken: string) {
    const [sessionFindingError, existedSession] = await handlePromise(prisma.user.findFirst({
      where: {id: userId},
    }).session());

    if (sessionFindingError) {
      log(`Session Service saveTokens:`, sessionFindingError);
      throw ApiError.internalServerError();
    }

    if (existedSession) {
      const [sessionUpdatingError, session] = await handlePromise(prisma.session.update({
        where: {userId},
        data: {
          refreshToken,
        },
      }));

      if (sessionUpdatingError) {
        log(`Session Service saveTokens:`, sessionFindingError);
        throw ApiError.internalServerError();
      }

      return session;
    }

    const [sessionCreatingError, session] = await handlePromise(prisma.session.create({
      data: {
        userId,
        refreshToken,
      }
    }));

    if (sessionCreatingError) {
      log(`Session Service saveTokens:`, sessionFindingError);
      throw ApiError.internalServerError();
    }

    return session;
  }
};

export {
  sessionService,
};
