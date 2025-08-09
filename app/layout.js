export const metadata = { title: 'My App' }

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
