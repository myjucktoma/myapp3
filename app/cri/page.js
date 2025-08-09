"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
    { label: "형사", href: "/cri", img: "/image/cri1.PNG" },
    { label: "민사", href: "/civil", img: "/image/civil1.PNG" },
    { label: "IT", href: "/it", img: "/image/it1.PNG" },

];

export default function Cri() {

    const [open, setOpen] = useState(false);

    return (
        <main className="w-full min-h-screen bg-black text-white">
            <header className="fixed top-0 w-full z-50 bg-transparent" />
            {/* 메인페이지와 동일한 위치의 로고 */}
            <div className="flex items-center gap-8">
                <Link href="/" aria-label="Home">
                    <Image
                        src="/image/j02.png"
                        alt="법률사무소 적벽 로고"
                        width={140}
                        height={36}
                        priority
                    />
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
                        className="absolute inset-0 bg-black/70"
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


            {/* 페이지 본문 */}
            <div className="mx-auto max-w-[1200px] flex flex-col items-start justify-start min-h-screen px-4 md:px-0">
                <h1 className="text-4xl font-['WarhavenBold'] tracking-wide mt-20">
                    형사 사건 수행 사례
                </h1>
                <p className="text-2xl mt-4 font-['Gulim'] text-white"><br />
                    - 토지 사기죄 무죄<br />
                    - 토지 대출금 횡령죄 무죄<br />
                    - 위증죄 무죄<br />
                    - 동산 배임죄 무죄<br />
                    - 성폭력범죄의처벌등에관한특례법위반(카메라등이용촬영) 무죄<br />
                    - 국민참여재판 성폭력범죄의처벌등에관한특례법위반(13세미만미성년자강제추행) 무죄<br />
                    - 강제추행죄 무죄<br />
                    - 유가증권위조죄 대법원 파기환송<br />
                    - 보이스피싱 사기방조죄 무죄<br />
                    - 전자금융거래법위반죄 무죄<br />
                    - 금융실명거래및비밀보장에관한법률위반방조죄 무죄<br />
                    - 폐기물관리법위반죄 무죄<br />
                    - 지방재정법위반죄 무죄<br />
                    - 절도죄 무죄<br />
                    - 상해죄 무죄<br />
                    - 도박죄 무죄<br />
                    - 국민참여재판 재물손괴미수죄 무죄<br />
                    - 도로교통법위반(사고후미조치) 무죄<br />
                    - 자동차손해배상보장법위반죄 무죄<br />
                    - 성폭력범죄의처벌등에관한특례법위반(성적목적공공장소침입) 무죄<br />
                    - 성폭력범죄의처벌등에관한특례법위반(비밀준수등) 무죄<br />
                    - 무고죄 일부 무죄<br />
                    - 정보통신망이용촉진및정보보호등에관한법률위반죄 일부 무죄<br />
                    - 항소기간 도과 상소권회복 인용<br />
                    - 보석 인용<br />
                    - 보이스피싱 수거책 소년부 송치<br />
                    - 특수절도죄 소년부 송치<br />
                    - 업무상과실치상죄 공소기각<br />
                    - 업무상횡령죄 집행유예<br />
                    - 교통사고처리특례법위반(치사) 집행유예<br />
                    - 사기죄, 여신전문금융업법위반죄 선고유예<br />
                    - 부정청탁및금품등수수의금지에관한법률위반죄 불송치<br />
                    - 형사보상 인용<br />
                    - 별개의 토지관할 사건 병합 인용<br />
                </p>
            </div>
            {/* 이미지 섹션 */}
            <div className="mx-auto max-w-[1200px] mt-12">
                <h2 className="text-2xl font-['WarhavenBold'] text-white mb-6">
                    유관우 변호사 판결문 중 일부
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 md:px-0">
                    {Array.from({ length: 24 }).map((_, index) => (
                        <img
                            key={index}
                            src={`/image/s${index + 1}.png`} // 이미지 경로
                            alt={`이미지 ${index + 1}`}
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                    ))}
                </div>
            </div>
        </main >

    );
}
