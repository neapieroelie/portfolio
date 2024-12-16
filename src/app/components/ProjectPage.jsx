import Image from "next/image";

export default function Project({ text = "text-center", title, snapAlign = "snap-start" }) {
    return (
      <div
        className={`h-screen bg-gray-950 flex justify-center items-center px-20 ${snapAlign} hover:`}
      >
        <div className=" bg-gray-950 flex flex-row items-center justify-center gap-10">
          <h1 className={`title3-text text-white ${text}`}>
            {title}
          </h1>
          <Image 
              src="/onward_1.png" 
              alt="Project Image" 
              width={700} 
              height={1000} 
              className="object-contain"
            />
        </div>
      </div>
    );
  }  
