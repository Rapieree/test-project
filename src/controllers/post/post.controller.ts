import {NextApiRequest, NextApiResponse} from "next";
import {ApiError} from "../../service/api/error";
import {PostDto} from "./post.dto";
import {postService} from "./post.service";
import {postValidation} from "./post.validation";

const postController = {
  create: async (req: NextApiRequest, res: NextApiResponse) => {
    const {value, error} = postValidation.bodyCreate(req.body);

    if (error) {
      throw ApiError.badRequest(error.message);
    }

    const {content, title} = value;
    const post = await postService.create(title, content);

    return res.status(200).json(new PostDto(post));
  }
};

export {
  postController,
};


