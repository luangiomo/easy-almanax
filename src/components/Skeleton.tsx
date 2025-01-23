function Skeleton() {
  return (
    <div className="w-full flex flex-col gap-6">
      {[...Array(3)].map((_, index) => (
        <div className="flex gap-4 pb-4 animate-pulse" key={index}>
          <div className="h-16 w-16 rounded-sm bg-[#303030]"></div>
          <div className="flex flex-col flex-grow gap-3 px-4">
            <>
              <div className="h-5 rounded-sm w-4/5 bg-[#303030]"></div>
              <div className="h-10 rounded-sm w-full bg-[#303030]"></div>
              <div className="h-5 rounded-sm w-3/5 bg-[#303030]"></div>
            </>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
