import { prisma } from "@/lib/prisma";

async function main() {
  // Cek apakah default category sudah ada
  const defaultCategory = await prisma.blogCategory.findFirst({
    where: { isDefault: true },
  });

  if (!defaultCategory) {
    await prisma.blogCategory.create({
      data: {
        name: "Uncategorized",
        slug: "uncategorized",
        isDefault: true,
      },
    });
    console.log('✅ Default category "Uncategorized" created');
  } else {
    console.log("ℹ️ Default category already exists");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
