import {ApiError} from "../../service/api/error";
import {prisma} from "../../service/prisma-client";
import {handlePromise, log} from "../../utils/utils";

const postService = {
  async create(title: string, content: string) {
    const [error, result] = await handlePromise(prisma.post.create({
      data: {
        title,
        content,
      }
    }));

    if (error) {
      log(`Post Service create error`, error);
      throw ApiError.internalServerError();
    }

    return result;
  },

  async get(id: number) {
    const [error, result] = await handlePromise(prisma.post.findUniqueOrThrow({
      where: {
        id,
      }
    }));

    if (error) {
      log(`Post Service get error`, error);
      throw ApiError.badRequest(`Некорректный идентификатор поста`);
    }

    return result;
  },

  async delete(id: number) {
    const [error] = await handlePromise(prisma.post.delete({
      where: {
        id,
      }
    }));

    if (error) {
      log(`Post Service delete error`, error);
      throw ApiError.badRequest(`Некорректный идентификатор поста`);
    }

    return true;
  },

  async find() {
    const [error, posts] = await handlePromise(prisma.post.findMany({

    }));

    if (error) {
      log(`Post Service find error`, error);
      throw ApiError.internalServerError();
    }

    return posts;
  }
};

export {
  postService,
};
