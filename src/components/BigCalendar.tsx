"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const myEventsList = [
  {
    title: "English - Daily Stand-up Practice",
    start: new Date(2025, 11, 1, 8, 0), // Senin, 1 Des 2025 → 08:00-09:00
    end: new Date(2025, 11, 1, 9, 0),
  },
  {
    title: "English - Giving & Receiving Feedback",
    start: new Date(2025, 11, 1, 13, 0), // Senin → 13:00-14:00
    end: new Date(2025, 11, 1, 14, 0),
  },
  {
    title: "English - Sprint Planning Vocabulary",
    start: new Date(2025, 11, 2, 9, 0), // Selasa, 2 Des → 09:00-10:00
    end: new Date(2025, 11, 2, 10, 0),
  },
  {
    title: "English - Code Review Role-play",
    start: new Date(2025, 11, 2, 14, 0), // Selasa → 14:00-15:00
    end: new Date(2025, 11, 2, 15, 0),
  },
  {
    title: "English - Blocking & Unblocking Issues",
    start: new Date(2025, 11, 3, 8, 30), // Rabu, 3 Des → 08:30-09:30
    end: new Date(2025, 11, 3, 9, 30),
  },
  {
    title: "English - Retrospective Meeting",
    start: new Date(2025, 11, 3, 11, 0), // Rabu → 11:00-12:00
    end: new Date(2025, 11, 3, 12, 0),
  },
  {
    title: "English - Presenting Updates to Stakeholders",
    start: new Date(2025, 11, 4, 10, 0), // Kamis, 4 Des → 10:00-11:00
    end: new Date(2025, 11, 4, 11, 0),
  },
  {
    title: "English - Professional Email & Slack Writing",
    start: new Date(2025, 11, 4, 14, 30), // Kamis → 14:30-15:30 (masih selesai sebelum 15.00 WIB)
    end: new Date(2025, 11, 4, 15, 30),
  },
  {
    title: "English - One-on-One with Manager",
    start: new Date(2025, 11, 5, 8, 0), // Jumat, 5 Des → 08:00-09:00
    end: new Date(2025, 11, 5, 9, 0),
  },
  {
    title: "English - Coffee Chat & Workplace Small Talk",
    start: new Date(2025, 11, 5, 12, 0), // Jumat → 12:00–13:00
    end: new Date(2025, 11, 5, 13, 0),
  },
];

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleViewChange = (view: View) => {
    setView(view);
  };

  return (
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleViewChange}
      min={new Date(2025, 1, 0, 8, 0)}
      max={new Date(2025, 1, 0, 17, 0)}
    />
  );
};

export default BigCalendar;
