"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menu2({
  // 좌측 메뉴 1
  menu1Title,
  menu1Desc,
  menu1Href,
  // 좌측 메뉴 2
  menu2Title,
  menu2Desc,
  menu2Href,
  // 게시글 데이터
  posts = [],
}) {
  const [open, setOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-white text-black pt-16 sm:pt-20 md:pt-24 lg:pt-0">
      {/* ---------------- 본문 ---------------- */}
      <section className="mt-0 md:mt-20 px-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {/* 좌측 메뉴 */}
        <aside className="space-y-4">
          {/* 메뉴 1 */}
          <Link
            href={menu1Href}
            className="group block w-70 p-6 rounded-lg border border-gray-400 
                       bg-white/40 text-black transition 
                       hover:animate-pulse hover:bg-gradient-to-r 
                       hover:from-amber-200 hover:via-yellow-100 hover:to-amber-200"
          >
            <h2 className="text-2xl font-bold">{menu1Title}</h2>
            <p className="text-xl text-black">{menu1Desc}</p>
          </Link>

          {/* 메뉴 2 */}
          <Link
            href={menu2Href}
            className="block w-70 p-6 rounded-lg border-2 border-gray-400 
                       bg-gradient-to-r from-gray-500/20 via-gray-500/20 to-black-500/20 
                       hover:from-amber-500/30 hover:via-red-500/30 hover:to-pink-500/30 
                       text-black shadow-lg shadow-amber-500/20 transition"
          >
            <h2 className="text-2xl font-bold">{menu2Title}</h2>
            <p className="text-xl text-black">{menu2Desc}</p>
          </Link>
        </aside>

        {/* 우측 게시글 영역 */}
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
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.href ?? `#`} // 🔹 링크가 없으면 기본 "#"
              className="block p-4 rounded-lg border border-black/20 bg-white/40
                         hover:animate-pulse hover:bg-gradient-to-r 
                         hover:from-amber-200 hover:via-yellow-100 hover:to-amber-200"
            >
              <h3 className="text-2xl font-semibold hover:text-amber-300">
                {post.title}
              </h3>
              <time className="block text-xl text-black mt-1 text-right">{post.date}</time>
              <p className="text-xl text-black mt-2 line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
