import {ApiError} from "../../service/api/error";
import {prisma} from "../../service/prisma-client";
import {handlePromise} from "../../utils/utils";

const postService = {
  async create(title: string, content: string) {
    const [error, result] = await handlePromise(prisma.post.create({
      data: {
        title,
        content,
        postId: String(Date.now()),
      }
    }));

    if (error) {
      throw ApiError.internalServerError();
    }

    return result;
  }
};

export {
  postService,
};
