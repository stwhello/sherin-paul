import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import frontendIllustration from "../../assets/frontend-illustration.png";
import backendIllustration from "../../assets/backend-illustration.png";
import ecommerceIllustration from "../../assets/ecommerce-illustration.png";
import performanceIllustration from "../../assets/performance-illustration.png";

gsap.registerPlugin(ScrollTrigger);

const listItems = {
  frontend: [
    "React & Next.js applications",
    "Interactive landing pages",
    "Animation-driven experiences (GSAP / Framer Motion)",
    "Mobile-first, responsive layouts",
    "Component-based scalable UI systems",
  ],
  backend: [
    "RESTful API development (Node.js / Express)",
    "Authentication & user management",
    "Database design (MongoDB / PostgreSQL)",
    "Admin dashboards & CMS systems",
    "Full-stack MERN applications",
  ],
  ecommerce: [
    "Shopify store setup",
    "WordPress development",
    "Payment integrations",
    "SEO-friendly builds",
    "Performance optimization",
  ],
  performance: [
    "Load time optimization",
    "Code splitting & lazy loading",
    "AWS / Vercel deployments",
    "Technical SEO improvements",
  ],
};

const WhatIBuild = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
    });

    tl.from(".wib-heading", {
      y: -40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    })
      .from(
        ".wib-subheading",
        { y: -20, opacity: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3",
      )
      .from(
        ".wib-card",
        {
          y: 50,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.3",
      );
  });

  return (
    <section
      ref={container}
      className='container-page'
      style={{
        paddingTop: "clamp(30px, 4vw, 80px)",
        paddingBottom: "clamp(30px, 4vw, 80px)",
      }}
    >
      <style>{`
        /* ── Grid ── */
        .wib-grid {
          display: grid;
          grid-template-columns: 41fr 59fr;
          grid-template-rows: auto auto;
          gap: clamp(10px, 1.2vw, 20px);
        }
        .wib-card-frontend { grid-column: 1 / 2; grid-row: 1 / 3; }
        .wib-card-backend  { grid-column: 2 / 3; grid-row: 1 / 2; }
        .wib-bottom-row {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(10px, 1.2vw, 20px);
        }

        /* ── Card base ── */
        .wib-card {
          border-radius: clamp(14px, 1.4vw, 25px);
          padding: clamp(16px, 2vw, 36px);
          overflow: hidden;
        }

        /* ── Typography ── */
        .wib-title {
          font-family: "Bebas Neue", sans-serif;
          font-weight: 400;
          color: #1E1E1E;
          font-size: clamp(16px, 2vw, 40px);
          line-height: 1.25;
        }
        .wib-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(4px, 0.45vw, 9px);
        }
        .wib-list li {
          font-family: "Lato", sans-serif;
          color: #1E1E1E;
          font-size: clamp(11px, 0.9vw, 18px);
          font-weight: 400;
          line-height: 1.5;
        }

        /* ── Images (no shadow, no border) ── */
        .wib-img-wrap {
          border-radius: clamp(8px, 0.8vw, 14px);
          overflow: hidden;
          flex-shrink: 0;
        }
        .wib-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Card inners ── */
        .wib-frontend-inner {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 1.4vw, 24px);
          height: 100%;
        }
        .wib-frontend-img { width: 100%; aspect-ratio: 222/143; }

        .wib-backend-inner {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: clamp(14px, 1.8vw, 28px);
          height: 100%;
        }
        .wib-backend-text {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 0.8vw, 16px);
        }
        .wib-backend-img {
          width: clamp(100px, 22vw, 380px);
          aspect-ratio: 100/81;
        }

        .wib-ecom-inner {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1vw, 18px);
          height: 100%;
        }
        .wib-ecom-img {
          width: clamp(70px, 10vw, 200px);
          aspect-ratio: 83/58;
        }

        .wib-perf-inner {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1vw, 18px);
          height: 100%;
        }
        .wib-perf-img {
          width: clamp(70px, 10vw, 210px);
          aspect-ratio: 207/143;
          align-self: flex-end;
          margin-top: auto;
        }

        /* ── TABLET ── */
        @media (min-width: 701px) and (max-width: 1024px) {
          .wib-title { font-size: clamp(15px, 2.2vw, 28px); }
          .wib-list li { font-size: clamp(11px, 1.3vw, 15px); }
          .wib-backend-img { width: clamp(100px, 18vw, 260px); }
        }

        /* ── MOBILE: horizontal scroll ── */
       @media (max-width: 700px) {

  .wib-grid {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: clamp(12px, 4vw, 20px);
    padding-bottom: 12px;
  }

  /* Hide scrollbar */
  .wib-grid::-webkit-scrollbar {
    display: none;
  }

  .wib-grid {
    scrollbar-width: none;
  }

  /* All cards */
  .wib-card-frontend,
  .wib-card-backend,
  .wib-bottom-row .wib-card {
    flex: 0 0 78vw;
    scroll-snap-align: start;
    grid-column: unset;
    grid-row: unset;
    min-height: 420px;
  }

  /* Bottom row behaves like individual cards */
  .wib-bottom-row {
    display: contents;
  }

  /* Backend stacks vertically */
  .wib-backend-inner {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }

  .wib-backend-img {
    width: 100%;
    margin-top: auto;
  }

  /* Better spacing for smaller cards */
  .wib-ecom-inner,
  .wib-perf-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Images balanced at bottom */
  .wib-ecom-img,
  .wib-perf-img {
    width: clamp(200px, 32vw, 280px);
    align-self: center;
    margin-top: 24px;
  }

  /* Typography */
  .wib-title {
    font-size: clamp(20px, 5.5vw, 30px);
    line-height: 1.1;
  }

  .wib-list {
    gap: 10px;
  }

  .wib-list li {
    font-size: clamp(13px, 3.8vw, 16px);
    line-height: 1.5;
  }
}
      `}</style>

      <div className='text-center'>
        <h2 className='heading-font text-[#6C081F] text-[clamp(32px,4vw,80px)]'>
          WHAT I BUILD
        </h2>
        <p className='body-font text-[#1E1E1E] text-[clamp(13px,3vw,18px)] mt-2 mb-12'>
          End-to-end web solutions tailored for performance, scalability, and
          growth.{" "}
        </p>
      </div>

      {/* ── Bento Grid ── */}
      <div className='wib-grid'>
        {/* Card 1 — Frontend (tall left) */}
        <div
          className='wib-card wib-card-frontend'
          style={{ background: "#C5B2E9" }}
        >
          <div className='wib-frontend-inner'>
            <h3 className='wib-title'>Frontend Development</h3>
            <div className='wib-img-wrap wib-frontend-img'>
              <img
                src={frontendIllustration}
                alt='Frontend Development'
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <ul className='wib-list'>
              {listItems.frontend.map((item) => (
                <li key={item} style={{ fontWeight: 500 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2 — Backend (wide top-right) */}
        <div
          className='wib-card wib-card-backend'
          style={{ background: "#F581A4" }}
        >
          <div className='wib-backend-inner'>
            <div className='wib-backend-text'>
              <h3 className='wib-title'>Backend & Full Stack Systems</h3>
              <ul className='wib-list'>
                {listItems.backend.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className='wib-img-wrap wib-backend-img'>
              <img
                src={backendIllustration}
                alt='Backend Development'
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom row — two small cards */}
        <div className='wib-bottom-row'>
          {/* Card 3 — E-Commerce */}
          <div className='wib-card' style={{ background: "#B8D9B0" }}>
            <div className='wib-ecom-inner'>
              <div className='wib-img-wrap wib-ecom-img'>
                <img
                  src={ecommerceIllustration}
                  alt='E-Commerce'
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <h3 className='wib-title'>E-Commerce & CMS Solutions</h3>
              <ul className='wib-list'>
                {listItems.ecommerce.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 4 — Performance */}
          <div className='wib-card' style={{ background: "#FEDE6F" }}>
            <div className='wib-perf-inner'>
              <h3 className='wib-title'>Performance & Optimization</h3>
              <ul className='wib-list'>
                {listItems.performance.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className='wib-img-wrap wib-perf-img'>
                <img
                  src={performanceIllustration}
                  alt='Performance'
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
