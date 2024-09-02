export default function Announcements() {
    return (
        <div className="bg-white rounded-xl p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View all</span>
            </div>
            <div className="flex flex-col gap-4 mt-7">
                {/* annos */}
                <div className="bg-red-200 p-4 rounded-xl">test</div>
                <div className="bg-blue-200 p-4 rounded-xl">test</div>
                <div className="bg-yellow-100 p-4 rounded-xl">test</div>
            </div>
            <div className=""></div>
        </div>
    );
}