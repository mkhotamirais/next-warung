import { content as c } from "@/lib/content";
import { Metadata } from "next";
import Heroes from "@/components/Heroes";
import React from "react";

const { title, description } = c.product;

export const metadata: Metadata = {
  title,
  description,
};

export default function Product() {
  return (
    <>
      <Heroes title={title} description={description} />
    </>
  );
}
