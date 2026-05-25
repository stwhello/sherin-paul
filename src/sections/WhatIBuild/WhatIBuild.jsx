import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Placeholder illustration components (replace with your actual imported images)
import frontendIllustration from "../../assets/frontend-illustration.png";
import backendIllustration from "../../assets/backend-illustration.png";
import ecommerceIllustration from "../../assets/ecommerce-illustration.png";
import performanceIllustration from "../../assets/performance-illustration.png";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: "frontend",
    title: "Frontend Development",
    bg: "#C5B2E9",
    desc: [
      "React & Next.js applications",
      "Interactive landing pages",
      "Animation-driven experiences (GSAP / Framer Motion)",
      "Mobile-first, responsive layouts",
      "Component-based scalable UI systems",
    ],
    image: frontendIllustration,
    imageStyle: {
      aspectRatio: "222/143",
    },
    layout: "tall", // left col tall card
  },
  {
    id: "backend",
    title: "Backend & Full Stack Systems",
    bg: "#F581A4",
    desc: [
      "RESTful API development (Node.js / Express)",
      "Authentication & user management",
      "Database design (MongoDB / PostgreSQL)",
      "Admin dashboards & CMS systems",
      "Full-stack MERN applications",
    ],
    image: backendIllustration,
    imageStyle: {
      aspectRatio: "100/81",
    },
    layout: "wide", // top right wide card
  },
  {
    id: "ecommerce",
    title: "E-Commerce & CMS Solutions",
    bg: "#B8D9B0",
    desc: [
      "Shopify store setup",
      "WordPress development",
      "Payment integrations",
      "SEO-friendly builds",
      "Performance optimization",
    ],
    image: ecommerceIllustration,
    imageStyle: {
      aspectRatio: "83/58",
    },
    layout: "small-left",
  },
  {
    id: "performance",
    title: "Performance & Optimization",
    bg: "#FEDE6F",
    desc: [
      "Load time optimization",
      "Code splitting & lazy loading",
      "AWS / Vercel deployments",
      "Technical SEO improvements",
    ],
    image: performanceIllustration,
    imageStyle: {
      aspectRatio: "207/143",
    },
    layout: "small-right",
  },
];

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
        "-=0.3"
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
        "-=0.3"
      );
  });

  return (
    <section
      ref={container}
      className="container-page"
      style={{
        paddingTop: "clamp(50px, 7vw, 140px)",
        paddingBottom: "clamp(50px, 7vw, 140px)",
      }}
    >
      {/* Heading */}
      <h2
        className="wib-heading heading-font text-center"
        style={{
          color: "#6C081F",
          fontSize: "clamp(42px, 6vw, 96px)",
          fontWeight: 400,
          lineHeight: "clamp(50px, 7.5vw, 120px)",
          marginBottom: "clamp(10px, 1.2vw, 20px)",
        }}
      >
        WHAT I BUILD
      </h2>

      <p
        className="wib-subheading body-font text-center"
        style={{
          color: "#1E1E1E",
          fontSize: "clamp(14px, 1.4vw, 24px)",
          fontWeight: 400,
          marginBottom: "clamp(30px, 4vw, 60px)",
        }}
      >
        End-to-end web solutions tailored for performance, scalability, and growth.
      </p>

      {/* Bento Grid */}
      <div
        className="wib-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "auto auto",
          gap: "clamp(12px, 1.5vw, 24px)",
        }}
      >
        {/* Card 1 — Frontend (tall, spans 2 rows on left) */}
        <div
          className="wib-card"
          style={{
            gridColumn: "1 / 2",
            gridRow: "1 / 3",
            background: "#C5B2E9",
            borderRadius: "25px",
            padding: "clamp(20px, 2.5vw, 40px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px, 2vw, 28px)",
            overflow: "hidden",
          }}
        >
          <h3
            className="heading-font"
            style={{
              color: "#1E1E1E",
              fontSize: "clamp(22px, 2.5vw, 40px)",
              fontWeight: 400,
              lineHeight: "1.25",
            }}
          >
            Frontend Development
          </h3>

          {/* Image placeholder */}
          <div
            style={{
              width: "100%",
              aspectRatio: "222/143",
              borderRadius: "12px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={frontendIllustration}
              alt="Frontend Development"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "clamp(6px, 0.6vw, 10px)",
            }}
          >
            {[
              "React & Next.js applications",
              "Interactive landing pages",
              "Animation-driven experiences (GSAP / Framer Motion)",
              "Mobile-first, responsive layouts",
              "Component-based scalable UI systems",
            ].map((item) => (
              <li
                key={item}
                className="body-font"
                style={{
                  color: "#1E1E1E",
                  fontSize: "clamp(12px, 1.1vw, 20px)",
                  fontWeight: 500,
                  lineHeight: "1.5",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2 — Backend (wide, top right) */}
        <div
          className="wib-card"
          style={{
            gridColumn: "2 / 3",
            gridRow: "1 / 2",
            background: "#F581A4",
            borderRadius: "25px",
            padding: "clamp(20px, 2.5vw, 40px)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "clamp(16px, 2vw, 30px)",
            overflow: "hidden",
          }}
        >
          {/* Left: text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              className="heading-font"
              style={{
                color: "#1E1E1E",
                fontSize: "clamp(18px, 2vw, 36px)",
                fontWeight: 400,
                lineHeight: "1.25",
                marginBottom: "clamp(10px, 1vw, 18px)",
              }}
            >
              Backend & Full Stack Systems
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "clamp(5px, 0.5vw, 9px)",
              }}
            >
              {[
                "RESTful API development (Node.js / Express)",
                "Authentication & user management",
                "Database design (MongoDB / PostgreSQL)",
                "Admin dashboards & CMS systems",
                "Full-stack MERN applications",
              ].map((item) => (
                <li
                  key={item}
                  className="body-font"
                  style={{
                    color: "#1E1E1E",
                    fontSize: "clamp(11px, 0.95vw, 18px)",
                    fontWeight: 400,
                    lineHeight: "1.5",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image */}
          <div
            style={{
              flexShrink: 0,
              width: "clamp(120px, 28vw, 458px)",
              aspectRatio: "100/81",
              borderRadius: "12px",
              background: "rgba(0,0,0,0.08)",
              boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
              overflow: "hidden",
            }}
          >
            <img
              src={backendIllustration}
              alt="Backend Development"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        </div>

        {/* Bottom row — two small cards side by side inside right column */}
        <div
          style={{
            gridColumn: "2 / 3",
            gridRow: "2 / 3",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(12px, 1.5vw, 24px)",
          }}
        >
          {/* Card 3 — E-Commerce */}
          <div
            className="wib-card"
            style={{
              background: "#B8D9B0",
              borderRadius: "25px",
              padding: "clamp(16px, 2vw, 32px)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(12px, 1.2vw, 20px)",
              overflow: "hidden",
            }}
          >
            {/* Image top */}
            <div
              style={{
                width: "clamp(80px, 12vw, 249px)",
                aspectRatio: "83/58",
                borderRadius: "10px",
                background: "rgba(0,0,0,0.08)",
                boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
                overflow: "hidden",
              }}
            >
              <img
                src={ecommerceIllustration}
                alt="E-Commerce"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>

            <h3
              className="heading-font"
              style={{
                color: "#1E1E1E",
                fontSize: "clamp(16px, 1.8vw, 32px)",
                fontWeight: 400,
                lineHeight: "1.25",
              }}
            >
              E-Commerce & CMS Solutions
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "clamp(4px, 0.4vw, 8px)",
              }}
            >
              {[
                "Shopify store setup",
                "WordPress development",
                "Payment integrations",
                "SEO-friendly builds",
                "Performance optimization",
              ].map((item) => (
                <li
                  key={item}
                  className="body-font"
                  style={{
                    color: "#1E1E1E",
                    fontSize: "clamp(10px, 0.85vw, 16px)",
                    fontWeight: 400,
                    lineHeight: "1.5",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4 — Performance */}
          <div
            className="wib-card"
            style={{
              background: "#FEDE6F",
              borderRadius: "25px",
              padding: "clamp(16px, 2vw, 32px)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(12px, 1.2vw, 20px)",
              overflow: "hidden",
            }}
          >
            <h3
              className="heading-font"
              style={{
                color: "#1E1E1E",
                fontSize: "clamp(16px, 1.8vw, 32px)",
                fontWeight: 400,
                lineHeight: "1.25",
              }}
            >
              Performance & Optimization
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "clamp(4px, 0.4vw, 8px)",
              }}
            >
              {[
                "Load time optimization",
                "Code splitting & lazy loading",
                "AWS / Vercel deployments",
                "Technical SEO improvements",
              ].map((item) => (
                <li
                  key={item}
                  className="body-font"
                  style={{
                    color: "#1E1E1E",
                    fontSize: "clamp(10px, 0.85vw, 16px)",
                    fontWeight: 400,
                    lineHeight: "1.5",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Image bottom */}
            <div
              style={{
                marginTop: "auto",
                width: "clamp(80px, 13vw, 262px)",
                aspectRatio: "207/143",
                borderRadius: "10px",
                background: "rgba(0,0,0,0.08)",
                boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
                overflow: "hidden",
                alignSelf: "flex-end",
              }}
            >
              <img
                src={performanceIllustration}
                alt="Performance"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile styles injected via a style tag ─── */}
      <style>{`
        @media (max-width: 768px) {
          .wib-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .wib-grid > div[style*="gridColumn: 1"] {
            grid-column: 1 / 2 !important;
            grid-row: auto !important;
          }
          .wib-grid > div[style*="gridColumn: 2"] {
            grid-column: 1 / 2 !important;
            grid-row: auto !important;
          }
          /* Backend card stacks vertically on mobile */
          .wib-card[style*="flex-direction: row"] {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIBuild;
