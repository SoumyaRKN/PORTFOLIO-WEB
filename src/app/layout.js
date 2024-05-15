import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soumya Prakash Nayak",
  description: "Portfolio website of soumya prakash nayak. javascript,nodejs,nextjs,express,api,backend,frontend,webhook,deployment,integration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};