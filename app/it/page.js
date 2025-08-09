"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const NAV = [
    { label: "형사", href: "/cri", img: "/image/cri1.PNG" },
    { label: "민사", href: "/civil", img: "/image/civil1.PNG" },
    { label: "IT", href: "/it", img: "/image/it1.PNG" },

];

export default function IT() {

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
            <div className="mx-auto max-w-[1200px] flex flex-col items-start justify-start min-h-screen pb-20 px-4 md:px-0">
                <h1 className="text-4xl font-['WarhavenBold'] tracking-wide mt-20 text-center">
                    IT 사건 수행 사례
                </h1>
                <p className="text-2xl mt-4 font-['Gulim'] text-white text-left"><br />
            - 애플리케이션 개발비 반환 소송 승소<br />
            - 시스템 개발비 반환 소송 승소<br />
            - 웹사이트 개발비 지급 소송 승소<br />
            - 웹사이트 개발비 반환 소송 일부 승소<br />
            - 게임사 손해배상 소송 승소<br />
            - 웹사이트 개발비 사기죄 형사고소 사건 성공<br />
            - IT 개발 비밀유지의무위반 손해배상 소송 승소<br />
            - IT 업체 개발자 임금 지급 소송 승소<br />
            - SNS 계정 반환 소송 승소<br />
            - IT 개발자 명예훼손 위자료 소송 일부 승소<br />
            - 입찰참가자격제한처분 취소소송 승소<br />
            - 입찰참가자격제한처분 집행정지 인용<br />
            - 투자 자동화 프로그램 서비스 법률자문<br />
            - AI 튜터 서비스 법률자문<br />
            - AI 기반 부동산 매물 매칭 서비스 법률자문<br />
            - 구매대행 종합솔루션 서비스 법률자문<br />
            - 화상 자문 솔루션 서비스 법률자문<br />
            - 메타버스 서비스 법률자문<br />
            - 피트니스센터 플랫폼 서비스 법률자문<br />
            - 청소 용역 플랫폼 서비스 법률자문<br />
            - 가상화폐 웹서비스 법률자문<br />
            - LMS(학습관리시스템) 서비스 법률자문<br />
            - 온라인게임 서비스 법률자문<br />
            - 코인 웹서비스 법률자문<br />
            - 데이터베이스 이관 용역계약 법률자문<br />
            - 온라인게임 저작권 법률자문<br />
            - 스마트워치 사업 법률자문<br />
            - 탄소배출권 플랫폼 법률자문<br />
            - 게임 상표권 칼럼<br />
            - 게임 저작권 칼럼<br />
            - 게임 영업비밀 칼럼<br />
            - P2E 게임 칼럼<br />
            - 게임사 직원 불법행위 칼럼<br />
            - 게임 등급 칼럽<br />
            - 게임 버그 악용 칼럼<br />
            - 게임 접속장애 칼럼<br />
            - 게임 환불 칼럼<br />
            - 게임사 상대 손해배상 소송 칼럼<br />
            - 게임 아이템 칼럼<br />
            - 게임 허위광고 칼럼<br />
            - 대리게임 칼럼<br />
            - 게임핵 칼럼<br />

</p>
            </div>

        </main >

    );
}
