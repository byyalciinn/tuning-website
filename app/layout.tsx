import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prodac - Professional Automotive Tuning Services",
  description: "Maximize your vehicle's performance. Chip tuning, exhaust systems, turbo upgrades and more. Professional service guarantee.",
  keywords: "chip tuning, car tuning, performance, exhaust system, turbo upgrade, ECU remapping",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 