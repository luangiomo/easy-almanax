import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  const languages = [
    {
      nativeName: "English",
      code: "en",
    },
    {
      nativeName: "Português",
      code: "pt",
    },
    {
      nativeName: "Français",
      code: "fr",
    },
    {
      nativeName: "Español",
      code: "es",
    },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-[#212121] z-10 flex items-center justify-center border-b border-[#303030]">
      <div className="w-full xl:max-w-7xl px-4 md:px-6 flex justify-between items-center ">
        <a href="/" className="leading-[64px]">
          <span className="text-lg font-bold text-white">easy</span>
          <span className="text-lg font-black text-rose-600">Almanax</span>
        </a>
        <nav className="flex">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfp3q0BtmAsU9q1ybQFWyzTuaozz_5TROK3LnyZaHeviKJSxQ/viewform"
            target="_blank"
            className="leading-[64px] text-sm text-neutral-50 font-medium px-3 hover:text-rose-600"
          >
            <span>{t("sendFeedback")}</span>
          </a>
          <button
            className="leading-[64px] relative cursor-pointer group flex items-center"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onTouchStart={() => setShow(true)}
            onTouchCancel={() => setShow(false)}
          >
            <span className="mr-3 h-6 border-r border-r-white"></span>
            <div className="flex gap-1 items-center">
              <span className="material-symbols-outlined text-base text-neutral-50  group-hover:text-rose-600">
                translate
              </span>
              <span className="material-symbols-outlined text-sm text-neutral-50 group-hover:text-rose-600">
                keyboard_arrow_down
              </span>
            </div>
            <ul
              className={`absolute rounded-xl p-3 bg-[#262626] border border-[#303030] right-0 top-12 text-left shadow-2xl ${
                show ? "block" : "hidden"
              }`}
            >
              {languages.map((lang) => (
                <div
                  className="group/lang rounded-md hover:bg-[#2b2b2b] border border-transparent hover:border-[#303030]"
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                  }}
                >
                  <a href={`/${lang.code}`}>
                    <li
                      className={`px-3 text-sm leading-loose cursor-pointer  ${
                        i18n.resolvedLanguage === lang.code
                          ? "text-rose-600 group-hover/lang:text-rose-600"
                          : "text-[#A6A6A6] group-hover/lang:text-white"
                      }`}
                    >
                      {lang.nativeName}
                    </li>
                  </a>
                </div>
              ))}
            </ul>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
