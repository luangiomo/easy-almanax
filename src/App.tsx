import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import { OfferingContextProvider } from "./contexts/OfferingContext";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient();

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const path = window.location.pathname.replace("/", ""); // Get the langueage in the path ex: pt,en,fr,es
    if (path === "pt" || path === "en" || path === "fr" || path === "es") {
      i18n.changeLanguage(path);
      return;
    }
    i18n.changeLanguage("en");
    window.location.href = `/en`;
  }, [i18n]);

  return (
    <>
      <Header />
      <OfferingContextProvider>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </OfferingContextProvider>
    </>
  );
}

export default App;
