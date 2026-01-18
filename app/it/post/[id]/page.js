import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Post1 from "@/components/post1";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "app/it/post");
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

  return files.map((file) => ({
    id: path.basename(file, ".md"), // "1", "2", ...
  }));
}

export default async function Page({ params }) {
  const { id } = await params;

  const postPath = path.join(process.cwd(), "app/it/post", `${id}.md`);
  const fileContents = fs.readFileSync(postPath, "utf-8");

  const { data, content } = matter(fileContents);

  const normalized = content.replace(
  /^(\d+)\.\s+/gm,
  "$1\\. "
);

const processedContent = await remark()
  .use(html)
  .process(normalized);


  const contentHtml = processedContent.toString();

  return (
    <Post1
      title={data.title}
      date={data.date}
      content={contentHtml}
      backHref="/it/menu2"
    />
  );
}
