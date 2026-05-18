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
      <About id="about"/>
      <WhatIDo id="what-i-do"/>
      <SelectedWork id="selected-work"/>
      <ClientWork id="client-work"/>
      <WhatIBuild id="what-i-build"/>
      <Contact id="contact"/>
    </>
  );
};

export default MainLayout;


