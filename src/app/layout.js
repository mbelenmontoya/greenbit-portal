// src/app/layout.js
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Providers from "./providers"

export const metadata = {
  title: "Greenbit Portal",
  description: "Your hub for all Greenbit apps & news",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
