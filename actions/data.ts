"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const adminOnly = async () => {
  const session = await auth();
  if (!session || !session.user || session.user.role !== "admin") redirect("/dashboard");
};

export const adminOrEditor = async () => {
  const session = await auth();
  if (!session || !session.user || (session.user.role !== "admin" && session.user.role !== "editor"))
    redirect("/dashboard");
};

export const getUsers = async () => {
  await adminOnly();
  try {
    const users = await prisma.user.findMany({
      select: { role: true, id: true, name: true, email: true, phone: true },
    });
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async () => {
  const session = await auth();
  const id = session?.user?.id;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: { role: true, id: true, name: true, email: true, phone: true },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id: string) => {
  await adminOnly();
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    const usersWithNoPassword = { ...user, password: undefined };
    return usersWithNoPassword;
  } catch (error) {
    console.log(error);
  }
};

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
      include: { BlogCategory: { select: { name: true } }, User: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
    });
    return blogs;
  } catch (error) {
    console.log(error);
  }
};

export const getBlogById = async (id: string) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: { BlogCategory: { select: { name: true } }, User: { select: { name: true } } },
    });
    return blog;
  } catch (error) {
    console.log(error);
  }
};

export const getBlogByUserId = async () => {
  const session = await auth();
  const id = session?.user?.id;
  try {
    const blog = await prisma.blog.findMany({
      include: { BlogCategory: { select: { name: true } }, User: { select: { name: true } } },
      where: { userId: id },
      orderBy: { createdAt: "desc" },
    });
    return blog;
  } catch (error) {
    console.log(error);
  }
};
