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

    tl.from(".contact-heading", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".contact-left",
        { x: -60, opacity: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      )
      .from(
        ".contact-blob",
        {
          scale: 0.7,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
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
        .contact-card {
          position: relative;
          background: #FDD0DA;
          border-radius: clamp(18px, 2vw, 36px);
          border: clamp(4px, 0.4vw, 8px) solid #6C081F;
          padding: clamp(28px, 4vw, 72px) clamp(28px, 5vw, 90px);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: clamp(24px, 4vw, 60px);
          overflow: hidden;
        }

        /* scattered stroke border texture — just the SVG bg */
        .contact-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .contact-inner {
          position: relative;
          z-index: 1;
          width: 100%;
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
          gap: clamp(20px, 3vw, 48px);
          flex-shrink: 0;
        }

        .contact-info-item a {
          text-decoration: none;
        }

        .contact-label {
          font-family: "Parisienne", cursive;
          color: #6C081F;
          font-size: clamp(22px, 2.8vw, 48px);
          font-weight: 400;
          line-height: 1.2;
          display: block;
        }

        .contact-value {
          font-family: "Bebas Neue", sans-serif;
          color: #1E1E1E;
          font-size: clamp(16px, 2vw, 36px);
          font-weight: 400;
          line-height: 1.25;
          display: block;
          transition: color 0.2s ease;
        }

        .contact-value:hover {
          color: #6C081F;
        }

        /* ── Heading ── */
        .contact-heading {
          text-align: center;
          margin-bottom: clamp(24px, 3vw, 56px);
        }

        .contact-script {
          font-family: "Parisienne", cursive;
          color: #6C081F;
          font-size: clamp(28px, 3.8vw, 64px);
          font-weight: 400;
          line-height: 1.2;
          display: block;
        }

        .contact-bold {
          font-family: "Bebas Neue", sans-serif;
          color: #6C081F;
          font-size: clamp(48px, 7.5vw, 128px);
          font-weight: 400;
          line-height: clamp(48px, 7.5vw, 120px);
          display: block;
        }

        /* ── Right blobs ── */
        .contact-right {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          flex: 1;
          min-width: 0;
        }

        .contact-star {
          position: absolute;
          top: clamp(-30px, -3vw, -50px);
          left: clamp(-10px, -1.5vw, -20px);
          width: clamp(44px, 5.5vw, 100px);
          height: clamp(44px, 5.5vw, 100px);
          z-index: 10;
        }

        /* blob wrapper keeps overlap */
        .blob-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(-30px, -3vw, -40px);
          width: 100%;
          position: relative;
        }

        .contact-blob {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: "Lato", sans-serif;
          font-size: clamp(14px, 1.6vw, 32px);
          font-weight: 700;
          color: #1E1E1E;
          line-height: 1.35;
          width: clamp(200px, 26vw, 427px);
          padding: clamp(24px, 3vw, 52px) clamp(20px, 2.5vw, 40px);
          position: relative;
        }

        .blob-1 {
          height: clamp(80px, 10vw, 170px);
          border-radius: 50%;
          background: #FEDE6F;
          transform: rotate(5.835deg);
          z-index: 3;
        }

        .blob-2 {
          height: clamp(80px, 10vw, 174px);
          border-radius: clamp(10px, 1vw, 18px);
          background: #C5B2E9;
          transform: rotate(-3.095deg);
          margin-top: clamp(-20px, -2.5vw, -36px);
          z-index: 2;
        }

        .blob-3 {
          height: clamp(90px, 11vw, 190px);
          border-radius: 50%;
          background: #F581A4;
          transform: rotate(5.835deg);
          margin-top: clamp(-20px, -2.5vw, -36px);
          z-index: 1;
        }

        /* ── MOBILE ── */
        @media (max-width: 700px) {
          .contact-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .contact-right {
            width: 100%;
            align-items: center;
          }

          .contact-blob {
            width: clamp(240px, 80vw, 360px);
            font-size: clamp(14px, 4vw, 20px);
          }

          .blob-1, .blob-2, .blob-3 {
            height: clamp(70px, 18vw, 120px);
          }

          .contact-script {
            font-size: clamp(24px, 7vw, 40px);
          }

          .contact-bold {
            font-size: clamp(44px, 13vw, 80px);
            line-height: 1;
          }

          .contact-label {
            font-size: clamp(20px, 5.5vw, 32px);
          }

          .contact-value {
            font-size: clamp(14px, 4vw, 22px);
          }
        }
      `}</style>

      {/* Heading outside card */}
      <div className="contact-heading">
        <span className="contact-script">Let's Work</span>
        <span className="contact-bold">TOGETHER</span>
      </div>

      {/* Main card */}
      <div className="contact-card">
        <div className="contact-inner">

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

          {/* RIGHT — overlapping blobs with star */}
          <div className="contact-right">
            {/* Star overlapping first blob */}
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
              <div className="contact-blob blob-1">
                Have a project in mind?
              </div>
              <div className="contact-blob blob-2">
                Reach out and let's make it happen.
              </div>
              <div className="contact-blob blob-3">
                Thank You
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
