import type { Metadata } from "next";
import { Poppins, Iceberg } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const iceberg = Iceberg({
  variable: "--font-iceberg",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Xshubhamg",
  description: "Xshubhamg's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${iceberg.variable} bg-base text-text antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
