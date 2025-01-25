import Image from "next/image";
import Link from "next/link";

export default function Project({ text = "text-center", title, snapAlign = "snap-start", image, width, height, bouncingText, description, link }) {
  return (
    <div className={`relative h-screen flex justify-center items-center px-5 md:px-10 ${snapAlign}`}>
      <Link href={link} className="object-contain">
        <div className="
          base: flex flex-col 
          sm: gap-2 max-w-[100vw]
          md: md:gap-3 md:max-w-[95vw]
          lg: lg:gap-3 lg:max-w-[55vw]
          transition delay-50 hover:scale-105
        "> 
          <h1 className="
            base: font-instrument font-medium tracking-normal leading-7 text-neutral-800
            sm: text-4xl
            md: md:text-5xl md:leading-10
            lg: lg:text-5xl lg:leading-10
          ">{title}</h1>
          <Image
            src={image}
            alt="Project Image"
            width={width}
            height={height}
            className="object-contain " 
          />
          <p className="
            base: font-robotoCondensed tracking-tight text-neutral-800
            sm: text-lg
            md: md:text-2xl
            lg: lg:text-2xl
          ">{description}</p>
        </div>
      </Link>
    </div>
  );
}
