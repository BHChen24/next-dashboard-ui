import ListSearch from "@/components/ListSearch";
import Pagination from "@/components/Pagination";
import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:block hidden">History</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <ListSearch />
          <div className="flex self-end items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full">
              <Image src="/filter.png" alt="" width={14} height={14}></Image>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full">
              <Image src="/sort.png" alt="" width={14} height={14}></Image>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full">
              <Image src="/plus.png" alt="" width={14} height={14}></Image>
            </div>
          </div>
        </div>
      </div>
      {/* list */}
      <div className=""></div>
      {/* Pagination */}
      <Pagination />
    </div>
  );
}
