import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import heroImg from "../../assets/hero-banner.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";

// ─── Typing animation titles ────────────────────────────────────────────────
const TITLES = [
  "FULL STACK DEVELOPER",
  "SHOPIFY DEVELOPER",
  "WORDPRESS DEVELOPER",
  "MERN STACK DEVELOPER",
];

// ─── Nav links (single-page scroll) ─────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About me", id: "about" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "Resume", id: "resume" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// ─── 3-D Bubble SVG ─────────────────────────────────────────────────────────
const Bubble = () => (
  <svg
    viewBox="0 0 420 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="bubble-svg"
    style={{ width: "100%", height: "100%" }}
  >
    <defs>
      <radialGradient id="bubbleMain" cx="38%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#F9D0DC" stopOpacity="0.95" />
        <stop offset="55%" stopColor="#F2AEBD" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#d4708a" stopOpacity="0.7" />
      </radialGradient>
      <radialGradient id="bubbleSheen" cx="30%" cy="25%" r="40%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="bubbleBottom" cx="60%" cy="85%" r="35%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <filter id="bubbleBlur">
        <feGaussianBlur stdDeviation="1.5" />
      </filter>
    </defs>
    {/* Main sphere */}
    <ellipse cx="210" cy="215" rx="195" ry="192" fill="url(#bubbleMain)" />
    {/* Top sheen */}
    <ellipse cx="175" cy="148" rx="110" ry="80" fill="url(#bubbleSheen)" />
    {/* Bottom reflection */}
    <ellipse cx="235" cy="330" rx="80" ry="45" fill="url(#bubbleBottom)" />
    {/* Tiny specular highlight */}
    <ellipse cx="148" cy="120" rx="28" ry="18" fill="#fff" opacity="0.45" filter="url(#bubbleBlur)" />
    <ellipse cx="138" cy="114" rx="10" ry="7" fill="#fff" opacity="0.7" />
  </svg>
);

// ─── Star sparkle SVG ────────────────────────────────────────────────────────
const Star = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path
      d="M20 0 L22.5 17.5 L40 20 L22.5 22.5 L20 40 L17.5 22.5 L0 20 L17.5 17.5 Z"
      fill="#F5A623"
    />
  </svg>
);

