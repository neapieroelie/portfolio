import Image from "next/image";
import Link from "next/link";
import BouncingText from "./BouncingText";

export default function Project({ text = "text-center", title, snapAlign = "snap-start", image, width, height, bouncingText, description, link }) {
  return (
    <div className={`relative h-screen flex justify-center items-center px-20 ${snapAlign}`}>
      <Link href={link} className="object-contain">
        <div className="flex flex-col items-left gap-3 justify-center">
          <h1 className="title4-text">{title}</h1>
          <Image
            src={image}
            alt="Project Image"
            width={width}
            height={height}
            className="object-contain"
          />
            <p className="description-text">{description}</p>      
        </div>
      </Link>           
    </div>
  );
}
