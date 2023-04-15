import { useState } from "react";
import LinearChart from "./LinearChart";
import ChartWrapper from "../assets/wrappers/ChartFooter";

const options = [
  { id: 1, name: "Daily" },
  { id: 2, name: "Weekly" },
  { id: 3, name: "Monthly" },
];

const Chart: React.FC = () => {
  const [selected, useSelected] = useState("Daily");
  return (
    <ChartWrapper>
      <div className='chart-option-wrapper'>
        {options.map((option) => {
          return (
            <button
              className={`chart-option ${
                option.name === selected ? "active" : ""
              }`}
              onClick={() => useSelected(option.name)}
              key={option.id}
            >
              {option.name}
            </button>
          );
        })}
      </div>
      <LinearChart />
    </ChartWrapper>
  );
};

export default Chart;
