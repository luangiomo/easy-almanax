import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      accountsFilter: "Accounts doing the quest",
      levelFilter: "Level rewards",
      betweenNumbers: "to",
      sendFeedback: "Send Feedback",
      questDescription:
        "Start the quest at the Almanax temple by talking to the NPC Theodorant Ax in",
      botDescription: "Receive daily updates quickly and easily.",
      soon: "Soon",
      today: "Today",
      credits: {
        dev: "Developed by:",
        api: "Information collected from the API:",
      },
      months: {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
      },
      monthsShort: {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec",
      },
    },
  },
  pt: {
    translation: {
      accountsFilter: "Contas fazendo a missão",
      levelFilter: "Recompensas do nível",
      betweenNumbers: "a",
      sendFeedback: "Enviar Feedback",
      questDescription:
        "Começe a Missão no templo do Almanax falando com o NPC Theodorant Ax em",
      botDescription: "Receba atualizações diárias de forma rápida e prática.",
      soon: "Em breve",
      today: "Hoje",
      credits: {
        dev: "Desenvolvidor por:",
        api: "Information collected from the API:",
      },
      months: {
        "01": "Janeiro",
        "02": "Fevereiro",
        "03": "Março",
        "04": "Abril",
        "05": "Maio",
        "06": "Junho",
        "07": "Julho",
        "08": "Agosto",
        "09": "Setembro",
        "10": "Outubro",
        "11": "Novembro",
        "12": "Dezembro",
      },
      monthsShort: {
        "01": "Jan",
        "02": "Fev",
        "03": "Mar",
        "04": "Abr",
        "05": "Mai",
        "06": "Jun",
        "07": "Jul",
        "08": "Ago",
        "09": "Set",
        "10": "Out",
        "11": "Nov",
        "12": "Dez",
      },
    },
  },
  fr: {
    translation: {
      accountsFilter: "Comptes faisant la quête",
      levelFilter: "Récompenses du niveau",
      betweenNumbers: "à",
      sendFeedback: "Envoyer des Commentaires",
      questDescription:
        "Commencez la quetê au temple d'Almanax en parlant au PNJ Theodorant Ax à",
      botDescription:
        "Recevez des mises à jour quotidiennes rapidement et facilement.",
      soon: "Bientôt",
      today: "aujourd'hui",
      credits: {
        dev: "Développé par:",
        api: "Informations collectées depuis l'API:",
      },
      months: {
        "01": "Janvier",
        "02": "Février",
        "03": "Mars",
        "04": "Avril",
        "05": "Mai",
        "06": "Juin",
        "07": "Juillet",
        "08": "Août",
        "09": "Septembre",
        "10": "Octobre",
        "11": "Novembre",
        "12": "Décembre",
      },
      monthsShort: {
        "01": "Jan",
        "02": "Fév",
        "03": "Mar",
        "04": "Avr",
        "05": "Mai",
        "06": "Jun",
        "07": "Jui",
        "08": "Aoû",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Déc",
      },
    },
  },
  es: {
    translation: {
      accountsFilter: "Cuentas haciendo la misión",
      levelFilter: "Recompensas del nivel",
      betweenNumbers: "a",
      sendFeedback: "Enviar Comentarios",
      questDescription:
        "Comienza la misión en el templo de Almanax hablando con el NPC Theodorant Ax en",
      botDescription:
        "Recibe actualizaciones diarias de forma rápida y práctica.",
      soon: "Pronto",
      today: "hoy",
      credits: {
        dev: "Desarrollado por:",
        api: "Información recopilada de la API:",
      },
      months: {
        "01": "Enero",
        "02": "Febrero",
        "03": "Marzo",
        "04": "Abril",
        "05": "Mayo",
        "06": "Junio",
        "07": "Julio",
        "08": "Agosto",
        "09": "Septiembre",
        "10": "Octubre",
        "11": "Noviembre",
        "12": "Diciembre",
      },
      monthsShort: {
        "01": "Ene",
        "02": "Feb",
        "03": "Mar",
        "04": "Abr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Ago",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dic",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "pt", "fr", "es"],
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
