import Link from "next/link";
import { GoSearch } from "react-icons/go";
import {
  IoBagOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { SiNike } from "react-icons/si";
import NavItems from "./NavItems";
import Image from "next/image";
import Search from "./Search";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="hidden h-7 w-full bg-gray-100 md:flex">
        <div className="flex items-center gap-3 px-9 lg:px-12">
          <Link href={"/"} className="border">
            <Image
              src="/assets/icons/globe-eu.svg"
              alt="globe europa"
              width={20}
              height={20}
              className=""
            />
          </Link>

          <Link href={"/"}>
            <Image
              src="/assets/icons/hand-up.svg"
              alt="hand up"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>

      <nav className="border-b px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <SiNike className="" size={60}></SiNike>
          </Link>

          <div>
            <NavItems />
          </div>

          <div className="flex items-center justify-end gap-2 md:hidden">
            <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
              <GoSearch></GoSearch>
            </Link>

            <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
              <IoPersonOutline></IoPersonOutline>
            </Link>

            <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
              <IoBagOutline></IoBagOutline>
            </Link>

            <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
              <LuMenu></LuMenu>
            </Link>
          </div>

          <div className=" gap-2 hidden lg:hidden xl:hidden md:flex">
            <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
              <IoSearchOutline></IoSearchOutline>
            </Link>
            <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
              <IoHeartOutline></IoHeartOutline>
            </Link>
            <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
              <IoBagOutline></IoBagOutline>
            </Link>
          </div>

          <div className="hidden xl:flex justify-between items-center border-2 gap-4">
            <Search />

            <div className="flex">
              <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
                <IoHeartOutline size={24}></IoHeartOutline>
              </Link>
              <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
                <IoBagOutline size={24}></IoBagOutline>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="grid h-14 items-center justify-center bg-gray-100 text-center align-baseline font-semibold text-black/90">
        <p className="text-sm">Comprar novedades</p>
        <span className="-mt-6 text-xs">
          <Link href={"/"} className="underline">
            comprar
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
