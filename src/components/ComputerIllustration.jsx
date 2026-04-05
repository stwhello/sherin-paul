import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ComputerIllustration = ({ scrollTriggerRef }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const fromLeft = svg.querySelectorAll(".from-left");
    const fromRight = svg.querySelectorAll(".from-right");
    const fromCenter = svg.querySelectorAll(".from-center");

    gsap.set(fromLeft, { x: -120, opacity: 0 });
    gsap.set(fromRight, { x: 120, opacity: 0 });
    gsap.set(fromCenter, { scale: 0, opacity: 0, transformOrigin: "center" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTriggerRef?.current || svg,
        start: "top 75%",
      },
    });

    tl.to(fromLeft, {
      x: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
    })
      .to(
        fromRight,
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
        },
        "<",
      )
      .to(
        fromCenter,
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.3",
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars?.trigger === (scrollTriggerRef?.current || svg)) st.kill();
      });
    };
  }, []);

  return (
    <div
      style={{
        marginTop: "clamp(28px, 3vw, 56px)",
        width: "100%",
        maxWidth: "380px",
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 340 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", overflow: "visible" }}
      >
        <rect
          className="from-left"
          x="30"
          y="20"
          width="280"
          height="178"
          rx="12"
          fill="#6C081F"
        />

        {/* ── MONITOR INNER SCREEN BEZEL (from right) ── */}
        <rect
          className="from-right"
          x="44"
          y="34"
          width="252"
          height="150"
          rx="8"
          fill="#F2DDDC"
        />

        {/* ── SCREEN SURFACE (from left) ── */}
        <rect
          className="from-left"
          x="54"
          y="44"
          width="232"
          height="130"
          rx="5"
          fill="#F3F3F3"
        />

        {/* ── CODE LINES on screen (from right, staggered) ── */}
        <rect className="from-right" x="70" y="62" width="80" height="7" rx="3.5" fill="#6C081F" opacity="0.8" />
        <rect className="from-right" x="70" y="76" width="120" height="7" rx="3.5" fill="#F2AEBD" />
        <rect className="from-right" x="70" y="90" width="60" height="7" rx="3.5" fill="#6C081F" opacity="0.5" />
        <rect className="from-right" x="70" y="104" width="100" height="7" rx="3.5" fill="#F2AEBD" opacity="0.7" />
        <rect className="from-right" x="70" y="118" width="75" height="7" rx="3.5" fill="#6C081F" opacity="0.6" />
        <rect className="from-right" x="70" y="132" width="110" height="7" rx="3.5" fill="#F2AEBD" opacity="0.9" />
        <rect className="from-right" x="70" y="146" width="55" height="7" rx="3.5" fill="#6C081F" opacity="0.4" />

        {/* ── CURSOR BLINK DOT (from center) ── */}
        <rect className="from-center" x="158" y="146" width="8" height="9" rx="2" fill="#6C081F" />

        {/* ── MONITOR STAND NECK (from left) ── */}
        <rect
          className="from-left"
          x="155"
          y="198"
          width="30"
          height="34"
          rx="4"
          fill="#6C081F"
        />

        {/* ── MONITOR STAND BASE (from right) ── */}
        <rect
          className="from-right"
          x="108"
          y="228"
          width="124"
          height="16"
          rx="8"
          fill="#6C081F"
        />

        {/* ── KEYBOARD BODY (from left) ── */}
        <rect
          className="from-left"
          x="60"
          y="252"
          width="220"
          height="22"
          rx="6"
          fill="#6C081F"
        />

        {/* ── KEYBOARD KEY ROWS (from right) ── */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <rect
            key={`key-top-${i}`}
            className="from-right"
            x={68 + i * 20}
            y={256}
            width="14"
            height="6"
            rx="2"
            fill="#F2DDDC"
            opacity="0.6"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect
            key={`key-bot-${i}`}
            className="from-right"
            x={74 + i * 22}
            y={264}
            width="16"
            height="6"
            rx="2"
            fill="#F2DDDC"
            opacity="0.4"
          />
        ))}

        {/* ── DECORATIVE CIRCLE top-left (from left) ── */}
        <circle
          className="from-left"
          cx="14"
          cy="14"
          r="10"
          fill="#F2AEBD"
          opacity="0.7"
        />

        {/* ── DECORATIVE CIRCLE top-right large (from right) ── */}
        <circle
          className="from-right"
          cx="326"
          cy="22"
          r="16"
          stroke="#6C081F"
          strokeWidth="2.5"
          fill="none"
          opacity="0.5"
        />

        {/* ── DECORATIVE CIRCLE bottom-right (from right) ── */}
        <circle
          className="from-right"
          cx="318"
          cy="260"
          r="9"
          fill="#F2AEBD"
          opacity="0.8"
        />

        {/* ── DECORATIVE SMALL SQUARE top-left (from left) ── */}
        <rect
          className="from-left"
          x="4"
          y="90"
          width="12"
          height="12"
          rx="2"
          fill="#6C081F"
          opacity="0.3"
        />

        {/* ── DECORATIVE SMALL SQUARE bottom-left (from left) ── */}
        <rect
          className="from-left"
          x="10"
          y="240"
          width="16"
          height="16"
          rx="3"
          stroke="#6C081F"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />

        {/* ── POWER DOT on monitor bezel (from center) ── */}
        <circle
          className="from-center"
          cx="170"
          cy="196"
          r="4"
          fill="#F2AEBD"
        />

        {/* ── CAMERA DOT top center (from center) ── */}
        <circle
          className="from-center"
          cx="170"
          cy="38"
          r="3"
          fill="#F2AEBD"
          opacity="0.7"
        />
      </svg>
    </div>
  );
};

export default ComputerIllustration;
