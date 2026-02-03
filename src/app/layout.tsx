import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Contact Me | Kishan Lokhil – DevOps Engineer",
  metadataBase: new URL("https://lokhilkishan.dev/"),
  description:
    "Contact Kishan Lokhil, DevOps Engineer from India, for cloud infrastructure, CI/CD automation, and DevOps consulting projects.",
  icons: {
    icon: [
      { url: "/favicon2.ico", sizes: "any" },
      { url: "/favicon2.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon2.ico",
  },
  keywords: [
    "Kishan Lokhil",
    "DevOps Engineer",
    "AWS DevOps Engineer",
    "Cloud Engineer",
    "CI/CD Automation",
    "Docker Kubernetes Engineer",
    "Freelance DevOps Engineer India",
    "Contact DevOps Engineer",
  ],
  openGraph: {
    title: "Contact Me | Kishan Lokhil – DevOps Engineer",
    description:
      "Get in touch for DevOps, cloud infrastructure, CI/CD pipelines, and automation projects.",
    url: "https://lokhilkishan.dev/",
    siteName: "Kishan Lokhil DevOps Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kishan Lokhil DevOps Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
