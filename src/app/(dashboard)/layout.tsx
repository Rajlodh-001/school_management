import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* {children} */}

      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%]  xl:w-[14%]  p-4">
        <Link
          href="/admin"
          className="flex lg:justify-start justify-center items-center gap-2"
        >
          <Image src="/academax_logo.png" className="w-auto h-auto" alt="logo" width={38} height={38} />
          <span className="hidden lg:block font-bold">Academax</span>
        </Link>
        <Menu/>
      </div>

      {/* Right */}

      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
