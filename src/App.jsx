import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import MainLayout from "./layouts/MainLayout";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const smootherRef = useRef(null);

  useGSAP(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1
    });

    ScrollTrigger.normalizeScroll(true);

    return () => smootherRef.current?.kill();
  }, []);

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