import { useQueries } from "@tanstack/react-query";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { getAlmanaxOfferByDate } from "../api/offers";
import { OfferingContext } from "../contexts/OfferingContext";
import { getDaysInMonth } from "../utils/getDaysInMonth";
import { getParisTime } from "../utils/getParisTime";
import Skeleton from "./Skeleton";
import Card from "./ui/Card";
import { formatDate } from "../utils/formatDate";

function OfferingList() {
  const { t, i18n } = useTranslation();

  const { currentMonth, userSettings } = useContext(OfferingContext);
  const { month, day, year } = getParisTime(); // [12,31,24]
  const today = `${month}/${day}/${year}`;

  const daysInMonth = getDaysInMonth(currentMonth, year); // [01,02,03,....,30,31]
  const offerQueries = useQueries({
    queries: daysInMonth.map((days) => {
      return {
        queryKey: ["offer", `${currentMonth}/${days}/${year}`],
        queryFn: () => getAlmanaxOfferByDate(currentMonth, days, year),
      };
    }),
  });

  const [{ status, error }] = offerQueries;

  if (status === "pending") {
    return <Skeleton />;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  if (status === "success") {
    // scrollToTodayItem();
  }

  return (
    <Card isNoPadding>
      <ol className="flex flex-col">
        {offerQueries.map((offer, index) => (
          <li
            className={`flex py-4 border-b border-b-[#303030] last:border-none scroll-mt-20 ${
              offer.data?.date === today && "bg-[#303030]"
            }
            ${
              offer.data?.date.split("/")[0] === today.split("/")[0]
                ? offer.data?.date.split("/")[1] < today.split("/")[1] &&
                  ` hidden pointer-events-none select-none`
                : null
            }`}
            key={index}
            id={offer.data?.date}
          >
            <div className="flex flex-col px-3 items-center justify-between gap-8">
              <div className="w-16 h-16 relative">
                <img
                  className="w-full"
                  src={offer.data?.item.imageURL}
                  alt={offer.data?.item.name}
                />
                <span className="absolute bg-[#212121] text-sm text-neutral-50 font-bold px-1 py-0.5 right-0 bottom-0 translate-y-full">
                  {userSettings.accounts > 1 ? (
                    <span>
                      {offer.data?.quantity}{" "}
                      <span className="text-xs font-medium text-[#A6A6A6]">
                        ({offer.data?.quantity * userSettings.accounts})
                      </span>
                    </span>
                  ) : (
                    offer.data?.quantity
                  )}
                </span>
              </div>
              {offer.data?.date === today && (
                <span className="relative w-fit text-[10px] py-0.5 px-1 inline-block uppercase font-bold rounded whitespace-nowrap text-white bg-rose-600">
                  {t("today")}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col px-3 justify-between">
              <span className="flex gap-4 justify-between mb-3">
                <h2 className="text-sm text-neutral-50 font-semibold">
                  {
                    offer.data?.item.name[
                      i18n.resolvedLanguage ? i18n.resolvedLanguage : "en"
                    ]
                  }
                </h2>
                <h2 className="text-sm text-[#A6A6A6] font-semibold mr-2">
                  {formatDate(
                    offer.data?.date,
                    i18n.resolvedLanguage ? i18n.resolvedLanguage : "en"
                  )}
                </h2>
                {/* <span className="w-fit text-[10px] py-0.5 px-1 inline-block uppercase font-bold rounded whitespace-nowrap text-green-800 bg-green-300">
            Copiado!
          </span> */}
              </span>
              <span className="mb-4">
                <h3 className="text-xs text-[#a6a6a6] mb-1">
                  Bônus -{" "}
                  <strong className="font-bold">
                    {
                      offer.data?.bonus.name[
                        i18n.resolvedLanguage ? i18n.resolvedLanguage : "en"
                      ]
                    }
                    :
                  </strong>
                </h3>
                <p
                  className="text-xs text-neutral-50 leading-relaxed break-words mr-2"
                  dangerouslySetInnerHTML={{
                    __html: offer.data?.bonus.desc[
                      i18n.resolvedLanguage ? i18n.resolvedLanguage : "en"
                    ].replace(/\{\{monsterRace,\d+::(.*?)\}\}/g, "$1"),
                  }}
                ></p>
              </span>
              <span className="flex gap-3">
                <h3 className="text-xs text-[#a6a6a6]">
                  {offer.data?.rewards.kamas}{" "}
                  <strong className="font-bold">₭</strong>
                </h3>
                <h3 className="text-xs text-[#a6a6a6]">
                  {offer.data?.rewards.xp[userSettings.level]}{" "}
                  <strong className="font-bold italic">XP</strong>
                </h3>
                <h3 className="text-xs text-[#a6a6a6]">
                  {
                    offer.data?.rewards.almatokens[userSettings.level]
                      .itemsReward[0][1]
                  }
                  x <strong className="font-bold">Almaficha</strong>
                </h3>
              </span>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}

export default OfferingList;
