import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import maac from "../../assets/maac.webp";
import arena from "../../assets/arena.webp";
import kyomi from "../../assets/kyomi.webp";
import anubhuti from "../../assets/anubhuti.webp";
import palki from "../../assets/palki.webp";
import paperfold from "../../assets/kyomi.webp";
import nano from "../../assets/wand.webp";
import mels from "../../assets/mdln.webp";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "MAAC India",
    desc: "National platform for a leading animation & VFX institute, built for scale with optimized performance and responsive UI across all devices.",
    image: maac,
    link: "https://www.maacindia.com/",
  },
  {
    title: "Arena Multimedia",
    desc: "Institutional website for a career-focused AVGC-XR training brand, structured for clear course discovery and cross-device accessibility.",
    image: arena,
    link: "https://www.arena-multimedia.com/",
  },
  {
    title: "Kyomi Jewels",
    desc: "Shopify-based silver jewellery store with category-driven navigation, delivery personalisation, and a clean mobile-first shopping experience.",
    image: kyomi,
    link: "https://kyomijewels.com/",
  },
  {
    title: "Design Anubhuti",
    desc: "Creative studio portfolio with bold visual presentation, fluid animations, and a layout structured to showcase work and drive client enquiries.",
    image: anubhuti,
    link: "https://designanubhuti.com/",
  },
  {
    title: "Palki",
    desc: "E-commerce platform for chef-crafted freeze-dried gravies, featuring product-first layouts, a kitchen partner program, and seamless cart flow.",
    image: palki,
    link: "https://palkifnf.com/",
  },
  {
    title: "Paperfold Sequential",
    desc: "High-performance website for a design and print studio with structured editorial layouts and precision-crafted UI.",
    image: paperfold,
    link: "https://paperfold.in/",
  },
  {
    title: "Wand Fragrance",
    desc: "Fragrance e-commerce brand with an immersive storytelling approach, curated collections, combo offerings, and a B2B channel built in.",
    image: nano,
    link: "https://wandfragrance.com/",
  },
  {
    title: "Vibhog",
    desc: "Premium rice brand website with cinematic video storytelling, product-focused pages, and a refined brand identity carried consistently across all sections.",
    image: mels,
    link: "https://mdln.co.in/",
  },
];

const ClientWork = () => {
  const sectionRef = useRef(null);
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
          gap: clamp(10px, 1vw, 16px);
          overflow-x: auto;
          overflow-y: visible;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
           margin-left: clamp(20px, 6vw, 120px);
          margin-right: clamp(20px, 6vw, 120px);
          padding-bottom: clamp(10px, 1vw, 16px);
        }
        .cw-card {
          flex: 0 0 calc(
            (100vw - clamp(20px,6vw,120px) - clamp(10px,3vw,60px) - 3 * clamp(10px,1vw,16px)) / 3.5
          );
          min-width: 275px;
          max-width: 490px;
          scroll-snap-align: start;
          border-radius: 10px;
          background: #FDD0DA;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .cw-img-wrap {
          overflow: hidden;
          width: 100%;
          border-radius: 6px 6px 0 0;
        }
        .cw-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
          pointer-events: none;
          user-select: none;
        }
        .cw-card:hover .cw-img-wrap img {
          transform: scale(1.06);
        }
        .cw-btn {
          display: inline-block;
          border-radius: 10px;
          border: 1px solid #fff;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.25s ease, color 0.25s ease;
          padding: clamp(5px, 0.6vw, 10px) clamp(10px, 1.1vw, 22px);
          font-size: clamp(11px, 1vw, 16px);
          white-space: nowrap;
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
        <div
          className='container-page text-center'
          style={{ marginBottom: "clamp(24px, 3vw, 52px)" }}
        >
          <h1
            ref={headingRef}
            className='heading-font text-[#6C081F]'
            style={{
              fontSize: "clamp(48px,5vw,80px)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            CLIENT WORK
          </h1>
          <p
            ref={descRef}
            className='body-font text-[#1E1E1E]'
            style={{
              fontSize: "clamp(13px, 1.2vw, 22px)",
              fontWeight: 400,
              marginTop: "clamp(8px, 1vw, 16px)",
            }}
          >
            Web platforms built and optimized for growing brands and businesses.
          </p>
        </div>

        <div className='cw-track'>
          {projects.map((project, i) => (
            <div key={i} className='cw-card'>
              <div
                style={{
                  background: "#FDD0DA",
                  padding: "clamp(8px, 1vw, 16px) clamp(8px, 1vw, 16px) 0",
                  flexShrink: 0,
                }}
              >
                <div className='cw-img-wrap' style={{ aspectRatio: "43 / 33" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable='false'
                  />
                </div>
              </div>

              <div
                style={{
                  background: "#6C0820",
                  borderRadius: "0 0 10px 10px",
                  padding:
                    "clamp(12px, 1.3vw, 22px) clamp(12px, 1.3vw, 22px) clamp(14px, 1.5vw, 26px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(6px, 0.6vw, 10px)",
                  flex: 1,
                }}
              >
                <h3
                  className='heading-font text-white'
                  style={{
                    fontSize: "clamp(16px, 1.5vw, 28px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                  }}
                >
                  {project.title.toUpperCase()}
                </h3>
                <p
                  className='body-font text-white'
                  style={{
                    fontSize: "clamp(13px, 0.9vw, 15px)",
                    fontWeight: 400,
                    lineHeight: 1.65,
                    opacity: 0.88,
                    flex: 1,
                  }}
                >
                  {project.desc}
                </p>
                <div style={{ paddingTop: "clamp(4px, 0.2vw, 4px)" }}>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cw-btn body-font'
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
