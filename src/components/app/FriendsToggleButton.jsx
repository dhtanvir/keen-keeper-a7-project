"use client";

import { KeenAppsContext } from "@/context/keen.context";
import { useContext } from "react";
import { BsChatText } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FriendsToggleButton = ({ app }) => {
  const { timeline, setTimeline } = useContext(KeenAppsContext);

  const handleAction = ({ type, name }) => {
    setTimeline([...timeline, { type, name }]);
  };

  console.log(setTimeline, "setTimeLine");
  console.log(timeline, "timeline");

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => handleAction({ type: "call", name: app.name })}
        className="flex items-center gap-2 justify-center p-6
         bg-gray-50 hover:bg-emerald-50 rounded-xl border border-gray-100 
          transition-all group"
      >
        <IoCall />
        <span
          className="text-slate-600 font-medium
         group-hover:text-emerald-700"
        >
          Call
        </span>
      </button>
      <button
        onClick={() => handleAction({ type: "text", name: app.name })}
        className="flex gap-2 items-center justify-center p-6 bg-gray-50
         hover:bg-emerald-50 rounded-xl border border-gray-100 
                  transition-all group"
      >
        <BsChatText />
        <span
          className="text-slate-600 font-medium
              group-hover:text-emerald-700"
        >
          Text
        </span>
      </button>
      <button
        onClick={() => handleAction({ type: "video", name: app.name })}
        className="flex gap-2 items-center justify-center p-6
         bg-gray-50 hover:bg-emerald-50 rounded-xl border
          border-gray-100 transition-all group"
      >
        <FaVideo />
        <span
          className="text-slate-600 font-medium
                   group-hover:text-emerald-700"
        >
          Video
        </span>
      </button>
    </div>
  );
};

export default FriendsToggleButton;
