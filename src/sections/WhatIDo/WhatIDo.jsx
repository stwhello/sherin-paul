import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import arrow from "../../assets/acc-arrow.png";
import ComputerIllustration from "../../components/ComputerIllustration";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Frontend Development",
    desc: "Crafting sleek, responsive, and engaging user interfaces.",
    tags: ["React", "Next.js", "Tailwind", "GSAP"],
  },
  {
    title: "Backend Development",
    desc: "Building the logic that keeps your product fast and reliable.",
    tags: ["Node.js", "Express", "Django"],
  },
  {
    title: "Database Architecture",
    desc: "Designing secure and scalable data foundations.",
    tags: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "CMS & Commerce",
    desc: "Empowering brands with easy content control and online selling.",
    tags: ["Shopify", "WordPress"],
  },
  {
    title: "Cloud & Automation",
    desc: "Launching, scaling, and maintaining products with modern workflows.",
    tags: ["AWS", "Docker", "GitHub Actions"],
  },
];

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const tagsRef = useRef(null);
  const tagsWrapRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const tagsWrap = tagsWrapRef.current;
    const tags = tagsRef.current;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      gsap.set(tagsWrap, { display: "none", height: 0, opacity: 0 });
      return;
    }

    if (isOpen) {
      gsap.set(tagsWrap, { display: "block" });
      gsap.fromTo(
        tagsWrap,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" },
      );
      gsap.fromTo(
        tags.children,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.07,
          ease: "power2.out",
          delay: 0.15,
        },
      );
    } else {
      gsap.to(tagsWrap, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
        onComplete: () => gsap.set(tagsWrap, { display: "none" }),
      });
    }
  }, [isOpen]);

  return (
    <div
      className='accordion-item cursor-pointer'
      style={{
        background: "#F2AEBD",
        border: "1px solid #F2AEBD",
        borderRadius: "10px",
        marginBottom: "clamp(8px, 0.7vw, 14px)",
      }}
      onClick={onToggle}
    >
      <div
        className='flex items-center justify-between'
        style={{
          padding:
            "clamp(12px, 1vw, 18px) clamp(16px, 2vw, 36px) clamp(4px, 0.3vw, 6px)",
        }}
      >
        <h3
          className='heading-font text-[#6C081F] leading-normal'
          style={{ fontSize: "clamp(14px, 1.5vw, 28px)" }}
        >
          {item.title}
        </h3>
        <img
          src={arrow}
          alt='toggle'
          style={{
            width: "clamp(18px, 1.6vw, 28px)",
            height: "clamp(18px, 1.6vw, 28px)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.4s ease",
            flexShrink: 0,
          }}
        />
      </div>

      <div
        style={{
          padding: "0 clamp(16px, 2vw, 36px) clamp(20px, 1.8vw, 32px)",
        }}
      >
        <p
          className='body-font'
          style={{
            color: "#111111",
            fontSize: "clamp(12px, 0.9vw, 16px)",
            lineHeight: "1.5",
          }}
        >
          {item.desc}
        </p>

        <div
          ref={tagsWrapRef}
          style={{
            overflow: "hidden",
            paddingBottom: "6px", 
          }}
        >
          <div
            ref={tagsRef}
            className='flex flex-wrap'
            style={{
              gap: "clamp(5px, 0.5vw, 8px)",
              marginTop: "clamp(10px, 0.8vw, 14px)",
            }}
          >
            {item.tags.map((tag) => (
              <span
                key={tag}
                className='body-font text-[#6C081F]'
                style={{
                  border: "1px solid #6C0820",
                  borderRadius: "25px",
                  padding: "clamp(5px, 0.5vw, 10px) clamp(14px, 1.5vw, 36px)",
                  fontSize: "clamp(10px, 0.75vw, 14px)",
                  lineHeight: "1",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatIDo = () => {
  const container = useRef();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
    });

    tl.from(".whatiido-heading", {
      x: -60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".whatiido-desc",
        { x: -40, opacity: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      )
      .from(
        ".accordion-item",
        {
          x: 60,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.5",
      );
  });

  return (
    <section
      ref={container}
      className='container-page'
      style={{
        paddingTop: "clamp(50px, 7vw, 140px)",
        paddingBottom: "clamp(50px, 7vw, 140px)",
      }}
    >
      <div
        className='flex flex-col lg:flex-row lg:items-start'
        style={{ gap: "clamp(30px, 4vw, 80px)" }}
      >
        <div
          className='lg:w-[36%] lg:sticky'
          style={{ top: "clamp(60px, 6vw, 120px)" }}
        >
          <h2
            className='whatiido-heading heading-font text-[#6C081F]'
            style={{
              fontSize: "clamp(36px, 5.5vw, 96px)",
              lineHeight: "clamp(42px, 6.5vw, 120px)",
              fontWeight: 400,
            }}
          >
            WHAT I DO
          </h2>
          <p
            className='whatiido-desc body-font text-[#1E1E1E]'
            style={{
              fontSize: "clamp(13px, 1.2vw, 22px)",
              fontWeight: 400,
              marginTop: "clamp(10px, 1.2vw, 24px)",
              maxWidth: "420px",
              lineHeight: "1.6",
            }}
          >
            Designing and developing high-performance digital experiences that
            help brands grow online.
          </p>
          <ComputerIllustration scrollTriggerRef={container} />
        </div>

        {/* Right */}
        <div className='flex-1'>
          {services.map((item, i) => (
            <AccordionItem
              key={item.title}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
