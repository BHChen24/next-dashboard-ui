import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/*search*/}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14}></Image>
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/*icon and user*/}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/word.png" alt="" width={20} height={20}></Image>
        </div>
        <div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="" width={20} height={20}></Image>
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-white text-xs rounded-full bg-purple-500 ">
            1
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <span className="text-xs leading-3 font-bold">blah blah</span>
          <span className="text-[10px] text-gray-500 text-right">admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full cursor-pointer"
        ></Image>
      </div>
    </div>
  );
}
