const AppShowcase = () => {
  return (
    <div className="container mx-auto flex flex-col items-center -mt-52 sm:-mt-48 md:-mt-44 lg:-mt-48 justify-center">
      <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 md:mt-20 gap-4 mt-20 w-fit items-end">
        <img
          src="/images/CoustomerService/Frame 390.svg"
          alt="Dashboard"
          className="w-full lg:w-52 min-h-52 max-h-64 !object-cover rounded-2xl"
        />
        <img
          src="/images/CoustomerService/Frame 388.svg"
          alt="Dashboard"
          className="w-full lg:w-52  min-h-64 max-h-72 !object-cover rounded-2xl"
        />
        <img
          src="/images/CoustomerService/Frame 390.svg"
          alt="Dashboard"
          className="w-full lg:w-52  min-h-52 max-h-64 !object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default AppShowcase;
