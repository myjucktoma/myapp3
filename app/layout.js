import './globals.css'
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


export const metadata = {
  title: '법률사무소 적벽',
  description: '형사전문변호사, IT전문변호사',
  openGraph: {
    title: '법률사무소 적벽',
    description: '형사전문변호사, IT전문변호사',
    url: 'https://xn--3l3b19r.kr',
    siteName: '법률사무소 적벽',
    images: [
      {
        url: '/image/main7-m.PNG', // public 폴더 안 이미지
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-white text-black">
         <SiteHeader />   {/* 모든 페이지 공통 헤더 */}
        

        {/* 본문: 헤더와 겹치지 않도록 상단 패딩 */}
        <main className="w-full min-h-screen">
          {children}
        </main>
        <SiteFooter />   {/* 모든 페이지 공통 푸터 */}
      </body>
    </html>
  );
}




