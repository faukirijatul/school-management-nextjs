import React from "react";

const data = [
  {
    title: "All Day Event very long title",
    date: "10-10-2025",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "All Day Event very long title",
    date: "10-10-2025",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "All Day Event very long title",
    date: "10-10-2025",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Annnouncements</h1>
        <span className="text-sm text-gray-500 cursor-pointer">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {data.map((announcement) => (
          <div
            key={announcement.title}
            className="bg-labSkyLight p-4 rounded-md"
          >
            <h1 className="text-sm font-semibold">{announcement.title}</h1>
            <h2 className="text-xs text-gray-500">{announcement.date}</h2>
            <p className="text-xs">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
