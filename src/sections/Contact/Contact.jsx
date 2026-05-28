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

    tl.from(".contact-card", {
      y: 80,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    })
      .from(
        ".contact-heading",
        {
          y: -40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".contact-info-item",
        {
          x: -40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".contact-blob",
        {
          scale: 0.8,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .from(
        ".contact-star",
        {
          scale: 0,
          rotate: -90,
          duration: 0.5,
          ease: "back.out(2)",
        },
        "-=0.5"
      );
  });

  return (
    <section
      id="contact"
      ref={container}
      className="container-page"
      style={{
        paddingTop: "clamp(40px,5vw,100px)",
        paddingBottom: "clamp(40px,5vw,100px)",
      }}
    >
      <style>{`
        .contact-card {
          position: relative;
          width: 100%;
          background: #FDD0DA;
          border: clamp(4px,0.4vw,8px) solid #6C081F;
          border-radius: clamp(26px,2.5vw,50px);
          padding:
            clamp(40px,5vw,90px)
            clamp(24px,5vw,80px);

          overflow: hidden;
        }

        .contact-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: clamp(40px,5vw,100px);
        }

        /* ───────── LEFT ───────── */

        .contact-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-heading {
          text-align: center;
          margin-bottom: clamp(40px,5vw,70px);
        }

        .contact-script {
          display: block;
          color: #6C081F;
          font-family: "Parisienne", cursive;
          font-size: clamp(36px,4vw,64px);
          font-weight: 400;
          line-height: 1;
        }

        .contact-bold {
          display: block;
          color: #6C081F;
          font-family: "Bebas Neue", sans-serif;
          font-size: clamp(64px,8vw,128px);
          font-weight: 400;
          line-height: 0.9;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: clamp(30px,4vw,60px);
        }

        .contact-info-item {
          display: flex;
          flex-direction: column;
        }

        .contact-label {
          color: #6C081F;
          font-family: "Parisienne", cursive;
          font-size: clamp(28px,3vw,48px);
          font-weight: 400;
          line-height: 1;
        }

        .contact-value {
          color: #1E1E1E;
          font-family: "Bebas Neue", sans-serif;
          font-size: clamp(22px,2.5vw,40px);
          font-weight: 400;
          line-height: 1.2;
          text-decoration: none;
          transition: 0.25s ease;
          word-break: break-word;
        }

        .contact-value:hover {
          color: #6C081F;
        }

        .contact-link {
          text-decoration: none;
          width: fit-content;
        }

        /* ───────── RIGHT ───────── */

        .contact-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .blob-stack {
          position: relative;
          width: clamp(280px,32vw,520px);
          height: clamp(380px,38vw,620px);
        }

        .contact-blob {
          position: absolute;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          color: #1E1E1E;
          font-family: "Lato", sans-serif;
          font-size: clamp(18px,1.8vw,32px);
          font-weight: 700;
          line-height: 1.25;

          padding: 20px;
        }

        .blob-1 {
          width: clamp(240px,26vw,427px);
          height: clamp(100px,10vw,170px);

          border-radius: 999px;
          background: #FEDE6F;

          transform: rotate(5.835deg);

          top: 0;
          right: 0;

          z-index: 3;
        }

        .blob-2 {
          width: clamp(250px,27vw,442px);
          height: clamp(110px,10vw,174px);

          background: #C5B2E9;

          transform: rotate(-3.095deg);

          top: 140px;
          right: 10px;

          z-index: 2;
        }

        .blob-3 {
          width: clamp(240px,26vw,427px);
          height: clamp(120px,11vw,190px);

          border-radius: 999px;
          background: #F581A4;

          transform: rotate(5.835deg);

          bottom: 0;
          right: 20px;

          z-index: 1;
        }

        .contact-star {
          position: absolute;

          width: clamp(55px,5vw,100px);
          height: clamp(55px,5vw,100px);

          top: clamp(10px,1vw,20px);
          left: clamp(0px,2vw,30px);

          z-index: 10;
        }

        /* ───────── MOBILE ───────── */

        @media (max-width: 900px) {

          .contact-card {
            padding:
              clamp(28px,8vw,50px)
              clamp(20px,6vw,36px);
          }

          .contact-inner {
            flex-direction: column;
            align-items: center;
            gap: 70px;
          }

          .contact-left {
            width: 100%;
            align-items: center;
            text-align: center;
          }

          .contact-heading {
            margin-bottom: 40px;
          }

          .contact-info {
            width: 100%;
            gap: 36px;
          }

          .contact-link {
            width: 100%;
          }

          .contact-value {
            font-size: clamp(22px,6vw,34px);
          }

          .blob-stack {
            width: min(90vw, 420px);
            height: 430px;
          }

          .blob-1 {
            top: 0;
            right: 0;
          }

          .blob-2 {
            top: 120px;
            right: 0;
          }

          .blob-3 {
            bottom: 0;
            right: 0;
          }

          .contact-star {
            left: -10px;
            top: 10px;
          }
        }

        @media (max-width: 560px) {

          .contact-card {
            border-width: 4px;
            border-radius: 28px;
          }

          .contact-script {
            font-size: 38px;
          }

          .contact-bold {
            font-size: 72px;
          }

          .contact-label {
            font-size: 34px;
          }

          .contact-value {
            font-size: 24px;
            line-height: 1.1;
          }

          .blob-stack {
            width: 100%;
            height: 360px;
          }

          .contact-blob {
            font-size: 20px;
          }

          .blob-1 {
            width: 250px;
            height: 100px;
          }

          .blob-2 {
            width: 260px;
            height: 110px;
            top: 105px;
          }

          .blob-3 {
            width: 250px;
            height: 110px;
          }

          .contact-star {
            width: 60px;
            height: 60px;
            left: 0;
          }
        }
      `}</style>

      <div className="contact-card">

        {/* LEFT */}
        <div className="contact-inner">

          <div className="contact-left">

            <div className="contact-heading">
              <span className="contact-script">Let’s Work</span>
              <span className="contact-bold">TOGETHER</span>
            </div>

            <div className="contact-info">

              <div className="contact-info-item">
                <span className="contact-label">Phone</span>

                <a
                  href="tel:+919579245383"
                  className="contact-link"
                >
                  <span className="contact-value">
                    +91 95792 45383
                  </span>
                </a>
              </div>

              <div className="contact-info-item">
                <span className="contact-label">Email</span>

                <a
                  href="mailto:sherinpaul2001@gmail.com"
                  className="contact-link"
                >
                  <span className="contact-value">
                    SHERINPAUL2001@GMAIL.COM
                  </span>
                </a>
              </div>

              <div className="contact-info-item">
                <span className="contact-label">LinkedIn</span>

                <a
                  href="https://www.linkedin.com/in/sherinann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-value">
                    LINKEDIN.COM/IN/SHERINANN
                  </span>
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT */}
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

              <div className="contact-blob blob-1">
                Have a project in mind?
              </div>

              <div className="contact-blob blob-2">
                Reach out and let’s make it happen.
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