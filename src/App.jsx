import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import MainLayout from "./layouts/MainLayout";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
  });

  return (
    <main className="overflow-x-hidden">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <MainLayout />
        </div>
      </div>
    </main>
  );
}

export default App;