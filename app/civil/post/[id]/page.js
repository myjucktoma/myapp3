import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Post1 from "@/components/post1";

const postsDir = path.join(process.cwd(), "app/civil/post");

function getPost(id) {
  const postPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(postPath, "utf-8");

  const { data, content } = matter(fileContents);

  return { data, content };
}

export async function generateStaticParams() {
  
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

  return files.map((file) => ({
    id: path.basename(file, ".md"),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const { data, content } = getPost(id);

  const plainText = content
    .replace(/[#>*_`~\[\]\(\)!]/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const description =
    data.description || plainText.slice(0, 150);

  const url = `https://xn--3l3b19r.com/civil/post/${id}`;

  return {
    title: `${data.title} | 법률사무소 적벽`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.title,
      description,
      url,
      type: "article",
      publishedTime: data.date,
    },
  };
}

export default async function Page({ params }) {
  const { id } = await params;

  const { data, content } = getPost(id);
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
      backHref="/civil/menu2"
    />
  );
}
