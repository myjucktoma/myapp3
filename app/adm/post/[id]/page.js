import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Post1 from "@/components/post1";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "app/adm/post");
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

  return files.map((file) => ({
    id: path.basename(file, ".md"),
  }));
}

export default async function Page({ params }) {
  const { id } = params;

  const postPath = path.join(process.cwd(), "app/adm/post", `${id}.md`);
  const fileContents = fs.readFileSync(postPath, "utf-8");

  const { data, content } = matter(fileContents);

  // 2. 줄바꿈 유지 (엔터 1번 → <br>)
  let normalized = content.replace(
  /(?<!\n)\n(?!\n)/g,
  "<br>\n"
);

// 3. 스페이스바 공백 유지
// 연속된 스페이스를 &nbsp;로 변환
normalized = normalized.replace(/ {2,}/g, (spaces) =>
  "&nbsp;".repeat(spaces.length)
);

normalized = normalized.replace(
  /^(\d+)\.\s/gm,
  "$1\\. "
);


normalized = normalized
  .replace(/<u>/g, "<strong><u>")
  .replace(/<\/u>/g, "</u></strong>");

// 4. HTML 허용
const processedContent = await remark()
  .use(html, { sanitize: false }) // 필수
  .process(normalized);

  const contentHtml = processedContent
  .toString()
  .replace(/\\\./g, ".");


  return (
    <Post1
      title={data.title}
      date={data.date}
      content={contentHtml}
      backHref="/adm/menu2"
    />
  );
}
