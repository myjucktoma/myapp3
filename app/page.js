// app/page.js  (Next.js App Router + TailwindCSS)
// Elden Ring 사이트 상단 메뉴 레이아웃/동작을 모사한 예시입니다.
// - 뷰포트 기준 고정 배치(zoom에도 위치 불변)
// - 데스크톱: 가로 메뉴 / 모바일: 햄버거 토글
// - 메뉴 항목은 앵커로 섹션 이동(placeholder)

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "형사", href: "/cri", img: "/image/cri1.jpg" },
  { label: "민사", href: "/civil", img: "/image/civil1.jpg" },
  { label: "IT", href: "/it", img: "/image/it1.jpg" },

];

export default function Page() {
  const [open, setOpen] = useState(false);

  // 모바일 메뉴 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <main className="w-full min-h-screen bg-black text-white">
      {/* 고정 헤더 배경 레이어 (줌에도 흔들리지 않게 뷰포트 기준) */}
      <header className="fixed top-0 w-full z-50 bg-transparent" />

      {/* 로고: 뷰포트 기준 좌측 고정 */}
      <div className="flex items-center gap-8">
        <Link href="/" aria-label="Home" className="block">
          <Image src="/image/j02.png" alt="" width={140} height={36} priority />
        </Link>


        {/* 데스크톱 메뉴: 뷰포트 기준 우측 고정 */}
        <nav className="hidden md:flex items-center gap-6 z-10 relative" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} className="relative inline-block">
              <Image
                src={item.img}
                alt={item.label}
                width={120} // 버튼 크기 조절
                height={40}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          ))}
        </nav>
        {/* 중앙 타이틀 */}
      <span className="absolute left-1/2 top-16 transform -translate-x-1/2 text-white text-2xl font-['batang'] font-bold text-texture whitespace-nowrap md:top-16 md:text-4xl">
  법률사무소 적벽
</span>


      </div>
      {/* 모바일 햄버거 버튼: 뷰포트 기준 우측 고정 */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed z-50 top-[14px] right-[clamp(16px,3vw,20px)] md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-white/20 bg-black/40"
      >
        <span className="sr-only">Menu</span>
        <div className="relative w-5 h-5">
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-5 bg-white transition ${open ? "rotate-45" : ""
              }`}
          />
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-5 bg-white transition ${open ? "-rotate-45" : "translate-y-2"
              }`}
          />
        </div>
      </button>

      {/* 모바일 메뉴 드로어 */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 md:hidden"
        >
          <div
            className="absolute inset-0 bg-black"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[78%] max-w-[340px] bg-[#0b0b0b] border-l border-white/10 p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <Image src="/image/j02.png" alt="" width={120} height={30} />
            </div>
            <div className="mt-4 flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b border-white/10 text-sm tracking-[0.18em] hover:text-amber-300"
                >
                  {item.label}
                </Link>
              ))}

            </div>
          </div>
        </div>
      )}

      {/* ===== HERO (full-bleed) ===== */}
     <section className="relative w-full h-auto md:h-screen isolate">
  {/* 데스크톱 이미지 */}
  <Image
    src="/image/main7.jpg"
    alt="메인 이미지"
    fill
    className="absolute inset-0 object-contain hidden md:block"
  />

  {/* 모바일 이미지 */}
  <Image
    src="/image/main7-m.jpg"
    alt="모바일 메인 이미지"
    width={400}
    height={300}
    className="mx-auto object-contain block md:hidden"
  />
</section>

      {/* 이하 더미 섹션들 (앵커 이동 확인용) */}
      <section id="overview"   className="py-12 md:py-24 bg-black">
        <div className="mx-auto max-w-[1550px] px-6 flex flex-col md:flex-row items-start gap-8">
          {/* 왼쪽 텍스트 */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-['WarhavenBold'] tracking-wide text-white">오시는 길</h2>
            <p className="text-2xl mt-4 text-white font-['gulim']"><br /><br />
              [주소] 서울 서초구 서초대로 396 강남빌딩 705호 법률사무소 적벽<br />(강남역 8번 출구)<br /><br />
              [전화] 010-3423-1909, 02-565-1909<br />(변호사 직통)<br /><br />
              [영업시간] 월~금 09시~18시<br />(영업시간 외에도 전화, 문자 가능)<br /><br />
              [상담비용] 법률상담은 30분당 50,000원입니다<br />(사건 수임 시에는 면제·반환해드립니다).<br /><br />
              [주차] 건물 지하주차장 B2, B3, B4, B5에 주차 가능합니다<br />(유료. 주차할인권 제공).
            </p>
          </div>
          {/* 오른쪽 이미지 */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image/map2.jpg" // 이미지 경로
              alt="법률사무소 적벽 위치"
              className="w-[600px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section id="story" className="py-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1550px] px-6 flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-['WarhavenBold'] tracking-wide">대표 변호사 유관우 소개</h2>
            <p className="text-2xl mt-4 text-white font-['gulim']"><br />
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
              - IT 기업 다수 법률고문<br />
            </p>
          </div>
          {/* 오른쪽 이미지 */}
          <div className="md:w-1/2 flex flex-col md:flex-row justify-center gap-6">
            <img
              src="/image/expert_cri.jpg" // 이미지 경로
              alt="형사법"
              className="w-[450px] h-auto rounded-lg shadow-lg"
            />
            <img
              src="/image/expert_it.jpg" // 이미지 경로
              alt="IT"
              className="w-[450px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

      </section>
      <section className="py-12 bg-black">
  <div className="mx-auto max-w-[1550px] px-6">
    <h2 className="text-3xl font-['WarhavenBold'] text-white mb-8"> </h2>

    {/* 그리드: 1줄에 3개씩 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {Array.from({ length: 12 }).map((_, index) => (
        <img
          key={index}
          src={`/image/re${index + 1}.jpg`} // 이미지 경로
          alt={`이미지 ${index + 1}`}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      ))}
    </div>
  </div>
</section>

     

      <footer className="border-t border-white/10 bg-black">
        <div className="font-['Gulim'] mx-auto max-w-7xl px-6 py-10 text-sm text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <p>법률사무소 적벽 대표변호사 유관우<br />
            Tel. 02-565-1909 ㅣ Fax. 0504-220-1909 ㅣ myjucktoma@naver.com<br />
            서울 서초구 서초대로 396 강남빌딩 705호 ㅣ Biz License 577-27-01151</p>
          
        </div>
      </footer>
    </main>
  );
}
