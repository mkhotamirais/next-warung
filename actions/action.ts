"use server";

import { prisma } from "@/lib/prisma";

export const search = async (prevState: unknown, formData: FormData) => {
  const keyword = formData.get("keyword") as string;

  try {
    const blogs = await prisma.blog.findMany({
      where: { title: { contains: keyword, mode: "insensitive" } },
      include: { BlogCategory: { select: { name: true } }, User: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
    });
    return blogs;
  } catch (error) {
    console.log(error);
  }
};
