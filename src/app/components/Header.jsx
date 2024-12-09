import MenuButton from "./MenuButton";
import Image from "next/image";

export default function Header () {
    return (
        <>
            <div className="flex flex-row items-center justify-between w-screen px-10 py-7">
                {/* SVG Logo */}
                <div className="flex justify-start">
                    <a href="/">
                        <Image 
                            src="/logo_white.svg" 
                            alt="Logo" 
                            width={56} 
                            height={56} 
                        />
                    </a>
                </div>

                <div>
                    <MenuButton />
                </div>
            </div>
        </>
    )
}
