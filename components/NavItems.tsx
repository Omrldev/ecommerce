import { headerLinks } from "@/constants/Index"
import Link from "next/link"


const NavItems = () => {
  return (
    <ul className="md:flex justify-center items-center gap-5 hidden">
        {headerLinks.map((link) => (
            <Link href={link.route} key={link.label} className="pb-1 hover:font-bold">
                {link.label}
            </Link>
        ))}
    </ul>
  )
}

export default NavItems