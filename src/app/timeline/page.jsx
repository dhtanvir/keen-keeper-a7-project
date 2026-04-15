"use client";
import { KeenAppsContext } from "@/context/keen.context";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";

const TimelinePage = () => {
  const { timeline } = useContext(KeenAppsContext);

  console.log(timeline, " timeline text");

 

  return (
    <div  className="container mx-auto py-10">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-10">
        <h1 className="text-2xl font-bold py-4">
          Timeline pages {timeline.length}
        </h1>
        <div>
          <div className="py-10 flex flex-col gap-5">
            {timeline?.map((item , index) => (
            
                <div key={index}
                  className="bg-white shadow-sm  rounded-lg 
                px-5 py-5 space-y-5"
                >
                  <div
                    className="flex items-center  justify-between"
                  >
                    <div className="flex items-center gap-5 ">
                      <div
                        className="w-12 h-12 bg-white shadow-sm rounded-2xl 
                      flex items-center justify-center"
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h6 className="text-xl font-bold text-[#244D3F]">
                          {item.type}: {item.name}
                        </h6>
                        <p className="text-balance font-semibold ">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn bg-secondary text-white"
                      
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
