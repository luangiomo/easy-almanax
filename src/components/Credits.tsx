import { useTranslation } from "react-i18next";

function Credits() {
  const { t } = useTranslation();
  return (
    <footer>
      <p className="text-xs text-right">
        {t("credits.dev")}{" "}
        <a
          className="underline hover:text-blue-600"
          href="https://github.com/luangiomo"
          target="_blank"
        >
          Luan Giomo (Dlenk)
        </a>
        <br />
        {t("credits.api")}{" "}
        <a
          className="underline hover:text-blue-600"
          href="https://dofusdb.fr/fr/"
          target="_blank"
        >
          Dofus DB
        </a>
      </p>
    </footer>
  );
}

export default Credits;
