import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <div className={`min-h-screen bg-white overflow-x-hidden ${className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
