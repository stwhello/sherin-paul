import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import SelectedWork from "../sections/SelectedWork/SelectedWork";
import ClientWork from "../sections/ClientWork/ClientWork";
import WhatIBuild from "../sections/WhatIBuild/WhatIBuild";
import Contact from "../sections/Contact/Contact";
import WhatIDo from "../sections/WhatIDo/WhatIDo";

const MainLayout = () => {
  return (
    <>
      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="what-i-do">
        <WhatIDo />
      </section>

      <section id="selected-work">
        <SelectedWork />
      </section>

      <section id="client-work">
        <ClientWork />
      </section>

      <section id="what-i-build">
        <WhatIBuild />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default MainLayout;