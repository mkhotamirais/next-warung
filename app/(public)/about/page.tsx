import { content as c } from "@/lib/content";
import Heroes from "@/components/Heroes";
import { Metadata } from "next";

const { title, description } = c.about;

export const metadata: Metadata = {
  title,
  description,
};

export default function About() {
  return (
    <>
      <Heroes title={title} description={description} />
    </>
  );
}
