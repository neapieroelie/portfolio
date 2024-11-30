import MenuButton from "./MenuButton";
import Link from "next/link";

export default function Header () {
    return (
        <>
            <div className=" flex flex-row items-center justify-between w-screen px-10 py-7 ">
                {/* SVG Logo */}
                <div className="flex justify-start">
                    <Link href="#">
                        <object 
                            data="/logo_white.svg" 
                            type="image/svg+xml"
                            className="h-14">
                        </object>
                    </Link>
                </div>
                <div>
                    <MenuButton/>
                </div>
            </div>
        </>
    )
}