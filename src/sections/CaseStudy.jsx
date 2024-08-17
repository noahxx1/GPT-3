import { featureImage } from "../assets/images";

const CaseStudy = () => {
  return (
    <section
      id="case-studies"
      className="max-container gap-6 flex justify-center items-end flex-col xl:flex-row max-md:items-center "
    >
      <img
        src={featureImage}
        alt="features"
        width={546}
        height={607.53}
        className=" max-sm:w-full"
      />
      <div className="w-[480px] font-manrope flex flex-col gap-6 max-sm:w-full mb-12 ">
        <p className="text-[#71E5FF] ">Request Early Access to Get Started</p>
        <h2 className="text-[34px] leading-[45px] master-color font-extrabold ">
          The possibilities are beyond your imagination
        </h2>
        <p className="text-light-blue leading-7">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="text-light-orange">Request Early Access to Get Started</p>
      </div>
    </section>
  );
};

export default CaseStudy;
