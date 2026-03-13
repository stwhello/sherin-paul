import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import SelectedWork from "../sections/SelectedWork/SelectedWork";
import ClientWork from "../sections/ClientWork/ClientWork";
import WhatIBuild from "../sections/WhatIBuild/WhatIBuild";
import Contact from "../sections/Contact/Contact";

const MainLayout = () => {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <ClientWork />
      <WhatIBuild />
      <Contact />
    </>
  );
};

export default MainLayout;