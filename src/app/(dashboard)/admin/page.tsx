// "use client";
import 'react-calendar/dist/Calendar.css';
import SmallCard from "@/components/SmallCard";
import EventCalendar from "@/components/EventCalendar";
import ActiveChart from '@/components/ActiveChart'; 
import Announcements from '@/components/Announcements';

export default function admin() {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <SmallCard type="test" />
          <SmallCard type="test" />
        </div>
        {/* bottom chart */}
        <div className="w-full h-[500px]" >
          <ActiveChart></ActiveChart>  
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* calendar */}
        <div className="bg-white p-4 rounded-md">
          <EventCalendar></EventCalendar>
        </div>
        {/* announcement */}
        <div className="">
          <Announcements></Announcements>
        </div>
      </div>
    </div>
  );
}
