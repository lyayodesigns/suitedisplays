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
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
