import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import aboutImg from "../../assets/about.png";
import arrow from "../../assets/arrow.png";

const About = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
    });

    tl.from(".about-image", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(".about-heading", { y: 60, opacity: 0 }, "-=0.4")
      .from(".about-text", { y: 40, opacity: 0 }, "-=0.3")
      .from(
        ".about-tag",
        {
          y: -200,
          opacity: 0,
          rotate: "random(-15,15)",
          duration: 0.9,
          stagger: 0.15,
          ease: "bounce.out",
        },
        "-=0.2",
      )
      .from(".about-arrow", { rotate: -200, opacity: 0 }, "-=0.5");
  });

  return (
    <section ref={container} className='container-page mt-40'>
      {/* CARD */}
      <div className='relative bg-[#F2AEBD] rounded-t-[50px] min-h-125 flex items-center overflow-visible pb-8'>
        {/* IMAGE */}
        <div
          className='absolute left-0 bottom-0'
          style={{ width: "clamp(260px,32vw,520px)" }}
        >
          <img src={aboutImg} alt='Sherin' className='about-image w-full' />
        </div>

        {/* TAGS */}

        {/* Wordpress */}
        <div
          className='about-tag absolute bg-[#F2AEBD] text-[#6C0820] rounded-full whitespace-nowrap'
          style={{
            left: "10%",
            top: "50%",
            fontSize: "clamp(10px,0.9vw,14px)",
            padding: "12px 40px",
          }}
        >
          Wordpress Developer
        </div>

        {/* Shopify */}
        <div
          className='about-tag absolute bg-[#F2AEBD] text-[#6C0820] rounded-full whitespace-nowrap'
          style={{
            left: "6%",
            bottom: "20%",
            fontSize: "clamp(10px,0.9vw,14px)",
            padding: "12px 40px",
          }}
        >
          Shopify Developer
        </div>

        {/* Senior */}
        <div
          className='about-tag absolute bg-[#6C0820] text-white rounded-full whitespace-nowrap'
          style={{
            left: "25%",
            bottom: "25%",
            fontSize: "clamp(10px,0.9vw,14px)",
            padding: "12px 40px",
          }}
        >
          Senior Developer
        </div>

        {/* Full Stack */}
        <div
          className='about-tag absolute bg-[#6C0820] text-white rounded-full whitespace-nowrap'
          style={{
            left: "30%",
            top: "35%",
            transform: "translateX(-20%)",
            fontSize: "clamp(10px,0.9vw,14px)",
            padding: "12px 40px",
          }}
        >
          Full Stack Developer
        </div>

        {/* ARROW */}
        <img
          src={arrow}
          className='about-arrow absolute'
          style={{
            left: "35%",
            top: "10%",
            width: "clamp(60px,8vw,140px)",
          }}
        />

        {/* RIGHT CONTENT */}
        <div
          className='w-full'
          style={{
            paddingLeft: "clamp(260px,32vw,520px)",
            paddingRight: "clamp(40px,6vw,120px)",
          }}
        >
          <div className='max-w-150 ml-auto text-right '>
            <h2
              className='about-heading heading-font text-[#6C081F]'
              style={{ fontSize: "clamp(48px,5vw,96px)" }}
            >
              ABOUT ME
            </h2>

            <p
              className='about-text body-font text-[#6C081F]'
              style={{
                fontSize: "clamp(14px,1.1vw,20px)",
                lineHeight: "1.7",
              }}
            >
              I’m a <strong>Full Stack Developer</strong> based in Pune with a
              <strong> Master’s degree in Computer Science</strong>. I build
              <strong> modern, scalable web applications</strong> using the
              <strong> MERN stack, WordPress, and Shopify</strong>, focusing on
              clean architecture, strong performance, and intuitive user
              experiences.
              <br />
              Within my first year in the industry, I was promoted to
              <strong> Senior Developer</strong> for consistently delivering
              <strong> production-grade solutions</strong> and taking ownership
              of complex projects. I’ve worked on platforms for organizations
              such as
              <strong> MAAC</strong> and <strong>Arena Animation</strong>,
              building responsive interfaces, reliable backend systems, and
              <strong> high-performance digital products</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
