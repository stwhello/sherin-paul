import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import gsapCoffeeVideo from "../../assets/gsap-coffee.mp4";
import gsapCocktailsVideo from "../../assets/gsap-cocktails.mp4";
import shoeWebsiteVideo from "../../assets/shoe-website.mp4";
import pinterestVideo from "../../assets/pinterest.mp4";

import gsapCoffeeImg from "../../assets/gsap-coffee-pic.webp";
import gsapCocktailsImg from "../../assets/gsap-cocktails-pic.webp";
import shoeWebsiteImg from "../../assets/shoe-website-pic.webp";
import pinterestImage from "../../assets/pinterest-pic.webp";

import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

const projects = [
  {
    title: "GSAP COFFEE",
    subtitle: "Interactive Animated Landing Experience",
    description:
      "A modern, animation-driven landing page inspired by award-winning web design.",
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
      "A visually engaging landing page showcasing advanced scroll animations.",
    tech: ["React", "GSAP", "Tailwind CSS"],
    video: gsapCocktailsVideo,
    image: gsapCocktailsImg,
    live: "https://gsap-cocktails-landing-page.vercel.app/",
    github: "https://github.com/stwhello/gsap_cocktails",
  },
  {
    title: "PINTEREST CLONE",
    subtitle: "Full Stack Image Sharing Platform",
    description:
      "A full-stack app with image uploads and dynamic feed layouts.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    video: pinterestVideo,
    image: pinterestImage,
    live: "",
    github: "https://github.com/stwhello/pinterest-clone",
  },
  {
    title: "E-COMMERCE SHOES",
    subtitle: "Responsive E-Commerce Frontend",
    description:
      "A fully responsive product showcase website with structured UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    video: shoeWebsiteVideo,
    image: shoeWebsiteImg,
    live: "https://e-commerce-shoe-website-two.vercel.app/",
    github: "https://github.com/stwhello/e-commerce-shoe-website",
  },
];

const SelectedWork = () => {
  const [index, setIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const container = useRef();

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    setVideoLoaded(false);
  }, [index]);

  useGSAP(() => {
    gsap.fromTo(
      ".project-media",
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.6 }
    );

    gsap.fromTo(
      ".project-content",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    );
  }, [index]);

  const project = projects[index];

  return (
    <section ref={container} className="container-page px-4 sm:px-6 lg:px-0">
      
      {/* Heading */}
      <div className="text-center">
        <h2 className="heading-font text-[#6C081F] text-[clamp(32px,4vw,80px)]">
          SELECTED WORK
        </h2>
        <p className="body-font text-[#1E1E1E] text-[clamp(13px,3vw,18px)] mt-2">
          Designing and developing high-performance digital experiences.
        </p>
      </div>

      {/* Layout */}
      <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center">
        
        {/* MEDIA */}
        <div className="project-media w-full lg:w-[65%]">
          <div className="rounded-2xl sm:rounded-[20px] overflow-hidden bg-black relative w-full h-55 sm:h-75 md:h-100 lg:h-112.5">
            
            {/* Image fallback */}
            <img
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                videoLoaded ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Video */}
            <video
              key={project.video}
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onCanPlayThrough={() => {
                setTimeout(() => setVideoLoaded(true), 300);
              }}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="project-content w-full lg:w-[35%] relative">
          
          {/* Arrows */}
          <div className="flex justify-between sm:justify-end gap-4 mb-5 sm:mb-6">
            <button onClick={prev}>
              <img src={leftArrow} className="w-8 sm:w-10 lg:w-12" />
            </button>
            <button onClick={next}>
              <img src={rightArrow} className="w-8 sm:w-10 lg:w-12" />
            </button>
          </div>

          {/* Text */}
          <h3 className="heading-font text-[#6C081F] text-[clamp(20px,5vw,32px)]">
            {project.title}
          </h3>

          <p className="body-font font-bold mt-2 text-[clamp(13px,3.5vw,16px)]">
            {project.subtitle}
          </p>

          <p className="body-font mt-3 text-[clamp(12px,3vw,15px)] leading-relaxed">
            {project.description}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-5">
            {project.tech.map((item, i) => (
              <span
                key={i}
                className="px-4 sm:px-6 lg:px-8 py-1 border border-[#6C081F] rounded-full text-[#6C081F] text-xs sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-5 sm:mt-6 flex-wrap">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md bg-[#6C081F] text-white"
              >
                Live Site →
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md border border-[#6C081F] text-[#6C081F]"
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