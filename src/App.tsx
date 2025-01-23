import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import { OfferingContextProvider } from "./contexts/OfferingContext";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {
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
