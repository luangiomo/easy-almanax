import { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { OfferingContext } from "../../contexts/OfferingContext";
import { useWindowSize } from "../../hooks/useWindowSize";
import { getParisTime } from "../../utils/getParisTime";
import Calendar from "../Calendar";
import Filters from "../Filters";
import Card from "../ui/Card";

function SideColumn() {
  const { t } = useTranslation();
  const { year } = getParisTime();
  const [windowWidth] = useWindowSize();
  const { currentMonth } = useContext(OfferingContext);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const closeModal = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };
  return (
    <div className="md:w-56 md:sticky">
      <div className="sticky top-20 flex flex-col gap-2">
        {windowWidth < 768 ? (
          <>
            <dialog
              ref={dialogRef}
              className="bg-transparent backdrop:bg-black/85 overflow-visible"
            >
              <div className=" relative flex flex-col gap-3">
                <Calendar />
                <Filters />
                <button
                  className="translate-x-2 -translate-y-2 right-0 absolute cursor-pointer w-6 h-6 flex justify-center items-center text-xs border border-[#303030] rounded-full text-center font-semibold uppercase hover:bg-[#212121] text-rose-600  bg-[#2B2B2B]"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
            </dialog>
            <button
              onClick={() => {
                dialogRef.current?.showModal();
                document.body.style.overflow = "hidden";
                dialogRef.current?.addEventListener("close", closeModal);
                return () => {
                  dialogRef.current?.removeEventListener("close", closeModal);
                };
              }}
            >
              <Card isNoPadding>
                <div className="flex gap-1 w-full">
                  <button
                    className={`flex gap-2 justify-left justify-between items-center w-full text-[#8E8E8E] bg-[#2B2B2B] hover:text-white hover:bg-[#212121] cursor-pointer px-4 py-1 text-sm text-left border border-[#303030] font-semibold uppercase`}
                  >
                    <span className="text-inherit">
                      {`${t(`months.${currentMonth}`)}, ${"20" + year}`}{" "}
                      <span className="material-symbols-outlined text-sm">
                        keyboard_arrow_down
                      </span>
                    </span>
                    <span className="material-symbols-outlined text-base">
                      filter_alt
                    </span>
                  </button>
                </div>
              </Card>
            </button>
          </>
        ) : (
          <>
            <Calendar />
            <Filters />
          </>
        )}
      </div>
    </div>
  );
}

export default SideColumn;
