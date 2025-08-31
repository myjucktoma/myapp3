"use client";
import { useState, useEffect } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // 1. 세로 모드(높이가 가로보다 길면 → 모바일처럼 처리)
      // 2. 뷰포트 폭이 768px 이하
      // 3. Hisense A5 같은 특수 케이스 (0px 나올 때)
      if (vh > vw || vw <= 768 || vw === 0 || vh === 0) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
