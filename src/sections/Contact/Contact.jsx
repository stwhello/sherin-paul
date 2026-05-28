import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
        paddingTop: "clamp(40px, 6vw, 120px)",
        paddingBottom: "clamp(40px, 6vw, 120px)",
      }}
    >
      <style>{`
        /* ── Card — SVG as background border ── */
        .contact-card {
          position: relative;
          background: #FDD0DA;
          border-radius: clamp(18px, 2.5vw, 50px);
          padding: clamp(28px, 4vw, 72px) clamp(28px, 5vw, 90px);
          overflow: hidden;
          /* draw the hand-drawn border via box-shadow + clip */
        }

        /* SVG border overlay — sits on top of bg, behind content */
        .contact-card-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .contact-card-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 3vw, 52px);
        }

        /* ── Heading INSIDE card ── */
        .contact-heading {
          text-align: center;
          position: relative;
          line-height: 1;
          /* let TOGETHER overlap Let's Work */
          padding-bottom: clamp(6px, 0.8vw, 14px);
        }

        .contact-heading-script {
          font-family: "Parisienne", cursive;
          color: #6C081F;
          font-size: clamp(26px, 3.5vw, 64px);
          font-weight: 400;
          display: block;
          line-height: 1.1;
          position: relative;
          z-index: 2;
          /* push slightly down so TOGETHER overlaps it */
          margin-bottom: clamp(-10px, -1.2vw, -20px);
        }

        .contact-heading-bold {
          font-family: "Bebas Neue", sans-serif;
          color: #6C081F;
          font-size: clamp(48px, 8vw, 128px);
          font-weight: 400;
          display: block;
          line-height: 0.9;
          position: relative;
          z-index: 1;
        }

        /* ── Main row: left + right ── */
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
          gap: clamp(18px, 2.5vw, 44px);
          flex-shrink: 0;
        }

        .contact-info-item a {
          text-decoration: none;
        }

        .contact-label {
          font-family: "Parisienne", cursive;
          color: #6C081F;
          font-size: clamp(20px, 2.5vw, 48px);
          font-weight: 400;
          line-height: 1.2;
          display: block;
        }

        .contact-value {
          font-family: "Bebas Neue", sans-serif;
          color: #1E1E1E;
          font-size: clamp(14px, 1.8vw, 36px);
          font-weight: 400;
          line-height: 1.25;
          display: block;
          transition: color 0.2s ease;
        }

        .contact-value:hover {
          color: #6C081F;
        }

        /* ── Right blobs — pushed right ── */
        .contact-right {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          flex: 1;
          min-width: 0;
          padding-right: clamp(0px, 2vw, 40px);
        }

        .contact-star {
          position: absolute;
          top: clamp(-20px, -2.5vw, -44px);
          left: clamp(-10px, -1vw, -16px);
          width: clamp(40px, 5.5vw, 100px);
          height: clamp(40px, 5.5vw, 100px);
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
          font-size: clamp(13px, 1.5vw, 28px);
          font-weight: 700;
          color: #1E1E1E;
          line-height: 1.35;
          width: 100%;
          padding: clamp(22px, 2.8vw, 52px) clamp(18px, 2vw, 36px);
          position: relative;
        }

        .blob-1 {
          height: clamp(76px, 9.5vw, 170px);
          border-radius: 50%;
          background: #FEDE6F;
          transform: rotate(5.835deg);
          z-index: 3;
        }

        .blob-2 {
          height: clamp(76px, 9.5vw, 174px);
          border-radius: clamp(10px, 1vw, 18px);
          background: #C5B2E9;
          transform: rotate(-3.095deg);
          margin-top: clamp(-18px, -2.2vw, -32px);
          z-index: 2;
        }

        .blob-3 {
          height: clamp(86px, 10.5vw, 190px);
          border-radius: 50%;
          background: #F581A4;
          transform: rotate(5.835deg);
          margin-top: clamp(-18px, -2.2vw, -32px);
          z-index: 1;
        }

        /* ── TABLET ── */
        @media (min-width: 701px) and (max-width: 1024px) {
          .contact-value { font-size: clamp(13px, 1.8vw, 22px); }
          .contact-label { font-size: clamp(18px, 2.5vw, 32px); }
        }

        /* ── MOBILE ── */
        @media (max-width: 700px) {
          .contact-body {
            flex-direction: column;
            align-items: center;
          }

          .contact-left {
            width: 100%;
            align-items: center;
            text-align: center;
            gap: clamp(16px, 5vw, 28px);
          }

          .contact-right {
            width: 100%;
            align-items: center;
            padding-right: 0;
          }

          .blob-stack {
            width: clamp(220px, 80vw, 360px);
          }

          .contact-blob {
            font-size: clamp(13px, 4vw, 18px);
          }

          .blob-1, .blob-2, .blob-3 {
            height: clamp(68px, 17vw, 110px);
          }

          .contact-heading-script {
            font-size: clamp(24px, 7.5vw, 42px);
            margin-bottom: clamp(-14px, -4vw, -20px);
          }

          .contact-heading-bold {
            font-size: clamp(52px, 16vw, 90px);
          }

          .contact-label { font-size: clamp(20px, 6vw, 32px); }
          .contact-value { font-size: clamp(13px, 4vw, 20px); }
        }
      `}</style>

      {/* ── Card wraps everything including the heading ── */}
      <div className="contact-card">

        {/* Hand-drawn SVG border overlay */}
        <svg
          className="contact-card-svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="none"
          viewBox="0 0 1405 842"
          fill="none"
        >
          <path
            d="M7.26982 57.1099C7.26982 29.4956 29.6556 7.10986 57.2698 7.10986H1347.27C1374.88 7.10986 1397.27 29.4956 1397.27 57.1099V784.11C1397.27 811.724 1374.88 834.11 1347.27 834.11H57.2698C29.6556 834.11 7.26982 811.724 7.26982 784.11V57.1099Z"
            fill="none"
            stroke="#6C081F"
            strokeWidth="8"
          />
        </svg>

        <div className="contact-card-inner">

          {/* ── Heading inside the card ── */}
          <div className="contact-heading">
            <span className="contact-heading-script">Let's Work</span>
            <span className="contact-heading-bold">TOGETHER</span>
          </div>

          {/* ── Body row ── */}
          <div className="contact-body">

            {/* LEFT — contact info */}
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

            {/* RIGHT — overlapping blobs pushed to the right */}
            <div className="contact-right">
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

              <div className="blob-stack">
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
