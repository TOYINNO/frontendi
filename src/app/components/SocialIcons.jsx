import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdAddCall } from "react-icons/md";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <aside className="flex gap-4 cursor-pointer">
        <Link href="https://www.linkedin.com/in/omolade-omonusi-13663a1aa/">
             <BsLinkedin />
        </Link>
       
        <Link href="https://github.com/Toyinno">
        <BsGithub />
        </Link>

        <FaInstagramSquare />

        <Link href="Tel:08169597180">
        <MdAddCall />
        </Link>

        <Link href="mailto:toyinnomons@gmail.com">
        <BiLogoGmail />
        </Link>
        

    </aside>
    
  )
}
