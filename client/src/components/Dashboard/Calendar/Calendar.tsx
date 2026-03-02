import { useEffect, useState } from "react";

/* Import scss */
import "./scss/Calendar.scss";

/* Import type */
import type { MonthProps, VisitedDays } from "../../Types/Types.tsx";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysNames = ["M", "T", "W", "T", "F", "S", "S"];

const daysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const Month: React.FC<MonthProps> = ({ month, year, visitedDays = [] }) => {
  const days = daysInMonth(month, year);

  return (
    <div className="monthContainer">
      <h4>{months[month]}</h4>
      <div className="daysNames">
        {daysNames.map((day, i) => (
          <p key={i}>{day}</p>
        ))}
      </div>
      <div className="daysGrid">
        {Array.from({ length: days }, (_, i) => {
          const dayNumber = i + 1;
          const isVisited = visitedDays.includes(dayNumber);

          return (
            <div key={i} className={`day ${isVisited ? "checked" : ""}`}></div>
          );
        })}
      </div>
    </div>
  );
};

const Calendar: React.FC = () => {
  const [visitedDays, setVisitedDays] = useState<VisitedDays>({});

  useEffect(() => {
    //fetch
    const data: VisitedDays = {
      2025: {
        10: [1, 5, 10],
        11: [25, 31],
      },
    };
    setVisitedDays(data);
  }, []);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  return (
    <div className="calendarContainer">
      <div className="monthsContainer">
        <Month
          month={prevMonth}
          year={prevYear}
          visitedDays={visitedDays[prevYear]?.[prevMonth] || []}
        />
        <Month
          month={currentMonth}
          year={currentYear}
          visitedDays={visitedDays[currentYear]?.[currentMonth] || []}
        />
        <Month
          month={nextMonth}
          year={nextYear}
          visitedDays={visitedDays[nextYear]?.[nextMonth] || []}
        />
      </div>
    </div>
  );
};

export default Calendar;
