import React from "react";

const SummaryCard = () => {
  const summaryData = [
    {
      id: 1,
      item: "10",
      name: " Total Friends",
    },
    {
      id: 2,
      item: "3",
      name: "On Track",
    },
    {
      id: 3,
      item: "6",
      name: "Need Attention",
    },
    {
      id: 4,
      item: "12",
      name: "Interactions This Month",
    },
  ];

  return (
    <div className="container mx-auto">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
       items-center justify-center gap-3"
      >
        {summaryData.map((data) => (
          <>
            <div
              key={data.id}
              className="flex flex-col items-center justify-center
               border border-gray-100 space-y-2 py-4
                bg-white shadow-lg rounded-lg  transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-95 hover:bg-white  "
            >
              <h3 className="text-2xl text-[#244D3F] font-semibold" >{data.item}</h3>
              <p className="text-[#64748B]">{data.name}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
