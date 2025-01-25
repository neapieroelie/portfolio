import Image from "next/image"
import Link from "next/link"

export default function ProjectComponent({title, image, number, link}) {
    return(
        <>
        <div>
            <Link href={link}>
                <div className=" flex flex-col md:gap-1 lg:gap-2">
                    <p className="
                        base: font-instrument  font-medium tracking-normal leading-6 text-neutral-800
                        sm: text-xl
                        md: md:text-3xl
                        lg: lg:text-3xl">{number} {title}</p>
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