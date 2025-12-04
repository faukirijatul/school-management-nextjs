import React from "react";

const Pagination = () => {
  return (
    <div className="p-4 flex justify-between items-center text-gray-500">
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-75 disabled:cursor-not-allowed">
        Prev
      </button>

      <div className="flex gap-1">
        <button className="py-2 px-4 rounded-md bg-labSky text-xs font-semibold">1</button>
        <button className="py-2 px-2 rounded-md text-xs font-semibold">2</button>
        <button className="py-2 px-2 rounded-md text-xs font-semibold">3</button>
        <span>. . .</span>
        <button className="py-2 px-2 rounded-md text-xs font-semibold">10</button>
      </div>

      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-75 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
