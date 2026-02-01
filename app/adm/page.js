import Menu1 from "@/components/menu1";



export default function adm() {


  return (
    <Menu1
      title="행정 사건"
      subtitle={subtitle_text}
      menu1Title="행정 연구실"
      menu1Desc="행정 판례와 사례들"
      menu1Href="/adm/menu2"
      menu2Title="행정 연구실"
      menu2Desc="행정 판례와 사례들"
      menu2Href="/adm/menu2"
    />
  );
}

// 🔹 함수 밖에 선언
const subtitle_text = [
  ` `
];