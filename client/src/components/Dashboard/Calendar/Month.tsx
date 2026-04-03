type MonthsType = {
  month: number;
  year: number;
  visitedDays?: number[];
};

const months: string[] = [
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

const daysNames: string[] = ["M", "T", "W", "T", "F", "S", "S"];

const daysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const Month: React.FC<MonthsType> = ({ month, year, visitedDays = [] }) => {
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

export default Month;
