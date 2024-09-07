import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="flex md:flex-row flex-col gap-4 p-4 items-center justify-center bg-[#f7f8fa] h-screen">
      {/* left */}
      <div className="flex flex-col gap-4 md:w-2/3 h-full w-full">
        <div className="bg-blue-50 p-3 rounded-xl">
          {/* image */}
          <div className="flex gap-4">
            <Image
              className="hidden md:block w-fix rounded-full m-4 object-cover"
              src="/avatar.png"
              alt=""
              width={160}
              height={160}
            ></Image>
            {/* text */}
            <div className="m-3">
              <h1 className="text-xl font-semibold"> Name </h1>
              <p className="text-sm text-gray-500 mt-6 mb-12">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2 font-medium text-xs">
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={12} height={12}></Image>
                  <p>A+</p>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={12} height={12}></Image>
                  <p>text</p>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={12} height={12}></Image>
                  <p>Lorem ipsum</p>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={12} height={12}></Image>
                  <p>Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-100 h-full p-3 rounded-xl">Status</div>
      </div>
      {/* right */}
      <div className="md:w-1/3 h-full w-full">
        <div className="rounded-lg bg-yellow-50 h-full p-3">Activities</div>
      </div>
    </div>
  );
}
