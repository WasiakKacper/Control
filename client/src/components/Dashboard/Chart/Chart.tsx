import "./scss/Chart.scss";
import { useTrackerContext } from "../../../hooks/useTrackerContext";

type ChartProps = {
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
};

const Chart: React.FC<ChartProps> = ({
  size = 140,
  strokeWidth = 10,
  color = "#fff",
  bgColor = "#B9B9B9",
}) => {
  const { completionPercentage } = useTrackerContext();

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (completionPercentage / 100) * circumference;

  return (
    <div className="chartContainer">
      <svg width={size} height={size}>
        <circle
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>

      {/* procent w środku */}
      <div className="value">{completionPercentage}%</div>
    </div>
  );
};

export default Chart;
