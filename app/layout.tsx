import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suite Display | Interactive Touchscreen Platform for Luxury Suites',
  description: 'Suite Display is the premier digital platform for luxury suite management and experience, providing a complete touchscreen solution.',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/suite-display- logo.png', sizes: '16x16' },
      { url: '/suite-display- logo.png', sizes: '32x32' },
      { url: '/suite-display- logo.png', sizes: '48x48' },
      { url: '/suite-display- logo.png', sizes: '192x192' },
      { url: '/suite-display- logo.png', sizes: '512x512' },
    ],
    apple: [
      { url: '/suite-display- logo.png', sizes: '180x180' },
    ],
    shortcut: '/suite-display- logo.png',
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
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
