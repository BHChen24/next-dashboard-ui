import Image from "next/image";

export default function SmallCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl flex-1 odd:bg-purple-200 even:bg-blue-200 p-4 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-gray-50 rounded-full py-1 px-2 ">
          8/31/2024
        </span>
        <Image src="/more.png" alt="" width={16} height={16}></Image>
      </div>
      <h1 className="font-semibold text-2xl my-4">count</h1>
      <h2 className="capitalize text-sm text-gray-500 font-medium">{type}</h2>
    </div>
  );
}
