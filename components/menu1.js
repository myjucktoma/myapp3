"use client";

import Link from "next/link";
import { useState } from "react";

export default function Menu1({
  title,
  subtitle,
  menu1Title,
  menu1Desc,
  menu1Href,
  menu2Title,
  menu2Desc,
  menu2Href,
}) {
  const [open, setOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-white text-black pt-16 sm:pt-20 md:pt-24 lg:pt-0">
      {/* ---------------- 본문 ---------------- */}
      <section className="mt-0 md:mt-20 px-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-3">

        {/* 좌측 메뉴 */}
        <aside className="space-y-4">

          {/* 첫 번째 메뉴 */}
          <Link
            href={menu1Href}
            className="block w-70 p-6 rounded-lg border-2 border-gray-400 
                       bg-gradient-to-r from-gray-500/20 via-gray-500/20 to-black-500/20 
                       hover:from-amber-500/30 hover:via-red-500/30 hover:to-pink-500/30 
                       text-black shadow-lg shadow-amber-500/20 transition"
          >
            <h2 className="text-2xl font-bold">{menu1Title}</h2>
            <p className="text-xl text-black">{menu1Desc}</p>
          </Link>

          {/* 두 번째 메뉴 */}
          <Link
            href={menu2Href}
            className="group block w-70 p-6 rounded-lg border border-gray-400 
                       bg-white/40 text-black transition 
                       hover:animate-pulse hover:bg-gradient-to-r 
                       hover:from-amber-200 hover:via-yellow-100 hover:to-amber-200"
          >
            <h2 className="text-2xl font-bold">{menu2Title}</h2>
            <p className="text-xl text-black">{menu2Desc}</p>
          </Link>
        </aside>

        {/* 우측 텍스트 영역 */}
        <div
          className="relative md:col-span-2 space-y-6 p-6 
                      rounded-lg border-2 border-transparent 
                      bg-white text-black
                      shadow-[0_0_20px_rgba(200,200,200,0.6)]
                      hover:shadow-[0_0_35px_rgba(220,220,220,0.9)]
                      transition
                      before:absolute before:inset-0 before:rounded-lg 
                      before:p-[3px] before:bg-gradient-to-br 
                      before:from-gray-400 before:via-gray-200 before:to-slate-500 
                      before:-z-10"
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-black leading-relaxed whitespace-pre-line">
  {subtitle}
</p>
 {/* 🔹 title에 '형사'가 포함된 경우 이미지 섹션 표시 */}
{title.includes("형사") && (
  <div className="mx-auto max-w-[1200px] mt-12">
    <h2 className="text-2xl font-['WarhavenBold'] text-black mb-6">
      유관우 변호사 판결문 중 일부
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 md:px-0">
      {Array.from({ length: 24 }).map((_, index) => (
        <img
          key={index}
          src={`/image/s${index + 1}.jpg`} // 이미지 경로
          alt={`이미지 ${index + 1}`}
          className="w-full h-auto object-contain rounded-lg shadow-lg"
        />
      ))}
    </div>
  </div>
)}
        </div>
      </section>
    </main>
  );
}
