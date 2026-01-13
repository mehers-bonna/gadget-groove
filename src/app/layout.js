import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GadgetGroove | Premium Tech Store",
  description: "Next-gen gadgets for the modern world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {/* AuthProvider diye puro app wrap kora jate authentication session shob page-e thake */}
        <AuthProvider>
          {/* Toast notifications shobar upore thakbe */}
          <Toaster position="top-center" reverseOrder={false} />
          
          <Navbar />
          
          {/* Navbar fixed thakai main content-ke padding-top (pt-20) dewa hoyeche */}
          <main className="min-h-screen pt-20">
            {children}
          </main>
          
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}