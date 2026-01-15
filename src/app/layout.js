import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { Toaster } from "react-hot-toast"; // [cite: 2026-01-05] Requirement: Toast notification

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GadgetGroove | Premium Hardware Store", // [cite: 2026-01-05]
  description: "Next-gen hardware components for the modern world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* [cite: 2026-01-05] Antialiased ebong Dark background (bg-black) set kora hoyeche */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-lime-400 selection:text-black`}
      >
        {/* [cite: 2026-01-05] Requirement: AuthProvider for session management */}
        <AuthProvider>
          {/* [cite: 2026-01-05] Requirement: Toast notifications for feedback */}
          <Toaster 
            position="top-right" 
            toastOptions={{
              style: {
                background: '#1e293b',
                color: '#fff',
                border: '1px solid rgba(163, 230, 53, 0.2)',
              },
            }}
          />
          
          <Navbar />
          
          {/* [cite: 2026-01-05] Main content area with padding for fixed navbar */}
          <main className="min-h-screen pt-20">
            {children}
          </main>
          
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}