import Image from "next/image";
import Link from "next/link";

export default function Project({ text = "text-center", title, snapAlign = "snap-start" }) {
    return (
      <div
        className={`h-screen flex justify-center items-center px-20 ${snapAlign} hover:`}
      >
        <Link 
          href="#" 
          // href="/onward" 
          className="object-contain">
          <div className=" flex flex-row items-center justify-center gap-10 hover:scale-110 duration-300">
            <h1 className={`title3-text text-white ${text}` }>
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
        </Link>
        
      </div>
    );
  }  
