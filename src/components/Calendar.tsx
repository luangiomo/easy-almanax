import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { OfferingContext } from "../contexts/OfferingContext";
import { getParisTime } from "../utils/getParisTime";
import Card from "./ui/Card";

function Calendar() {
  const { t } = useTranslation();
  const { month, year } = getParisTime();

  const { currentMonth, setCurrentMonth } = useContext(OfferingContext);

  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  return (
    <Card>
      <header className="flex justify-between items-center mb-2">
        <button
          disabled={Number(month) < 12}
          className="px-3 py-1 rounded text-white hover:bg-[#2B2B2B] font-semibold cursor-pointer disabled:text-[#8E8E8E] disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-25"
        >
          {"<"}
        </button>
        <span className="text-xs text-white font-semibold">{"20" + year}</span>
        <button
          disabled={Number(month) < 12}
          className="px-3 py-1 rounded text-white hover:bg-[#2B2B2B] font-semibold cursor-pointer disabled:text-[#8E8E8E] disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-25"
        >
          {">"}
        </button>
      </header>
      <div className="grid grid-cols-3 grid-rows-4 gap-1">
        {months.map((month) => (
          <button
            className={`cursor-pointer px-3 py-1 text-xs border border-[#303030] rounded text-center font-semibold uppercase hover:bg-[#212121] ${
              month === currentMonth
                ? "text-white bg-[#212121]"
                : "text-[#8E8E8E] bg-[#2B2B2B]"
            }`}
            onClick={() => {
              setCurrentMonth(month);
            }}
            key={month}
          >
            {t(`monthsShort.${month}`)}
          </button>
        ))}
      </div>
    </Card>
  );
}

export default Calendar;
