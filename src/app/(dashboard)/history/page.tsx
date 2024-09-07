import FormModal from "@/components/FormModal";
import ListSearch from "@/components/ListSearch";
import Pagination from "@/components/Pagination";
import ReusableList from "@/components/ReusableList";
import { Col, Columns, History, portfolioData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function HistoryPage() {
  const renderRow = (item: History) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm even:bg-slate-100 hover:bg-purple-100"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold"> {item.name} </h3>
          <p className="text-sm text-gray-300"> {item.instanceId} </p>
        </div>
      </td>
      <td className="hidden md:table-cell"> {item.id} </td>
      <td className="hidden md:table-cell"> {item.date} </td>
      <td className="hidden md:table-cell"> {item.label.join(",")} </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/history/${item.instanceId}`}>
            {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100">
              <Image src="/view.png" alt="" width={16} height={16}></Image>
            </button> */}
            
            <FormModal type="view"></FormModal>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-200">
            //   <Image src="/delete.png" alt="" width={16} height={16}></Image>
            // </button>
            <FormModal table="" type="delete"></FormModal>
          )}
        </div>
        <div className=""></div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:block hidden">History</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <ListSearch />
          <div className="flex self-end items-center gap-4">
            {/* <div className="w-8 h-8 flex items-center justify-center rounded-full">
              <Image src="/filter.png" alt="" width={14} height={14}></Image>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full">
              <Image src="/sort.png" alt="" width={14} height={14}></Image>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full">
              <Image src="/plus.png" alt="" width={14} height={14}></Image>
            </div> */}
            <FormModal type="filter"></FormModal>
            <FormModal type="sort"></FormModal>
            <FormModal type="plus"></FormModal>
          </div>
        </div>
      </div>
      {/* list */}
      <ReusableList
        columns={Columns}
        data={portfolioData}
        renderRow={renderRow}
      />
      {/* Pagination */}
      <Pagination />
    </div>
  );
}
