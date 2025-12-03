"use client";

import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const events = [
  {
    id: 1,
    title: "All Day Event very long title",
    time: "9:00 AM - 10:00 AM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    title: "All Day Event very long title",
    time: "9:00 AM - 10:00 AM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    title: "All Day Event very long title",
    time: "9:00 AM - 10:00 AM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-xl">
      <Calendar onChange={onChange} value={value} />

      <div className="flex justify-between items-center my-4">
        <h1 className="text-lg font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-labYellow p-4 rounded-md">
            <h1 className="text-sm font-semibold">{event.title}</h1>
            <h2 className="text-xs text-gray-500">{event.time}</h2>
            <p className="text-xs">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
