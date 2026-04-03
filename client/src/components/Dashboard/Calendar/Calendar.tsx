import { useEffect, useState } from "react";
import "./scss/Calendar.scss";
import Month from "./Month";

type VisitedDays = Record<number, Record<number, number[]>>;

const Calendar: React.FC = () => {
  const [visitedDays, setVisitedDays] = useState<VisitedDays>({});

  useEffect(() => {
    const data = {
      2026: {
        2: [1, 2, 3, 4, 10],
        3: [3],
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
        <Month month={nextMonth} year={nextYear} />
      </div>
    </div>
  );
};

export default Calendar;
