import OfferingList from "../OfferingList";

function MainColumn() {
  return (
    <main className="md:row-start-1 lg:col-span-12 flex flex-col gap-2">
      <OfferingList />
    </main>
  );
}
export default MainColumn;