// ─── Hamburger menu icon ─────────────────────────────────────────────────────
const HamburgerIcon = ({ open }) => (
  <div className="flex flex-col gap-[5px] cursor-pointer">
    <span
      style={{
        display: "block",
        width: 24,
        height: 2,
        background: "#F2DDDC",
        borderRadius: 2,
        transition: "all 0.3s ease",
        transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
      }}
    />
    <span
      style={{
        display: "block",
        width: 24,
        height: 2,
        background: "#F2DDDC",
        borderRadius: 2,
        transition: "all 0.3s ease",
        opacity: open ? 0 : 1,
      }}
    />
    <span
      style={{
        display: "block",
        width: 24,
        height: 2,
        background: "#F2DDDC",
        borderRadius: 2,
        transition: "all 0.3s ease",
        transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
      }}
    />
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
const Hero = () => {
  const container = useRef();
  const typingRef = useRef();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ── Typing animation ──────────────────────────────────────────────────────
  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  // ── GSAP entrance animations ──────────────────────────────────────────────
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(".hero-logo", { y: -30, opacity: 0, duration: 0.6, ease: "power3.out" })
      .from(".hero-nav", { y: -30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from(".hero-greeting", { x: -60, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .from(".hero-typing", { x: -60, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .from(".hero-desc", { x: -40, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from(".hero-btn", { x: -30, opacity: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
      .from(".hero-portfolio-text", { opacity: 0, duration: 1, ease: "power2.out" }, "-=0.6")
      .from(".hero-bubble", { scale: 0.7, opacity: 0, duration: 1, ease: "elastic.out(1,0.6)" }, "-=0.8")
      .from(".hero-image", { y: 60, opacity: 0, duration: 0.9, ease: "power3.out" }, "-=0.6")
      .from(".hero-star-1", { scale: 0, rotate: -90, duration: 0.5, ease: "back.out(2)" }, "-=0.5")
      .from(".hero-star-2", { scale: 0, rotate: 90, duration: 0.5, ease: "back.out(2)" }, "-=0.3")
      .from(".hero-socials", { y: 30, opacity: 0, duration: 0.5, ease: "power3.out" }, "-=0.3");

    // Bubble floating animation
    gsap.to(".hero-bubble", {
      y: -18,
      duration: 3.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Stars pulsing
    gsap.to(".hero-star-1", {
      scale: 1.15,
      duration: 1.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    gsap.to(".hero-star-2", {
      scale: 1.1,
      duration: 2.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.5,
    });
  }, { scope: container });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        #home {
          background: #6C081F;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ── Navbar ── */
        .hero-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(18px, 2.5vw, 36px) clamp(20px, 6vw, 120px);
          position: relative;
          z-index: 20;
          flex-shrink: 0;
        }

        .hero-logo {
          font-family: "Bebas Neue", sans-serif;
          font-size: clamp(28px, 3.5vw, 56px);
          color: #F2DDDC;
          font-weight: 400;
          letter-spacing: 0.04em;
          line-height: 1;
          cursor: default;
        }

        .hero-nav {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.2vw, 20px);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(242,221,220,0.15);
          border-radius: 14px;
          padding: clamp(8px, 0.8vw, 14px) clamp(10px, 1.2vw, 20px);
        }

        .hero-nav a {
          font-family: "Lato", sans-serif;
          font-size: clamp(12px, 0.9vw, 16px);
          color: #F2DDDC;
          text-decoration: none;
          padding: clamp(4px, 0.4vw, 8px) clamp(6px, 0.7vw, 14px);
          border-radius: 8px;
          transition: background 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }

        .hero-nav a:hover {
          background: rgba(242,221,220,0.12);
        }

        .hero-nav-cta {
          font-family: "Lato", sans-serif;
          font-size: clamp(12px, 0.9vw, 16px);
          background: rgba(242,174,189,0.25);
          border: 1px solid rgba(242,174,189,0.5);
          color: #F2DDDC !important;
          border-radius: 10px !important;
          padding: clamp(6px, 0.6vw, 10px) clamp(12px, 1.2vw, 22px) !important;
          cursor: pointer;
          transition: background 0.25s ease !important;
          white-space: nowrap;
        }

        .hero-nav-cta:hover {
          background: rgba(242,174,189,0.45) !important;
        }

        /* ── Hero body ── */
        .hero-body {
          flex: 1;
          display: flex;
          align-items: stretch;
          padding: 0 clamp(20px, 6vw, 120px);
          padding-bottom: 0;
          position: relative;
        }

        /* Left column */
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 45%;
          padding-bottom: clamp(40px, 5vw, 80px);
          z-index: 10;
          position: relative;
        }

        .hero-greeting {
          font-family: "Bebas Neue", sans-serif;
          font-size: clamp(44px, 5vw, 96px);
          font-weight: 400;
          color: #F2DDDC;
          line-height: clamp(50px, 6.25vw, 120px);
          margin-bottom: 0;
        }

        .hero-greeting span {
          color: #F2AEBD;
        }

        .hero-typing {
          font-family: "Bebas Neue", sans-serif;
          font-size: clamp(44px, 5vw, 96px);
          font-weight: 400;
          color: #F2DDDC;
          line-height: clamp(50px, 6.25vw, 120px);
          min-height: clamp(50px, 6.25vw, 120px);
          display: flex;
          align-items: center;
        }

        .hero-cursor {
          display: inline-block;
          width: clamp(2px, 0.2vw, 4px);
          height: clamp(36px, 4.2vw, 82px);
          background: #F2AEBD;
          margin-left: 4px;
          animation: blink 0.75s step-end infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-desc {
          font-family: "Lato", sans-serif;
          font-size: clamp(14px, 1.25vw, 24px);
          font-weight: 400;
          color: #F2DDDC;
          margin-top: clamp(12px, 1.5vw, 24px);
          max-width: 520px;
          line-height: 1.6;
        }

        .hero-btn {
          margin-top: clamp(20px, 2.5vw, 40px);
          display: inline-block;
          width: fit-content;
          border: 1px solid #F2DDDC;
          border-radius: 10px;
          padding: clamp(10px, 0.75vw, 14px) clamp(24px, 2.5vw, 48px);
          font-family: "Lato", sans-serif;
          font-size: clamp(14px, 1vw, 18px);
          font-weight: 500;
          color: #F2DDDC;
          cursor: pointer;
          background: transparent;
          transition: background 0.25s ease, color 0.25s ease;
          text-decoration: none;
        }

        .hero-btn:hover {
          background: #F2DDDC;
          color: #6C081F;
        }

        /* Right column */
        .hero-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 58%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          overflow: visible;
        }

        /* PORTFOLIO bg text */
        .hero-portfolio-text {
          position: absolute;
          right: clamp(-20px, -2vw, -10px);
          top: 50%;
          transform: translateY(-55%);
          display: flex;
          flex-direction: column;
          gap: clamp(-10px, -1vw, 0px);
          pointer-events: none;
          z-index: 1;
        }

        .portfolio-word {
          font-family: "Anton", sans-serif;
          font-size: clamp(70px, 9.5vw, 150px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(6px, 1vw, 15px);
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: rgba(255,255,255,0.35);
          color: transparent;
          white-space: nowrap;
        }

        /* Bubble */
        .hero-bubble-wrap {
          position: absolute;
          left: clamp(10px, 4vw, 60px);
          bottom: clamp(-20px, -2vw, 0px);
          width: clamp(260px, 35vw, 580px);
          height: clamp(260px, 35vw, 580px);
          z-index: 2;
        }

        /* Hero image */
        .hero-image-wrap {
          position: absolute;
          left: clamp(0px, 2vw, 30px);
          bottom: 0;
          z-index: 3;
          width: clamp(220px, 34.3vw, 659px);
          /* aspect-ratio 69/68 */
          aspect-ratio: 69 / 68;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom;
          display: block;
        }

        /* Socials */
        .hero-socials {
          position: absolute;
          right: clamp(20px, 6vw, 120px);
          bottom: clamp(20px, 3vw, 50px);
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 1vw, 16px);
          z-index: 10;
        }

        .hero-socials a {
          display: block;
          width: clamp(40px, 3.5vw, 60px);
          height: clamp(40px, 3.5vw, 60px);
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .hero-socials a:hover {
          transform: scale(1.1);
          opacity: 0.9;
        }

        .hero-socials img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* Stars */
        .hero-star-1 {
          position: absolute;
          left: clamp(-10px, 3vw, 50px);
          top: clamp(20px, 8vw, 100px);
          z-index: 4;
        }

        .hero-star-2 {
          position: absolute;
          left: clamp(20px, 6vw, 90px);
          top: clamp(80px, 15vw, 200px);
          z-index: 4;
        }

        /* ── Mobile nav drawer ── */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(108, 8, 31, 0.97);
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 28px;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .mobile-menu a {
          font-family: "Bebas Neue", sans-serif;
          font-size: 40px;
          color: #F2DDDC;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s ease;
        }

        .mobile-menu a:hover { color: #F2AEBD; }

        .mobile-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          cursor: pointer;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-nav { display: none; }
          .hero-hamburger { display: flex !important; }
          .hero-left { width: 100%; padding-bottom: clamp(280px, 55vw, 420px); }
          .hero-right { width: 100%; left: 0; justify-content: center; }
          .hero-bubble-wrap {
            left: 50%;
            transform: translateX(-50%);
            width: clamp(220px, 65vw, 380px);
            height: clamp(220px, 65vw, 380px);
          }
          .hero-image-wrap {
            left: 50%;
            transform: translateX(-50%);
            width: clamp(180px, 58vw, 340px);
          }
          .hero-portfolio-text { display: none; }
          .hero-star-1 { left: 10px; top: 10px; }
          .hero-star-2 { left: 45px; top: 60px; }
          .hero-socials {
            right: 16px;
            bottom: 16px;
            flex-direction: row;
          }
        }

        @media (max-width: 600px) {
          .hero-left { padding-bottom: clamp(240px, 70vw, 360px); }
        }
      `}</style>

      {/* ── Mobile nav drawer ── */}
      {mobileOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setMobileOpen(false)}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 4L24 24M24 4L4 24" stroke="#F2DDDC" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => { scrollTo(link.id); setMobileOpen(false); }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => { scrollTo("contact"); setMobileOpen(false); }}
            style={{ color: "#F2AEBD" }}
          >
            Contact Me
          </a>
        </div>
      )}

      <section id="home" ref={container}>

        {/* ── Navbar ── */}
        <nav className="hero-navbar">
          <div className="hero-logo">SHERIN PAUL</div>

          {/* Desktop nav */}
          <div className="hero-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="hero-nav-cta"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            >
              Contact Me
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="hero-hamburger"
            style={{ display: "none", background: "none", border: "none" }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <HamburgerIcon open={false} />
          </button>
        </nav>

        {/* ── Hero Body ── */}
        <div className="hero-body">

          {/* Left */}
          <div className="hero-left">
            <h1 className="hero-greeting">
              HI, I'M <span>SHERIN</span>
            </h1>
            <div className="hero-typing" ref={typingRef}>
              {displayed}
              <span className="hero-cursor" />
            </div>
            <p className="hero-desc">
              I create modern, scalable digital products from frontend interfaces to backend systems.
            </p>
            <a
              className="hero-btn"
              href="#work"
              onClick={(e) => { e.preventDefault(); scrollTo("work"); }}
            >
              View Selected Work
            </a>
          </div>

          {/* Right */}
          <div className="hero-right">

            {/* PORTFOLIO bg text */}
            <div className="hero-portfolio-text">
              <span className="portfolio-word">PORTFOLIO</span>
              <span className="portfolio-word">PORTFOLIO</span>
              <span className="portfolio-word">PORTFOLIO</span>
            </div>

            {/* Stars */}
            <div className="hero-star-1">
              <Star size={42} />
            </div>
            <div className="hero-star-2">
              <Star size={28} />
            </div>

            {/* 3D Bubble */}
            <div className="hero-bubble-wrap hero-bubble">
              <Bubble />
            </div>

            {/* Hero Image */}
            <div className="hero-image-wrap">
              <img
                src={heroImg}
                alt="Sherin Paul"
                className="hero-image"
                draggable="false"
              />
            </div>

            {/* Social icons */}
            <div className="hero-socials">
              <a
                href="https://github.com/stwhello"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/sherinann"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
