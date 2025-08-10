"use server";

import { prisma } from "@/lib/prisma";

export const getBlogCategories = async () => {
  try {
    const categories = await prisma.blogCategory.findMany({ orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }] });
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export const getBlogs = async () => {
  try {
    const blogs = await prisma.blog.findMany({
      include: { category: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
    });
    return blogs;
  } catch (error) {
    console.log(error);
  }
};

export const getBlogById = async (id: string) => {
  try {
    const blog = await prisma.blog.findUnique({ where: { id }, include: { category: { select: { name: true } } } });
    return blog;
  } catch (error) {
    console.log(error);
  }
};
