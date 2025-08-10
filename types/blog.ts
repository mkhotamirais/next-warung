import { Prisma } from "@prisma/client";

export type BlogProps = Prisma.BlogGetPayload<{
  include: { category: { select: { name: true } } };
}>;
