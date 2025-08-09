"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const NAV = [
    { label: "형사", href: "/cri", img: "/image/cri1.PNG" },
    { label: "민사", href: "/civil", img: "/image/civil1.PNG" },
    { label: "IT", href: "/it", img: "/image/it1.PNG" },

];

export default function Civil() {

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
                <h1 className="text-4xl font-['WarhavenBold'] tracking-wide mt-20 text-center">
                    민사 사건 수행 사례
                </h1>
                <p className="text-2xl mt-4 font-['Gulim'] text-white text-left"><br />
            - 토지 분양 매매대금반환 소송 승소<br />
            - 토지 분양 손해배상 소송 승소<br />
            - 아파트 분양 계약금반환 소송 승소<br />
            - 아파트 퇴거소송 승소<br />
            - 상가 관리비 지급 소송 승소<br />
            - 청구이의 소송 일부 승소<br />
            - 대부업체 대출금 소송 승소<br />
            - 위자료 청구 소송 일부 승소<br />
            - 프리랜서 용역비 지급 소송 승소<br />
            - 휴대폰 대리점 손해배상 소송 일부 승소<br />
            - 총회결의무효확인 일부 승소<br />
            - 협약 취소 소송 승소<br />
            - 희생자 유족 소송 승소<br />
            - 소유권이전등기 소송 승소<br />
            - 임대차보증금반환 소송 승소<br />
            - 이웃 간 손해배상 소송 일부 승소<br />
            - 부동산 가압류 인용<br />
            - 채권 가압류 인용<br />
            - 임시총회결의효력정지등가처분 일부 인용<br />
            - 유체동산 강제집행 성공<br />
            - 부동산 경매 배당 성공<br />
            - 담보취소 인용<br />
            - 강제집행정지 인용<br />
            - 소송비용액확정신청 사건 성공<br />
            - 압류및추심명령신청 사건 성공<br />
            - 의사표시 공시송달 성공<br />
            - 임차권등기명령 성공<br />
            - 재산명시 인용<br />
            - 채무불이행자명부등재 인용<br />
</p>
            </div>

        </main >

    );
}
