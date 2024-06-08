import Link from "next/link";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative flex h-10 items-center justify-between">
      <Link
        href={"/"}
        className="absolute rounded-full bg-zinc-100 p-1 hover:bg-slate-200"
      >
        <IoSearchOutline className="" size={20} />
      </Link>

      <input
        type="text"
        placeholder="Buscar"
        className="w-32 rounded-full border-none bg-zinc-100 pl-9 hover:bg-slate-200"
      />
    </div>
  );
};

export default Search;
