import {Prisma} from "@prisma/client";

class PostDto {
  id: string;
  title: string;
  content: string;
  updatedAt: Date;
  createdAt: Date;

  constructor(data: Prisma.PostGetPayload<any>) {
    this.id = data.postId;
    this.title = data.title;
    this.content = data.content;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

export {
  PostDto,
};
