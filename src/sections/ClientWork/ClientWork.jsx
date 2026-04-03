import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import maac from "../../assets/maac.png";
import arena from "../../assets/arena.png";
import kyomi from "../../assets/kyomi.png";
import anubhuti from "../../assets/anubhuti.png";
import palki from "../../assets/palki.png";
import paperfold from "../../assets/kyomi.png";
import nano from "../../assets/wand.png";
import mels from "../../assets/mdln.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "MAAC India",
    desc: "Large-scale education website optimized for performance and responsive UI improvements.",
    image: maac,
    link: "https://www.maacindia.com/",
  },
  {
    title: "Arena Multimedia",
    desc: "Responsive institutional platform built with structured layouts and CMS integration.",
    image: arena,
    link: "https://www.arena-multimedia.com/",
  },
  {
    title: "Kyomi Jewels",
    desc: "Modern e-commerce jewelry platform with optimized product presentation and mobile responsiveness.",
    image: kyomi,
    link: "https://kyomijewels.com/",
  },
  {
    title: "Design Anubhuti",
    desc: "Creative portfolio website built with performant animations, bold presentation and structured for conversions.",
    image: anubhuti,
    link: "https://designanubhuti.com/",
  },
  {
    title: "Palki",
    desc: "Premium brand platform with immersive layouts built with multi-experience UI that flows from layout to cart.",
    image: palki,
    link: "https://palkifnf.com/",
  },
  {
    title: "Paperfold Sequential",
    desc: "Innovative editorial design with structured layout design and ultra-high performance applications.",
    image: paperfold,
    link: "https://paperfold.in/",
  },
  {
    title: "Wand Fragrance",
    desc: "Elegant fragrance e-commerce with architectural design with sleek UI and bold lifestyle branding approach.",
    image: nano,
    link: "https://wandfragrance.com/",
  },
  {
    title: "Vibhog",
    desc: "Sophisticated platform with immersive specialty across multiple pages with consistent brand UI across all areas.",
    image: mels,
    link: "https://mdln.co.in/",
  },
];

const ClientWork = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });
    gsap.from(descRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });
    gsap.from(".cw-card", {
      y: 60,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
    });
  });

  return (
    <>
      <style>{`
        .cw-track {
          display: flex;
          gap: clamp(12px, 1.4vw, 20px);
          overflow-x: auto;
          overflow-y: visible;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          /* same as container-page */
          padding-left: clamp(20px, 6vw, 120px);
          padding-right: clamp(20px, 6vw, 120px);
          padding-bottom: clamp(10px, 1vw, 16px);
        }
        .cw-track::-webkit-scrollbar {
          display: none;
        }
        .cw-card {
          flex: 0 0 calc((100vw - clamp(40px, 12vw, 240px) - clamp(24px, 2.8vw, 40px)) / 3);
          min-width: 260px;
          max-width: 544px;
          scroll-snap-align: start;
          border-radius: 10px;
          background: #FDD0DA;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .cw-btn {
          display: inline-block;
          border-radius: 10px;
          border: 1px solid #fff;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.25s ease, color 0.25s ease;
          padding: clamp(8px, 0.9vw, 14px) clamp(14px, 1.6vw, 28px);
          font-size: clamp(11px, 0.85vw, 15px);
        }
        .cw-btn:hover {
          background: #fff;
          color: #6C0820;
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          paddingTop: "clamp(50px, 7vw, 140px)",
          paddingBottom: "clamp(50px, 7vw, 140px)",
        }}
      >
        {/* Header — uses container-page for side padding */}
        <div
          className="container-page text-center"
          style={{ marginBottom: "clamp(28px, 3.5vw, 56px)" }}
        >
          <h1
            ref={headingRef}
            className="heading-font text-[#6C081F]"
            style={{ fontSize: "clamp(40px, 6vw, 96px)", fontWeight: 400, lineHeight: 1.1 }}
          >
            CLIENT WORK
          </h1>
          <p
            ref={descRef}
            className="body-font text-[#1E1E1E]"
            style={{
              fontSize: "clamp(14px, 1.4vw, 24px)",
              fontWeight: 400,
              marginTop: "clamp(8px, 1vw, 18px)",
            }}
          >
            Web platforms built and optimized for growing brands and businesses.
          </p>
        </div>

        {/* Scroll track — swipe/scroll horizontally */}
        <div ref={trackRef} className="cw-track">
          {projects.map((project, i) => (
            <div key={i} className="cw-card">

              {/* Image — floats inside pink bg */}
              <div style={{
                background: "#FDD0DA",
                padding: "clamp(10px, 1.2vw, 20px) clamp(10px, 1.2vw, 20px) 0",
                flexShrink: 0,
              }}>
                <div style={{ width: "100%", aspectRatio: "43 / 33", overflow: "hidden", borderRadius: "6px 6px 0 0" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable="false"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none", userSelect: "none" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div style={{
                background: "#6C0820",
                borderRadius: "0 0 10px 10px",
                padding: "clamp(14px, 1.5vw, 26px) clamp(14px, 1.5vw, 26px) clamp(16px, 1.8vw, 30px)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(8px, 0.8vw, 14px)",
                flex: 1,
              }}>
                <h3
                  className="heading-font text-white"
                  style={{ fontSize: "clamp(16px, 1.8vw, 32px)", fontWeight: 400, lineHeight: 1.1 }}
                >
                  {project.title.toUpperCase()}
                </h3>
                <p
                  className="body-font text-white"
                  style={{ fontSize: "clamp(11px, 0.85vw, 15px)", fontWeight: 400, lineHeight: 1.65, opacity: 0.88, flex: 1 }}
                >
                  {project.desc}
                </p>
                <div style={{ paddingTop: "clamp(4px, 0.4vw, 8px)" }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cw-btn body-font"
                  >
                    Live Website
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default ClientWork;
