import Image from "next/image"

export default function ProjectComponent({title, image}) {
    return(
        <>
            <div className=" flex flex-col gap-2">
                <Image
                    src="/example_project.png" 
                    alt="Project Image" 
                    width={450} 
                    height={242.91} 
                    className="object-contain"
                />
                <p className="title4-text text-white">{title}</p>
            </div>
        </>
    )
}