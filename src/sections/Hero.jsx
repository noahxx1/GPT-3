import { headerIllustration } from "../assets/images";
import { users } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="xl:flex-row flex-col w-full">
      <div className=" max-container flex flex-1 flex-col xl:flex-row items-center justify-center min-h-screen relative w-full max-xl:padding-x pt-16 ">
        <div className="relative flex flex-col justify-center gap-8 m-10 xl:m-0">
          <h1 className="font-manrope text-6xl font-extrabold master-color leading-[75px] ">
            Let's Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="font-manrope text-light-blue leading-[27.32px] ">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="flex items-center font-manrope">
            <input
              className="outline-none w-[50%] xl:w-[60%] bg-[#052D56] p-4 rounded-l text-white"
              type="text"
              placeholder="Your Email Address"
            />
            <button className="text-white w-[40%] xl:w-[25%] bg-coral-red p-4 rounded-r">
              Get Started
            </button>
          </div>
          <div className="flex justify-start gap-3 items-center flex-1 relative">
            <div className="flex justify-center relative">
              {users.map((user, index) => (
                <div
                  className="absolute -top-4 w-[36px] h-[36px]"
                  key={index}
                  style={{ left: index * 25 }}
                >
                  <img
                    src={user.profile}
                    alt="Users"
                    className="w-full h-full"
                  />
                </div>
              ))}
              <div className="bg-light-cyan size-9 rounded-full absolute -top-4 left-[150px] border-[2px] border-white flex justify-center items-center font-manrope text-[8px] font-extrabold">
                1.6k+
              </div>
            </div>
            <p className="text-white text-[12px] ml-48">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <img
          src={headerIllustration}
          alt="Header Illustration"
          width={667.41}
          height={701.59}
          className=""
        />
      </div>
    </section>
  );
};

export default Hero;
