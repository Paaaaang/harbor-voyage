import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPARROW - 바다를 향한 하루의 준비",
  description:
    "낮에는 편안한 휴식의 카페, 밤에는 몰입감 있는 사교의 펍. 도심 속에서 낮과 밤, 두 개의 일상을 경험할 수 있는 시간대 전환형 문화공간.",
  keywords: ["카페", "펍", "브런치", "칵테일", "문화공간", "SPARROW"],
  openGraph: {
    title: "SPARROW - 바다를 향한 하루의 준비",
    description: "낮에는 편안한 휴식의 카페, 밤에는 몰입감 있는 사교의 펍",
    type: "website",
    images: [
      {
        url: "/og-image-day.jpg",
        width: 1200,
        height: 630,
        alt: "SPARROW 낮 모드",
      },
      {
        url: "/og-image-night.jpg",
        width: 1200,
        height: 630,
        alt: "SPARROW 밤 모드",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPARROW - 하루가 두 번 시작되는 곳",
    description: "낮에는 편안한 휴식의 카페, 밤에는 몰입감 있는 사교의 펍",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <CustomCursor />
          <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-all duration-800">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
