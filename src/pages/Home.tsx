import AsideColumn from "../components/columns/AsideColumn";
import MainColumn from "../components/columns/MainColumn";
import SideColumn from "../components/columns/SideColumn";

function Home() {
  return (
    <main className="xl:w-full mt-16">
      <div className="grid grid-flow-row md:grid-flow-col md:auto-cols-auto mx-auto w-full xl:max-w-7xl px-4 md:px-6 gap-4 md:gap-6 py-4">
        <SideColumn />
        <MainColumn />
        <AsideColumn />
      </div>
    </main>
  );
}

export default Home;
