import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Menu2 from "@/components/menu2";

function getPosts() {
  const postsDir = path.join(process.cwd(), "app/adm/post");

  // post/*.md 파일 목록 가져오기
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

  // 파일명 숫자 기준 내림차순 정렬
  const sortedFiles = files.sort((a, b) => {
    const numA = parseInt(path.basename(a, ".md"), 10);
    const numB = parseInt(path.basename(b, ".md"), 10);
    return numB - numA; // 숫자가 큰 게 위로
  });

  return sortedFiles.map((file) => {
    const filePath = path.join(postsDir, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    // gray-matter로 Front-Matter + 본문 분리
    const { data, content } = matter(fileContents);

    // <u> 태그 제거
const cleanContent = content.replace(/<\/?u>/g, "");

    // excerpt (앞 86글자, 특수기호 포함 그대로)
const excerpt = cleanContent.slice(0, 86) + "...";
    // id는 파일명에서 확장자 제거 (예: "1", "2")
    const id = path.basename(file, ".md");

    return {
      id,
      title: data.title,
      date: data.date,
      excerpt,
      href: `/adm/post/${id}`,
    };
  });
}


export default function admMenu2Page() {
  const POSTS = getPosts();

  return (
    <Menu2
      menu1Title="행정 연구실"
      menu1Desc="행정 판례와 사례들"
      menu1Href="/adm/menu2"
      menu2Title="행정 연구실"
      menu2Desc="행정 판례와 사례들"
      menu2Href="/adm/menu2"
      posts={POSTS}
    />
  );
}
