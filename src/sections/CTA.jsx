const CTA = () => {
  return (
    <section className="max-container flex flex-col xl:flex-row justify-between items-center master-color-2 rounded-lg p-12 font-manrope font-bold">
      <div className="flex flex-col gap-4">
        <p className="text-[12px]">Request Early Access to Get Started</p>
        <h1 className="text-2xl font-extrabold">
          Register today & start exploring the endless possiblities.
        </h1>
      </div>
      <button className="text-white bg-black rounded-full max-sm:mt-6 px-8 py-3 xl:px-10 md:mt-4 w-fit xl:py-4">
        Get Started
      </button>
    </section>
  );
};

export default CTA;
