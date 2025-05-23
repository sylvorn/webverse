import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: params.id,
    },
    select: {
      id: true,
      title: true,
      brief: true,
      clap: true,
      createdAt: true,
      content: true,
      comments: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          likes: true,
        },
      },
      user: {
        select: {
          fname: true,
          lname: true,
        },
      },
    },
  });

  const formamtedBlog = {
    title: blog?.title,
    brief: blog?.brief,
    clap: blog?.clap,
    content: await JSON.parse(blog?.content as string),
    createdAt: blog?.createdAt,
    comments: blog?.comments,
    author: `${blog?.user.fname} ${blog?.user.lname}`,
  };

  return NextResponse.json(formamtedBlog);
}
