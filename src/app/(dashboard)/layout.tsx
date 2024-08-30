import Link from "next/link";
import Image from "next/image"

export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] min-w-fit bg-red-200 p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
          <span className="hidden lg:block"> Simple App </span>
        </Link>
      </div>

      {/* right */}
      <div className="w-[86%] bg-blue-200">
        right
      </div>
    </div>
  );
}
