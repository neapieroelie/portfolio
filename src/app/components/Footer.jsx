import Link from "next/link";

export default function Footer() {
  return (
    <div className="
      base: snap-center flex flex-col justify-center py-24 w-dvw h-dvh 
      sm: gap-10 items-center p-5
      md: md:gap-20 md:items-center
      lg: lg:flex-row lg:px-24 lg:justify-between lg:items-center
    ">
      {/* Logo */}
      <div className=" flex flex-col justify-start items-left ">
        <div className="
          base: flex flex-row justify-left items-center 
          sm: gap-2
          md: md:gap-5
          lg: lg:gap-5
        ">
            <Link href="#">
                <object 
                    data="/logo_pink.svg" 
                    type="image/svg+xml"
                    className="
                      base:
                      sm: h-[55px]
                      md: md:h-[90px]
                      lg: lg:h-[90px]
                    ">
                </object>
            </Link>
            <div>
                <h1 className="
                  base: font-instrument  tracking-tight text-[#FF2E8D]
                  sm: text-7xl
                  md: md:text-9xl
                  lg: lg:text-9xl
                ">
                    Nea Kirana
                </h1>
            </div>
        </div>
        <a
          href="mailto:nea@neakirana.com"
          className="
            base: font-robotoCondensed  tracking-tighter text-neutral-800 hover:underline transition duration-200
            sm: text-3xl
            md: md:text-4xl
            lg: lg:text-4xl 
        ">
          NEA@NEAKIRANA.COM
        </a>
      </div>

      {/* Content */}
      <div className=" 
        base: flex flex-row
        sm: gap-10
        md: md:gap-24
        lg: lg:gap-24
      ">
        {/* Navigation */}
        <div className=" flex flex-col items-left gap-2 md:4 lg:4">
          <h1 className="
            base: font-instrument text-neutral-800 tracking-tighter
            sm: text-5xl
            md: md:text-7xl
            lg: lg:text-7xl
          ">Navigation</h1>
          <div className="
            base: flex flex-col items-left font-robotoCondensed tracking-tighter text-neutral-800
            sm: text-3xl 
            md: md:text-4xl md:gap-3
            lg: lg:text-4xl lg:gap-3
          ">
            <Link href="/#" 
                  className="hover:underline transition duration-200">
                  HOME
              </Link>
              <Link href="/projects" className="hover:underline transition duration-200">
                  PROJECTS
              </Link>
              <Link href="/resume" className="hover:underline transition duration-200">
                  RESUME
              </Link>
              <Link href="/about-me" className="hover:underline transition duration-200">
                  ABOUT ME
              </Link>
          </div>
        </div>

        {/* Connect */}
        <div className=" flex flex-col items-left gap-4">
          <h1 className="
            base: font-instrument text-neutral-800 tracking-tighter
            sm: text-5xl
            md: md:text-7xl
            lg: lg:text-7xl
          ">Connect</h1>
          <div className="body-text flex flex-col items-left gap-3">
            <a 
              href="https://www.linkedin.com/in/nea-pieroelie/"
              className="hover:underline transition duration-200"
              target='_blank'
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
