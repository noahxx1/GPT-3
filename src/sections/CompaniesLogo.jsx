import { companyLogo } from "../constants";

const CompaniesLogo = () => {
  return (
    <section className="max-container">
      <div className="flex justify-center items-center gap-4 xl:gap-12 mt-6">
        {companyLogo.map((icon, index) => (
          <div key={index}>
            <img src={icon.logo} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesLogo;
