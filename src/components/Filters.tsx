import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { OfferingContext } from "../contexts/OfferingContext";
import Card from "./ui/Card";

function Filters() {
  const { t } = useTranslation();
  const { userSettings, setUserSettings } = useContext(OfferingContext);

  const levelScalling = [
    {
      minLevel: 9,
      maxLevel: 29,
    },
    {
      minLevel: 30,
      maxLevel: 49,
    },
    {
      minLevel: 40,
      maxLevel: 69,
    },
    {
      minLevel: 70,
      maxLevel: 89,
    },
    {
      minLevel: 90,
      maxLevel: 109,
    },
    {
      minLevel: 110,
      maxLevel: 129,
    },
    {
      minLevel: 130,
      maxLevel: 149,
    },
    {
      minLevel: 150,
      maxLevel: 169,
    },
    {
      minLevel: 170,
      maxLevel: 189,
    },
    {
      minLevel: 190,
      maxLevel: 200,
    },
  ];

  return (
    <Card>
      <div className="flex flex-col gap-3">
        <span>
          <label htmlFor="accounts" className="text-xs mb-1">
            {t("accountsFilter")}:
          </label>
          <div className="flex">
            <button
              className={`w-11 disabled:opacity-45 disabled:hover:bg-[#2B2B2B] rounded-s disabled:hover:text-[#8E8E8E] disabled:cursor-not-allowed select-none text-[#8E8E8E] bg-[#2B2B2B]  hover:text-white hover:bg-[#212121] cursor-pointer px-4 py-1 text-xs border border-[#303030] text-center font-semibold uppercase`}
              disabled={userSettings.accounts <= 1}
              onClick={() => {
                setUserSettings({
                  ...userSettings,
                  accounts: userSettings.accounts - 1,
                });
              }}
            >
              -
            </button>
            <input
              type="text"
              value={userSettings.accounts}
              disabled={true}
              className="select-none w-full text-xs py-1 bg-[#212121] text-white border border-[#303030] text-center"
            />
            <button
              className={`w-11 disabled:opacity-45 rounded-e disabled:hover:bg-[#2B2B2B] disabled:hover:text-[#8E8E8E] disabled:cursor-not-allowed select-none text-[#8E8E8E] bg-[#2B2B2B]  hover:text-white hover:bg-[#212121] cursor-pointer px-4 py-1 text-xs border border-[#303030] text-center font-semibold uppercase`}
              disabled={userSettings.accounts >= 25}
              onClick={() => {
                setUserSettings({
                  ...userSettings,
                  accounts: userSettings.accounts + 1,
                });
              }}
            >
              +
            </button>
          </div>
        </span>
        <span>
          <label
            htmlFor="level"
            className="w-full text-xs mb-1 group-hover:text-white cursor-pointer"
          >
            {t("levelFilter")}:
          </label>
          <select
            name="select"
            id="level"
            className="w-full text-xs px-3 py-1 rounded bg-[#212121] text-white border border-[#303030] hover:border-white cursor-pointer"
            value={userSettings.level}
            onChange={(event) => {
              setUserSettings({
                ...userSettings,
                level: Number(event.target.value),
              });
            }}
          >
            {levelScalling.map((level, index) => (
              <option value={index} key={index}>{`${level.minLevel} ${t(
                "betweenNumbers"
              )} ${level.maxLevel}`}</option>
            ))}
          </select>
        </span>
      </div>
    </Card>
  );
}

export default Filters;
