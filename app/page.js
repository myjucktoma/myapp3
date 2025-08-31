// app/page.js  (Next.js App Router + TailwindCSS)
// Elden Ring 사이트 상단 메뉴 레이아웃/동작을 모사한 예시입니다.
// - 뷰포트 기준 고정 배치(zoom에도 위치 불변)
// - 데스크톱: 가로 메뉴 / 모바일: 햄버거 토글
// - 메뉴 항목은 앵커로 섹션 이동(placeholder)

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import useIsMobile from "@/components/IsMobileCheck";


export default function Page() {
  const [open, setOpen] = useState(false);
   const isMobile = useIsMobile();


  // 모바일 메뉴 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
<main className="w-full min-h-screen text-black sm:pt-20 md:pt-24 lg:pt-0
 
">

  {/* 모바일용 배경 */}
  <div
    className="block sm:hidden fixed inset-0 bg-top bg-cover bg-no-repeat -z-10"
    style={{ backgroundImage: "url('/image/judge2_m.jpg')" }}
  ></div>


  {/* 데스크탑용 배경 */}
  <div
    className="hidden sm:block fixed inset-0 bg-center bg-cover bg-no-repeat bg-fixed -z-10"
    style={{ backgroundImage: "url('/image/judge2.jpg')"
      
     }}
  ></div>
  
  
      {/* ===== HERO (full-bleed) ===== */}
    <section className="relative w-full min-h-[400px] md:h-screen isolate">
  {isMobile ? (
    <div className="w-full flex justify-center">
      <Image
        src="/image/main7-m.jpg"
        alt="모바일 메인 이미지"
        width={800} // 원하는 기준 width
        height={600}
        className="rounded-lg shadow-lg max-w-[90%] h-auto mx-auto object-contain"
        priority
      />
    </div>
  ) : (
    <Image
      src="/image/main10.png"
      alt="데스크톱 메인 이미지"
      fill
      className="absolute inset-0 object-top"
    />
  )}
</section>


      {/* 이하 더미 섹션들 (앵커 이동 확인용) */}
    <section id="overview" className="py-12 lg:py-24">
  <div className="mx-auto max-w-[1550px] pt-0 px-6 flex flex-col lg:flex-row items-start gap-8">
    {/* 왼쪽 텍스트 */}
    <div className="lg:w-1/2">
      <h2 className="text-4xl mt-10 font-['WarhavenBold'] tracking-wide text-white">
        오시는 길
      </h2>

      <div className="mt-6 space-y-6 text-2xl text-white font-['Gulim'] font-bold">
        <p>
          <strong>[주소]</strong> 서울 서초구 서초대로 396 강남빌딩 705호 법률사무소 적벽
          <br />(강남역 8번 출구 도보 5분)
        </p>
        <p>
          <strong>[전화]</strong> <span>010-3423-1909</span>, <span>02-565-1909</span> (변호사 직통)
        </p>
        <p>
          <strong>[영업시간]</strong> 월~금 09시~18시
          <br />(영업시간 외에도 전화, 문자 가능)
        </p>
        <p>
          <strong>[상담비용]</strong> 법률상담은 30분당 50,000원입니다
          <br />(사건 수임 시에는 면제·반환해드립니다)
        </p>
        <p>
          <strong>[주차]</strong> 건물 지하주차장 B2, B3, B4, B5 이용 가능
          <br />(유료, 주차할인권 제공)
        </p>
      </div>
    </div>

    {/* 오른쪽 이미지 (모바일/태블릿 세로 → 아래 배치) */}
    <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
      <img
        src="/image/map3.jpg"
        alt="법률사무소 적벽 위치"
        className="w-full max-w-[600px] h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>


<section id="story" className="py-24">
  <div className="mx-auto max-w-[1550px] px-6 flex flex-col lg:flex-row items-start gap-8">
    {/* 왼쪽 텍스트 */}
    <div className="lg:w-1/2">
      <h2 className="text-4xl font-['WarhavenBold'] tracking-wide text-white">
        대표 변호사 유관우 소개
      </h2>
      <p className="text-2xl mt-4 text-white font-['Gulim'] font-bold">
        <br />
        - 고려대학교 법학과 졸업<br />
        - 충남대학교 법학전문대학원 졸업<br />
        - 2014년 변호사 자격 취득<br />
        - KAIST 지식서비스공학대학원 중퇴<br />
        - 전 육군 국선변호장교<br />
        - 전 육군 군검사<br />
        - 전 원주시 생활법률상담관<br />
        - 전 육군군수사령부 민사소송담당<br />
        - 전 세종시 위촉 법률상담관<br />
        - 전 국선전담변호사<br />
        - 전 대법원 국선변호인<br />
        - 대전고등검찰청검사장상 수상<br />
        - 2작전사령관, 31사단장 표창<br />
        - 청주지방법원 우수국선변호인 선정<br />
        - 대한변호사협회 형사법, IT 등록<br />
        - 프로그래밍 대회 수상<br />
        - 애플리케이션 개발자<br />
        - IT 기업 다수 법률자문<br />
      </p>
    </div>

    {/* 오른쪽 프레임 이미지 */}
    <div
      className="relative w-[450px] h-auto flex items-center justify-center mt-6 lg:mt-0"
      style={{
        backgroundImage: "url('/image/frame5.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    ></div>

    
{/* 추가 이미지들 */}
<div className="lg:w-1/2 flex flex-col lg:flex-row gap-6 mt-6 lg:mt-0">
  <img
    src="/image/expert_cri2.jpg"
    alt="형사법"
    className="w-[450px] h-auto rounded-lg shadow-lg mx-auto"
  />

  <img
    src="/image/expert_it2.jpg"
    alt="IT"
    className="w-[450px] h-auto rounded-lg shadow-lg mx-auto"
  />
</div>


  </div>
</section>

<section className="py-12">
  <div className="mx-auto max-w-[1550px] px-6">
    <h2 className="text-3xl font-['WarhavenBold'] text-white mb-8"> </h2>

    {/* 그리드: 모바일 1열 / 태블릿 세로 2열 / PC 3열 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="relative w-full h-96">
          {/* 실제 이미지 */}
          <img
            src={`/image/re${index + 1}.jpg`}
            alt={`이미지 ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />

          {/* 액자 프레임 PNG */}
          <img
            src="/image/frame6.png"   // 액자 PNG 경로
            alt="액자 프레임"
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
        </div>
      ))}
    </div>
  </div>
</section>


    </main>
  );
}
