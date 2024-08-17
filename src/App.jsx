import Nav from "./components/Nav";
import {
  Hero,
  Blog,
  Footer,
  CTA,
  CompaniesLogo,
  WhatIsGPT,
  Feature,
  CaseStudy,
} from "./sections";
const App = () => (
  <main className="relative bg-dark-blue">
    <Nav />
    <section className="xl:padding-1 wide:padding-r pb-2 xl:pl-16">
      <Hero />
    </section>
    <section className="padding-x ">
      <CompaniesLogo />
    </section>
    <section className="padding">
      <WhatIsGPT />
    </section>
    <section className="padding-t padding-x">
      <Feature />
    </section>
    <section className="padding-x">
      <CaseStudy />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <CTA />
    </section>
    <section className="padding-x padding-b">
      <Blog />
    </section>
    <section className="padding-x padding-t pb-4 bg-footer-blue">
      <Footer />
    </section>
  </main>
);

export default App;
