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
import { TbMinusVertical } from "react-icons/tb";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="hidden h-7 w-full bg-zinc-100 px-9 md:flex md:justify-between lg:px-12">
        <div className="flex items-center gap-3">
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

        <div className="flex items-center gap-2 text-xs font-semibold">
          <Link href={"/"} className="">
            <p>Buscar una tienda</p>
          </Link>
          <TbMinusVertical size={20}></TbMinusVertical>

          <Link href={"/"}>
            <p>Ayuda</p>
          </Link>
          <TbMinusVertical size={20}></TbMinusVertical>

          <Link href={"/"}>
            <p>Únete a nosotros</p>
          </Link>
          <TbMinusVertical size={20}></TbMinusVertical>

          <Link href={"/"}>
            <p>Iniciar sesión</p>
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

          <div className="hidden gap-2 md:flex xl:hidden">
            <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
              <IoSearchOutline size={24}></IoSearchOutline>
            </Link>
            <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
              <IoHeartOutline size={24}></IoHeartOutline>
            </Link>
            <Link href={"/"} className="rounded-full p-1 hover:bg-indigo-200">
              <IoBagOutline size={24}></IoBagOutline>
            </Link>
          </div>

          <div className="hidden flex-wrap items-center justify-between gap-4 xl:flex">
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

      <div className="grid h-14 items-center justify-center bg-zinc-100 text-center align-baseline font-semibold text-black/90">
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
