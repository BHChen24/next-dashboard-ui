export default function Pagination() {
    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
            <div className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50">Prev</div>
            <div className="hidden md:flex gap-2 items-center text-sm">
                <button className="rounded-sm px-2 bg-blue-200">1</button>
                <button className="rounded-sm px-2">2</button>
                <button className="rounded-sm px-2">3</button>
                ...
                <button className="rounded-sm px-2">10</button>
            </div>
            <div className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50">Next</div>
        </div>
    );
}