export default function ProfilePage() {
  return (
    <div className="flex md:flex-row flex-col gap-4 p-4 items-center justify-center bg-gray-200 h-screen">
      {/* left */}
      <div className="flex flex-col gap-4 md:w-2/3 h-full w-full">
        <div className="bg-yellow-100 h-1/3 p-3 rounded-xl">Info</div>
        <div className="bg-red-100 h-2/3 p-3 rounded-xl">Status</div>
      </div>
      {/* right */}
      <div className="md:w-1/3 h-full w-full">
        <div className="rounded-lg bg-blue-50 h-full p-3">Activities</div>
      </div>
    </div>
  );
}
