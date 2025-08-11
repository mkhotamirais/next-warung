import { Prisma } from "@prisma/client";

export type BlogProps = Prisma.BlogGetPayload<{
  include: { BlogCategory: { select: { name: true } } };
}>;
