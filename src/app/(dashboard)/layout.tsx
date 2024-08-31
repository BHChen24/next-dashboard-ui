import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] min-w-fit p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/raccoon.ico" alt="logo" width={32} height={32}/>
          <span className="hidden lg:block"> DataMosaic </span>
        </Link>
        <Menu/>
      </div>
      
      {/* right */}
      <div className="w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
