import { useTranslation } from "react-i18next";
import wppIcon from "../../assets/whatsapp-icon.png";
import Card from "../ui/Card";
import Credits from "../Credits";

function AsideColumn() {
  const { t } = useTranslation();

  return (
    <aside className="md:row-start-2 lg:col-auto lg:row-auto lg:w-56 xl:w-80 lg:sticky">
      <div className="flex sticky top-20 flex-col gap-2">
        <Card>
          <div className="flex flex-row items-center lg:items-start lg:flex-col xl:flex-row gap-3">
            <img className="w-8 h-8" src={wppIcon} alt="WhatsApp Icon" />
            <div className="flex-grow">
              <div className="flex flex-row lg:flex-col xl:flex-row gap-1 items-start  justify-between xl:items-center">
                <h1 className="text-sm text-neutral-50 font-semibold">
                  EasyAlamanaxBot
                </h1>
                <span className="h-fit w-fit text-[10px] py-0.5 px-1 inline-block uppercase font-bold rounded whitespace-nowrap text-white bg-neutral-600">
                  {t("soon")}
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed break-words">
                {t("botDescription")}
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <p className="text-xs leading-relaxed break-words">
            {t("questDescription")}{" "}
            <span className="font-bold text-white">{"[-4,-24]"}</span>
          </p>
        </Card>
        <Credits />
      </div>
    </aside>
  );
}

export default AsideColumn;
