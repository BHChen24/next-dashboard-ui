import SmallCard from "@/components/SmallCard";
import MyPieChart from "@/components/MyPieChart"

export default function admin() {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <SmallCard type="test" />
          <SmallCard type="test" />
          <SmallCard type="test" />
          <SmallCard type="test" />
        </div>
        {/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px] animate-fade-in-bottom">
            <MyPieChart />
          </div>

          <div className="w-full lg:w-2/3 h-[450px]">

          </div>
        </div>
        {/* bottom chart */}
        <div className=""></div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
}
