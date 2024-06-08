import Link from "next/link";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative flex items-center justify-between">
      <Link
        href={"/"}
        className="absolute bg-gray-200 p-1 rounded-full hover:bg-slate-300"
      >
        <IoSearchOutline className="" size={20} />
      </Link>

      <input
        type="text"
        placeholder="Buscar"
        className="rounded-full border-none bg-gray-200 pl-9 hover:bg-slate-300"
      />
    </div>
  );
};

export default Search;
