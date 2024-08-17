import { footerLogo } from "../assets/images";
import { footerLinks } from "../constants";

export const Footer = () => {
  return (
    <footer>
      <div className="max-container flex flex-col">
        <div className="flex flex-col justify-center items-center mt-16 gap-20 font-manrope mb-20 ">
          <h3 className="lg:text-6xl text-4xl leading-[50px] lg:leading-[75px] lg:max-w-[821px]  text-center master-color font-bold ">
            Do you want to step in to the future before others
          </h3>
          <button className="text-white border-white border-2 p-5 text-[18px] mb-10">
            Request Early Access
          </button>
        </div>
        <div className="flex justify-evenly max-sm:flex-col max-sm:items-center ">
          <div>
            <img
              src={footerLogo}
              alt="img"
              width={118}
              height={30}
              className="mb-5"
            />
            <p className="w-[168px] text-white text-[12px] max-sm:mb-8">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="flex justify-center gap-32 max-sm:gap-12 text-white flex-wrap">
            {footerLinks.map((data, index) => (
              <div key={index}>
                <p className="font-bold mb-6">{data.title}</p>
                <ul className="flex flex-col gap-4 mb-20">
                  {data.links.map((link) => (
                    <li key={link.name}>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-white text-base self-center mt-">
          © 2021 GPT-3. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};
