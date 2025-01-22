import Image from "next/image";
import Link from "next/link";

export default function Project({ text = "text-center", title, snapAlign = "snap-start", image, width, height, bouncingText, description, link }) {
  return (
    <div className={`relative h-screen flex justify-center items-center px-20 ${snapAlign}`}>
      <Link href={link} className="object-contain">
        <div className="flex flex-col gap-3 justify-start max-w-[55vw] w-full"> {/* Align left */}
          <h1 className="title4-text">{title}</h1>
          <Image
            src={image}
            alt="Project Image"
            width={width}
            height={height}
            className="object-contain max-h-[65vh]" // Dynamically scale
          />
          <p className="description-text">{description}</p>
        </div>
      </Link>
    </div>
  );
}
