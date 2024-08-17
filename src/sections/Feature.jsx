import { features } from "../constants";

const Feature = () => {
  return (
    <section
      id="open-ai"
      className="gap-20 flex max-sm:flex-col max-container font-manrope font-extrabold "
    >
      <div>
        <h1 className="master-color text-3xl mb-8 leading-[45px]">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="text-light-orange">Request Early Access to Get Started</p>
      </div>
      <div className="flex flex-col ">
        {features.map((feature, index) => (
          <div key={index}>
            <h2 className="text-[18px] mb-8 text-white">{feature.label}</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col max-sm:hidden max-md:hidden">
        {features.map((feature, index) => (
          <div key={index}>
            <p className="text-[14px] mb-8 text-light-blue font-light">
              {feature.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
