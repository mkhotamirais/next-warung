import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import BlogSection from "./(sections)/BlogSection";

export default function Home() {
  return (
    <>
      <section className="py-4">
        <div className="container">
          <div>
            <h1 className="h1">Belanja dan Fotokopi dalam Satu Tempat</h1>
            <p>
              WarungOta menyediakan sembako, ATK, serta layanan fotokopi, cetak dokumen dan foto, laminating, transfer,
              tarik tunai, isi saldo, pulsa, dan token listrik.
            </p>
            <div>
              <Button as={Link} href="/product">
                Lihat Produk
              </Button>
            </div>
          </div>
        </div>
      </section>
      <BlogSection />
    </>
  );
}
