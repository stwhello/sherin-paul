import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import gsapCoffeeVideo from "../../assets/gsap-coffee.mp4";
import gsapCocktailsVideo from "../../assets/gsap-cocktails.mp4";
import shoeWebsiteVideo from "../../assets/shoe-website.mp4";
import gsapCoffeeImg from "../../assets/gsap-coffee-pic.png";
import gsapCocktailsImg from "../../assets/gsap-cocktails-pic.png";
import shoeWebsiteImg from "../../assets/shoe-website-pic.png";
import pinterestImage from "../../assets/gsap-coffee-pic.png"; 
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

const projects = [
  {
    title: "GSAP COFFEE",
    subtitle: "Interactive Animated Landing Experience",
    description:
      "A modern, animation-driven landing page inspired by award-winning web design. Built with performance-focused smooth scroll effects and immersive UI interactions.",
    tech: ["React", "Tailwind CSS", "GSAP"],
    video: gsapCoffeeVideo,
    image: gsapCoffeeImg,
    live: "https://gsap-coffee.vercel.app/",
    github: "https://github.com/stwhello/gsap-coffee",
  },
  {
    title: "GSAP COCKTAILS",
    subtitle: "Cocktail-Themed Animated Landing Page",
    description:
      "A visually engaging landing page showcasing advanced scroll animations and dynamic content transitions.",
    tech: ["React", "GSAP", "Tailwind CSS"],
    video: gsapCocktailsVideo,
    image: gsapCocktailsImg,
    live: "https://gsap-cocktails-landing-page.vercel.app/",
    github: "",
  },
  {
    title: "PINTEREST CLONE",
    subtitle: "Full Stack Image Sharing Platform",
    description:
      "A full-stack web app enabling image uploads, previews, and dynamic feed layouts.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    video: null,
    image: pinterestImage,
    live: "",
    github: "https://github.com/stwhello/pinterest-clone",
  },
  {
    title: "E-COMMERCE SHOES",
    subtitle: "Responsive E-Commerce Frontend",
    description:
      "A responsive product showcase website with optimized UI and structured layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    video: shoeWebsiteVideo,
    image: shoeWebsiteImg,
    live: "https://e-commerce-shoe-website-two.vercel.app/",
    github: "https://github.com/stwhello/e-commerce-shoe-website",
  },
];

const SelectedWork = () => {
  const [index, setIndex] = useState(0);
  const container = useRef();

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useGSAP(() => {
    gsap.fromTo(
      ".project-media",
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      ".project-content",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.1 }
    );
  }, [index]);

  const project = projects[index];

  return (
    <section ref={container} className="container-page mt-40">
      
      {/* HEADING */}
      <div className="text-center">
        <h2 className="heading-font text-[#6C081F] text-[clamp(48px,5vw,80px)]">
          SELECTED WORK
        </h2>
        <p className="body-font text-[#6C081F] mt-3 text-[clamp(14px,1.2vw,18px)]">
          Designing and developing high-performance digital experiences that help brands grow online.
        </p>
      </div>

      {/* CONTENT */}
      <div className="mt-16 flex flex-col lg:flex-row gap-10 items-center">
        
        {/* LEFT - VIDEO */}
        <div className="project-media w-full lg:w-[65%]">
          <div className="rounded-[20px] overflow-hidden bg-gray-200">
            <video
              key={project.video}
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div className="project-content w-full lg:w-[35%] relative">
          
          {/* ARROWS */}
          <div className="flex gap-4 justify-end mb-6">
            <button onClick={prev} className="w-10 h-10 border border-[#6C081F] rounded-full flex items-center justify-center hover:bg-[#6C081F] transition">
              <img src={leftArrow} className="w-4" />
            </button>
            <button onClick={next} className="w-10 h-10 border border-[#6C081F] rounded-full flex items-center justify-center hover:bg-[#6C081F] transition">
              <img src={rightArrow} className="w-4" />
            </button>
          </div>

          <h3 className="heading-font text-[#6C081F] text-[clamp(24px,2.5vw,32px)]">
            {project.title}
          </h3>

          <p className="body-font text-[#6C081F] mt-2 text-[clamp(14px,1.1vw,16px)]">
            {project.subtitle}
          </p>

          <p className="body-font text-[#6C081F] mt-3 text-[clamp(13px,1vw,15px)] leading-relaxed">
            {project.description}
          </p>

          {/* TECH TAGS */}
          <div className="flex flex-wrap gap-3 mt-5">
            {project.tech.map((item, i) => (
              <span
                key={i}
                className="px-4 py-1 border border-[#6C081F] rounded-full text-[#6C081F] text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* LINKS */}
          <div className="flex gap-4 mt-6">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="btn btn-outline-dark"
              >
                Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="btn btn-outline-dark"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;