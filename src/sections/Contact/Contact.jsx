import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import contactBg from "../../assets/contact-bg.png";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });

    tl.from(".contact-heading-script", {
      y: -30,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    })
      .from(
        ".contact-heading-bold",
        { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .from(
        ".contact-left",
        { x: -60, opacity: 0, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      )
      .from(
        ".contact-blob",
        { scale: 0.7, opacity: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .from(
        ".contact-star",
        { scale: 0, opacity: 0, rotation: -90, duration: 0.5, ease: "back.out(2)" },
        "-=0.6"
      );
  });

  return (
    <section
      ref={container}
      className="container-page"
      style={{
        paddingTop: "clamp(32px, 4vw, 80px)",
        paddingBottom: "clamp(32px, 4vw, 80px)",
      }}
    >
      <style>{`
        .contact-card {
          position: relative;
          padding: clamp(24px, 3.5vw, 60px) clamp(28px, 5vw, 90px);
          max-height: 100vh;
        }

        /* background image fills card */
        .contact-card-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          z-index: 0;
          pointer-events: none;
          border-radius: inherit;
        }

        .contact-card-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(18px, 2.5vw, 40px);
        }

        /* ── Heading INSIDE card — overlapping ── */
        .contact-heading {
          text-align: center;
          position: relative;
          line-height: 1;
        }

        .contact-heading-script {
          font-family: "Parisienne", cursive;
          color: #6C081F;
          font-size: clamp(30px, 4vw, 68px);
          font-weight: 400;
          display: block;
          line-height: 1.15;
          position: relative;
          z-index: 2;
          margin-bottom: clamp(-14px, -1.6vw, -26px);
        }

        .contact-heading-bold {
          font-family: "Bebas Neue", sans-serif;
          color: #6C081F;
          font-size: clamp(56px, 9vw, 140px);
          font-weight: 400;
          display: block;
          line-height: 0.88;
          position: relative;
          z-index: 1;
        }

        /* ── Body row ── */
        .contact-body {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: clamp(24px, 4vw, 60px);
        }

        /* ── Left ── */
        .contact-left {
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 2.2vw, 40px);
          flex-shrink: 0;
        }

        .contact-info-item a {
          text-decoration: none;
        }

        .contact-label {
          font-family: "Parisienne", cursive;
          color: #6C081F;
          font-size: clamp(24px, 3vw, 52px);
          font-weight: 400;
          line-height: 1.2;
          display: block;
        }

        .contact-value {
          font-family: "Bebas Neue", sans-serif;
          color: #1E1E1E;
          font-size: clamp(17px, 2.2vw, 40px);
          font-weight: 400;
          line-height: 1.25;
          display: block;
          transition: color 0.2s ease;
        }

        .contact-value:hover {
          color: #6C081F;
        }

        /* ── Right — blobs pushed right ── */
        .contact-right {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          flex: 1;
          min-width: 0;
          padding-right: clamp(0px, 2vw, 40px);
        }

        /* star sits top-left of the yellow blob */
        .contact-star {
          position: absolute;
          /* aligned to top-left corner of blob-stack */
          top: clamp(-22px, -2.8vw, -50px);
          left: clamp(-12px, -1.2vw, -20px);
          width: clamp(42px, 5.8vw, 100px);
          height: clamp(42px, 5.8vw, 100px);
          z-index: 10;
        }

        .blob-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: clamp(200px, 28vw, 440px);
          position: relative;
        }

        .contact-blob {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: "Lato", sans-serif;
          font-size: clamp(14px, 1.7vw, 30px);
          font-weight: 700;
          color: #1E1E1E;
          line-height: 1.35;
          width: 100%;
          padding: clamp(20px, 2.6vw, 48px) clamp(16px, 1.8vw, 32px);
          position: relative;
        }

        .blob-1 {
          height: clamp(72px, 9vw, 160px);
          border-radius: 50%;
          background: #FEDE6F;
          transform: rotate(5.835deg);
          z-index: 3;
        }

        .blob-2 {
          height: clamp(72px, 9vw, 164px);
          border-radius: clamp(10px, 1vw, 18px);
          background: #C5B2E9;
          transform: rotate(-3.095deg);
          margin-top: clamp(-16px, -2vw, -30px);
          z-index: 2;
        }

        .blob-3 {
          height: clamp(80px, 10vw, 180px);
          border-radius: 50%;
          background: #F581A4;
          transform: rotate(5.835deg);
          margin-top: clamp(-16px, -2vw, -30px);
          z-index: 1;
        }

        /* ── TABLET ── */
        @media (min-width: 701px) and (max-width: 1024px) {
          .contact-value  { font-size: clamp(14px, 2vw, 24px); }
          .contact-label  { font-size: clamp(20px, 2.8vw, 36px); }
          .contact-heading-script { font-size: clamp(28px, 4vw, 52px); }
          .contact-heading-bold   { font-size: clamp(52px, 9vw, 100px); }
        }

        /* ── MOBILE ── */
        @media (max-width: 700px) {
          .contact-card { max-height: none; }

          .contact-body {
            flex-direction: column;
            align-items: center;
          }

          .contact-left {
            width: 100%;
            align-items: center;
            text-align: center;
            gap: clamp(14px, 5vw, 26px);
          }

          .contact-right {
            width: 100%;
            align-items: center;
            padding-right: 0;
          }

          .blob-stack {
            width: clamp(220px, 80vw, 360px);
          }

          .contact-blob { font-size: clamp(13px, 4vw, 18px); }

          .blob-1, .blob-2, .blob-3 {
            height: clamp(66px, 17vw, 108px);
          }

          .contact-heading-script {
            font-size: clamp(26px, 8vw, 44px);
            margin-bottom: clamp(-16px, -4.5vw, -22px);
          }

          .contact-heading-bold { font-size: clamp(56px, 17vw, 96px); }

          .contact-label { font-size: clamp(22px, 6.5vw, 34px); }
          .contact-value { font-size: clamp(14px, 4.5vw, 22px); }
        }
      `}</style>

      <div className="contact-card">

        {/* Background image replaces the pink + SVG border */}
        <img
          className="contact-card-bg"
          src={contactBg}
          alt=""
          aria-hidden="true"
        />

        <div className="contact-card-inner">

          {/* Heading */}
          <div className="contact-heading">
            <span className="contact-heading-script">Let's Work</span>
            <span className="contact-heading-bold">TOGETHER</span>
          </div>

          {/* Body */}
          <div className="contact-body">

            {/* LEFT */}
            <div className="contact-left">
              <div className="contact-info-item">
                <span className="contact-label">Phone</span>
                <a href="tel:+919579245383">
                  <span className="contact-value">+91 95792 45383</span>
                </a>
              </div>

              <div className="contact-info-item">
                <span className="contact-label">Email</span>
                <a href="mailto:sherinpaul2001@gmail.com">
                  <span className="contact-value">sherinpaul2001@gmail.com</span>
                </a>
              </div>

              <div className="contact-info-item">
                <span className="contact-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/sherinann/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-value">linkedin.com/in/sherinann</span>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="contact-right">
              <div className="blob-stack">
                {/* Star anchored to top-left of blob-stack */}
                <svg
                  className="contact-star"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M50 0L62.3744 37.6256L100 50L62.3744 62.3744L50 100L37.6256 62.3744L0 50L37.6256 37.6256L50 0Z"
                    fill="#6C0820"
                  />
                </svg>

                <div className="contact-blob blob-1">Have a project in mind?</div>
                <div className="contact-blob blob-2">Reach out and let's make it happen.</div>
                <div className="contact-blob blob-3">Thank You</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
