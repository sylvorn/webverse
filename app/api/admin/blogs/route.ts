import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  if (session?.user.role === "Admin") {
    const allBlogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        brief: true,
        content: true,
        clap: true,
        user: {
          select: {
            fname: true,
            lname: true,
          },
        },
        published: true,
        createdAt: true,
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });

    const formattedBlogs = allBlogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      brief: blog.brief,
      author: `${blog.user.fname} ${blog.user.lname}`,
      clap: blog.clap,
      comments: blog._count.comments,
      published: blog.published,
      createdAt: blog.createdAt,
    }));

    return NextResponse.json(formattedBlogs);
  } else {
    return NextResponse.json({ error: "Unauthorized" });
  }
}
