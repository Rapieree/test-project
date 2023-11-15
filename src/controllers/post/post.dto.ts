import {Prisma} from "@prisma/client";

type TPostJSON = {
  id: number,
  title: string,
  content: string,
  updatedAt: string,
  createdAt: string,
}

type TPostWithHtml = TPostJSON & {
  contentHtml: string,
}

class PostDto {
  id: number;
  title: string;
  content: string;
  updatedAt: Date;
  createdAt: Date;

  constructor(data: Prisma.PostGetPayload<any>) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  static toJSON(data: Prisma.PostGetPayload<any>): TPostJSON {
    return {
      id: data.id,
      title: data.title,
      content: data.content,
      updatedAt: data.updatedAt.toJSON(),
      createdAt: data.updatedAt.toJSON(),
    };
  }
}

export type {
  TPostJSON,
  TPostWithHtml,
};

export {
  PostDto,
};
