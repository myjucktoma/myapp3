export const metadata = {
  title: '법률사무소 적벽',
  description: '형사, IT 전문 변호사',
  openGraph: {
    title: '법률사무소 적벽',
    description: '형사, IT 전문 변호사',
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
      <body>
        {children}
      </body>
    </html>
  )
}

import './globals.css'
