import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Falling Apple STEM Academy | Hands-on STEM & Robotics Learning",
    template: "%s | Falling Apple STEM Academy"
  },
  description: "An innovation-focused STEM academy in Adyar, Chennai offering kids age 8+ practical hands-on learning in Robotics, Arduino, Electronics, Coding, AI, and DIY science projects guided by IIT mentors.",
  keywords: [
    "STEM education",
    "Robotics classes for kids",
    "DIY science projects",
    "Coding for children",
    "STEM learning center",
    "Innovation lab",
    "Robotics institute",
    "STEM academy",
    "Arduino classes Chennai",
    "Robotics for kids Chennai",
    "Hands-on learning Adyar"
  ],
  authors: [{ name: "Falling Apple STEM Academy" }],
  creator: "Falling Apple STEM Academy",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fallingapple.in",
    title: "Falling Apple STEM Academy | Hands-on STEM & Robotics Learning",
    description: "Empowering young minds through practical DIY STEM, Robotics, Arduino circuits, and Coding. Guided by an IIT mentor with 40+ years experience.",
    siteName: "Falling Apple STEM Academy",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full scroll-smooth antialiased ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
        <Navbar />
        <main className="flex-1 w-full" id="main-content">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
