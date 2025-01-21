import Image from "next/image"

export default function ProjectComponent({title, image, number}) {
    return(
        <>
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
        </>
    )
}