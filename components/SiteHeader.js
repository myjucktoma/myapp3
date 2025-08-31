"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { label: "형사", href: "/cri", img: "/image/cri1.png" },
  { label: "민사", href: "/civil", img: "/image/civil1.png" },
  { label: "IT", href: "/it", img: "/image/it1.png" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // 모바일 메뉴 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
<header className="w-full bg-transparent">
  <div className="relative w-full flex items-center px-4 py-4">
    {/* 좌측: 로고 */}
    <div className="flex-shrink-0">
      <Link href="/" aria-label="Home" className="block">
        <Image
          src="/image/j02.png"
          alt="로고"
          width={140}
          height={36}
          priority
          className="transition-transform duration-300 hover:scale-110 
                     w-[100px] sm:w-[120px] md:w-[140px]"
        />
      </Link>
    </div>

    {/* 메뉴 3개: 오른쪽으로 배치 */}
    <nav
      className="hidden lg:flex items-center gap-4 xl:gap-6 z-10 ml-auto pr-6"
      aria-label="Primary"
    >
      {NAV.map((item) => (
        <Link key={item.label} href={item.href} className="relative inline-block">
          <Image
            src={item.img}
            alt={item.label}
            width={120}
            height={40}
            className="
              hover:opacity-80 transition-opacity transition-transform duration-300 hover:scale-110
              w-[90px] md:w-[100px] lg:w-[100px] xl:w-[120px]
              h-auto
            "
          />
        </Link>
      ))}
    </nav>

    {/* 중앙 타이틀 (항상 정중앙) */}
    <span
      className="absolute left-1/2 -translate-x-1/2 text-black 
                 text-2xl sm:text-xl md:text-3xl lg:text-5xl 
                 font-['batang'] font-bold text-texture whitespace-nowrap"
    >
      법률사무소 적벽
    </span>
  </div>


      {/* 모바일 햄버거 버튼 */}
      <button
  type="button"
  aria-label="Open menu"
  aria-expanded={open}
  onClick={() => setOpen((v) => !v)}
  className="fixed z-50 top-[14px] right-[clamp(16px,3vw,20px)] 
             lg:hidden inline-flex items-center justify-center 
             w-10 h-10 rounded border border-black/20 bg-white"
>
        <span className="sr-only">Menu</span>
        <div className="relative w-5 h-5">
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-5 bg-black transition ${open ? "rotate-45" : ""
              }`}
          />
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-5 bg-black transition ${open ? "-rotate-45" : "translate-y-2"
              }`}
          />
        </div>
      </button>

     {/* 모바일 메뉴 드로어 */}
{open && (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-40 lg:hidden">

    <div
      className="absolute inset-0 bg-black/70"
      onClick={() => setOpen(false)}
    />
    <div className="absolute right-0 top-0 h-full w-[78%] max-w-[340px] 
                    bg-white border-l border-black/10 p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        {/* 로고 클릭 → 메인으로 이동 */}
        <Link href="/" onClick={() => setOpen(false)}>
          <Image src="/image/j02.png" alt="로고" width={120} height={30} />
        </Link>
      </div>
      <div className="mt-4 flex flex-col">
        {NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className="py-3 border-b border-black text-sm tracking-[0.18em] hover:text-amber-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
)}

    </header>
  );
}
