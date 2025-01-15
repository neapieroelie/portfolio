import Image from "next/image"

export default function ProjectComponent({title, image}) {
    return(
        <>
            <div className=" flex flex-col">
                <Image
                    src="/example_project.png" 
                    alt="Project Image" 
                    width={700} 
                    height={1000} 
                    className="object-contain"
                />
                <p className="title4-text text-white">{title}</p>
            </div>
        </>
    )
}