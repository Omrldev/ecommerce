import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { SiNike } from "react-icons/si";

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <SiNike className="" size={54}></SiNike>
          </Link>
          <div className="flex items-center justify-end gap-4">
            <div className="rounded-full hover:bg-gray-500">
              <Link href={"/"} className="">
                <GoSearch className=""></GoSearch>
              </Link>
            </div>
            <Link href={"/"}>
              <IoPersonOutline></IoPersonOutline>
            </Link>
            <Link href={"/"}>
              <IoBagOutline></IoBagOutline>
            </Link>
            <Link href={"/"}>
              <LuMenu></LuMenu>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
