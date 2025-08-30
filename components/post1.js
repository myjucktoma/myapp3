"use client";

import Link from "next/link";

export default function Post1({ title, date, content, backHref }) {
  return (
    <main className="w-full min-h-screen bg-white text-black pt-16 sm:pt-20 md:pt-24 lg:pt-0">
      {/* 상단: 목록으로 가기 */}
      <div className="mx-auto max-w-[1200px] px-4 md:px-0 mb-6">
        <Link
          href={backHref}
          className="inline-block px-5 py-2 rounded-md border-2 border-gray-400 
                     bg-gradient-to-r from-gray-100 via-white to-gray-100 
                     text-black font-semibold shadow 
                     hover:from-amber-200 hover:to-yellow-200 transition"
        >
          ← 목록으로 가기
        </Link>
      </div>

      {/* 본문 */}
      <div
        className="relative mx-auto max-w-[1200px] flex flex-col items-start justify-start min-h-screen px-3 md:px-6
                   p-8 rounded-xl border-2 border-transparent
                   bg-white text-black
                   shadow-[0_0_25px_rgba(200,200,200,0.6)]
                   before:absolute before:inset-0 before:rounded-xl
                   before:p-[3px] before:bg-gradient-to-r
                   before:from-amber-500 before:via-pink-500 before:to-purple-600
                   before:-z-10"
      >
        <h1 className="text-4xl font-['Gulim'] tracking-wide mt-6 mb-4">{title}</h1>
            
        {/* 작성일자 + 작성자 */}
        <div className="text-lg text-black mt-2 ml-auto text-right mb-6">
          <time>작성일: {date}</time>
          <span className="mx-2">|</span>
           <span>
    작성자:{" "}
    {backHref.includes("cri")
      ? "형사전문변호사 유관우"
      : backHref.includes("it")
      ? "IT전문변호사 유관우"
      : "유관우 변호사"}
  </span>
        </div>
        <div
          className="post-content prose prose-lg text-black text-2xl mt-4 font-['Gulim'] leading-relaxed prose-p:my-60"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </main>
  );
}
