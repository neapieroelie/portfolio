import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-between w-full h-dvh px-24 bg-gray-950 text-white snap-center ">
      {/* Logo */}
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
          className="body-text leading-tight hover:underline hover:text-yellow-300 transition duration-200"
        >
          NEA.PIEROELIE@GMAIL.COM
        </a>
      </div>

      {/* Content */}
      <div className=" flex flex-row items-left gap-24">
        {/* Navigation */}
        <div className=" flex flex-col items-left gap-4">
          <h1 className="header-text tracking-tighter">Navigation</h1>
          <div className="body-text flex flex-col items-left gap-3">
              <Link href="/projects" className="hover:underline hover:text-yellow-300 transition duration-200">
                  PROJECTS
              </Link>
              <Link href="/projects" className="hover:underline hover:text-yellow-300 transition duration-200">
                  RESUME
              </Link>
              <Link href="/projects" className="hover:underline hover:text-yellow-300 transition duration-200">
                  ABOUT ME
              </Link>
          </div>
        </div>

        {/* Connect */}
        <div className=" flex flex-col items-left gap-4">
          <h1 className="header-text tracking-tighter">Connect</h1>
          <div className="body-text flex flex-col items-left gap-3">
              <Link href="/projects" className="hover:underline hover:text-yellow-300 transition duration-200">
                LINKEDIN
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
