import "./styles/globals.css";
import type { ReactNode } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata = {
  title: "TravelBuddy",
  description: "Plan and manage your trips seamlessly.",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
