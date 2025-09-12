import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suite Display | Interactive Touchscreen Platform for Luxury Suites',
  description: 'Suite Display is the premier digital platform for luxury suite management and experience, providing a complete touchscreen solution.',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/suite-display.png' },
    ],
    apple: [
      { url: '/suite-display.png' },
    ],
    shortcut: '/suite-display.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}} />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S8YWMXM8XQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S8YWMXM8XQ');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
