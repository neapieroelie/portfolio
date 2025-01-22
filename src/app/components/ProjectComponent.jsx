import Image from "next/image"
import Link from "next/link"

export default function ProjectComponent({title, image, number, link}) {
    return(
        <>
        <div>
            <Link href={link}>
                <div className=" flex flex-col gap-2">
                    <p className="title5-text">{number} {title}</p>
                    <Image
                        src={image}
                        alt="Project Image" 
                        width={400} 
                        height={242.91} 
                        className="object-contain"
                    />
                </div>
            </Link>
        </div>
            
        </>
    )
}