"use client";

import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container max-w-3xl flex flex-col sm:items-center justify-center text-left sm:text-center space-y-4">
        <h1 className="h1">Belanja dan Fotokopi dalam Satu Tempat</h1>
        <p>
          WarungOta menyediakan sembako, ATK, serta layanan fotokopi, cetak dokumen dan foto, laminating, transfer,
          tarik tunai, isi saldo, pulsa, dan token listrik.
        </p>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button as={Link} href="/shop" className="text-base rounded-lg w-36">
            Semua Produk
          </Button>
          <Button as={Link} href="/contact" variant="outline" className="text-base rounded-lg w-36">
            Hubungi Kami
          </Button>
        </div>

        <form action="" className="relative w-full sm:w-80">
          <input
            type="search"
            placeholder="Cari Produk.."
            className="bg-white w-full py-3 px-4 pr-10 rounded-full border border-gray-400"
          />
          <button
            type="submit"
            className="absolute border-black right-0 top-0 w-12 h-full flex justify-center items-center rounded-full"
            aria-label="Search Produt"
          >
            <FaMagnifyingGlass />
          </button>
        </form>
      </div>
    </section>
  );
}
