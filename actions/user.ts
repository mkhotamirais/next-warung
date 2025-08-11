"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const changeUserRoleByUserId = async (userId: string, newRole: string) => {
  const session = await auth();
  if (!session || !session.user || session.user.role !== "admin") redirect("/dashboard");

  try {
    await prisma.user.update({ where: { id: userId }, data: { role: newRole } });
  } catch (error) {
    console.log(error);
  }
};
