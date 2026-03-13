import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import aboutImg from "../../assets/about.png";
import arrow from "../../assets/arrow.png";

const About = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
    });

    tl.from(".about-image", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(".about-heading", { y: 60, opacity: 0 }, "-=0.4")
      .from(".about-text", { y: 40, opacity: 0 }, "-=0.3")
      .from(
        ".about-tag",
        {
          scale: 0,
          opacity: 0,
          stagger: 0.15,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .from(".about-arrow", { rotate: -200, opacity: 0 }, "-=0.5");
  });

  return (
    <section ref={container} className="container-page mt-40">

      {/* CARD */}
      <div className="relative bg-[#F2AEBD] rounded-t-[50px] min-h-[500px] flex items-center">

        {/* IMAGE (ABSOLUTE BLEED) */}
        <div
          className="absolute left-0 bottom-0"
          style={{ width: "clamp(260px, 32vw, 520px)" }}
        >
          <img
            src={aboutImg}
            alt="Sherin"
            className="about-image w-full"
          />

          {/* TAGS */}

          <div
            className="about-tag absolute bg-[#6C0820] text-white rounded-full"
            style={{
              left: "45%",
              top: "35%",
              fontSize: "clamp(10px,0.9vw,14px)",
              padding: "6px 20px",
            }}
          >
            Full Stack Developer
          </div>

          <div
            className="about-tag absolute bg-[#F2AEBD] text-[#6C0820] rounded-full"
            style={{
              left: "20%",
              top: "50%",
              fontSize: "clamp(10px,0.9vw,14px)",
              padding: "6px 20px",
            }}
          >
            Wordpress Developer
          </div>

          <div
            className="about-tag absolute bg-[#F2AEBD] text-[#6C0820] rounded-full"
            style={{
              left: "8%",
              bottom: "20%",
              fontSize: "clamp(10px,0.9vw,14px)",
              padding: "6px 20px",
            }}
          >
            Shopify Developer
          </div>

          <div
            className="about-tag absolute bg-[#6C0820] text-white rounded-full"
            style={{
              left: "40%",
              bottom: "15%",
              fontSize: "clamp(10px,0.9vw,14px)",
              padding: "6px 20px",
            }}
          >
            Senior Developer
          </div>

          {/* ARROW */}

          <img
            src={arrow}
            className="about-arrow absolute"
            style={{
              left: "90%",
              top: "45%",
              width: "clamp(60px,8vw,140px)",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}

        <div
          className="w-full"
          style={{
            paddingLeft: "clamp(260px,32vw,520px)",
            paddingRight: "clamp(24px,5vw,120px)",
          }}
        >
          <div className="max-w-[700px] ml-auto text-right">

            <h2
              className="about-heading heading-font text-[#6C081F]"
              style={{ fontSize: "clamp(48px,5vw,96px)" }}
            >
              ABOUT ME
            </h2>

            <p
              className="about-text body-font text-[#6C081F] mt-6"
              style={{
                fontSize: "clamp(14px,1.1vw,22px)",
                lineHeight: "1.6",
              }}
            >
              Full Stack Developer with experience building and scaling
              production-grade web applications across MERN, Shopify,
              and WordPress ecosystems. Promoted to Senior Developer
              within one year for consistent delivery, ownership,
              and performance-focused engineering.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;