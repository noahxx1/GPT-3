import { introduction } from "../constants";

const WhatIsGPT = () => {
  return (
    <section
      id="What-is-gpt"
      className="text-white flex flex-col max-container font-manrope bg-[#042C54]"
    >
      <div className="flex p-14 flex-col xl:flex-row">
        <h3 className="w-full font-bold text-2xl text-white max-sm:mb-8 md:mb-8 ">
          What is GPT-3
        </h3>
        <p className="text-light-blue">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="flex justify-between flex-col xl:flex-row items-center p-14 md:flex-row">
        <h2 className="font-bold text-3xl master-color w-[35%] max-sm:w-full max-sm:mb-8 md:mb-8">
          The possibilities are beyond your imagination
        </h2>
        <p className="text-light-orange ">Explore The Library</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-14 gap-8 ">
        {introduction.map((intro, index) => (
          <div key={index}>
            <h3 className="w-full font-bold text-2xl text-white mb-10">
              {intro.label}
            </h3>
            <p className="text-light-blue max-sm:mb-5">{intro.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIsGPT;
