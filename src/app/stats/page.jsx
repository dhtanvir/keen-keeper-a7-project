"use client";
import { KeenAppsContext } from "@/context/keen.context";
import { use, useContext, useEffect, useState } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const [apps, setApps] = useState([]);

  const { timeline, setTimeline } = useContext(KeenAppsContext);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("http://localhost:3000/friends.json");
      const data = await res.json();
      setApps(data);
    };
    fetchFriends();
  }, []);

  console.log(apps, "apps stats");
  console.log(timeline, "timeline stats");


  const uninstalledAppsLength = apps.length - timeline.length;
  // console.log(uninstalledAppsLength, installedApps.length, "uninstalledApps");

  const data = [
    { name: "timeline", value: timeline.length, fill: "#0088FE" },
    { name: "Uninstalled", value: uninstalledAppsLength, fill: "#FF8042" },
  ];


  return (
    <div key={apps.id} className=" my-10 shadow p-10 rounded-md border
     border-slate-300 container mx-auto">
      <h1 className="text-2xl font-bold py-4">
        Timeline pages {timeline.length}
      </h1>
      <h1>Stats Page</h1>

      {/* reCh */}
     <div >
      <h2 className="font-semibold text-3xl mb-16 text-center">
        Installed and uninstalled apps
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend/>
        <Tooltip/>
      </PieChart>
    </div>
    </div>
  );
};

export default StatsPage;
