import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-between w-full h-dvh px-10 py-7 bg-slate-900 text-white snap-center">
      
      {/* Footer Logo */}
      <div className=" flex flex-col justify-start items-left ">
        <div className=" flex flex-row justify-center items-center gap-5">
            <Link href="#">
                <object 
                    data="/logo_white.svg" 
                    type="image/svg+xml"
                    className="h-[90px]">
                </object>
            </Link>
            <div>
                <h1 className="font-instrument text-9xl tracking-tighter">
                    Nea Kirana
                </h1>
            </div>
        </div>
        <a
          href="mailto:nea.pieroelie@gmail.com"
          className="font-instrument text-5xl tracking-tighter leading-tight hover:underline hover:text-yellow-300 transition duration-200"
        >
          nea.pieroelie@gmail.com
        </a>
      </div>
      

      {/* Footer Links */}
      <div>
        <h1>Navigation</h1>
        <div className="flex flex-col gap-8">
            <Link href="/projects" className="hover:underline hover:text-yellow-300 transition duration-200">
                Projects
            </Link>
            <Link href="/projects" className="hover:underline hover:text-yellow-300 transition duration-200">
                Resume
            </Link>
            <Link href="/projects" className="hover:underline hover:text-yellow-300 transition duration-200">
                About me
            </Link>
        </div>
      </div>
      
    </div>
  );
}
