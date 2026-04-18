import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import gsapCoffeeVideo from "../../assets/gsap-coffee.mp4";
import gsapCocktailsVideo from "../../assets/gsap-cocktails.mp4";
import shoeWebsiteVideo from "../../assets/shoe-website.mp4";
import gsapCoffeeImg from "../../assets/gsap-coffee-pic.webp";
import gsapCocktailsImg from "../../assets/gsap-cocktails-pic.webp";
import shoeWebsiteImg from "../../assets/shoe-website-pic.webp";
import pinterestImage from "../../assets/gsap-coffee-pic.webp";
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
      "A visually engaging landing page showcasing advanced scroll animations and dynamic content transitions. Designed to demonstrate interactive frontend architecture.",
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
      "A full-stack web application enabling image uploads, previews, and dynamic feed layouts. Focused on scalable architecture and modular frontend components.",
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
      "A fully responsive product showcase website with structured layouts and optimized UI components.",
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
      { opacity: 1, scale: 1, duration: 0.6 },
    );

    gsap.fromTo(
      ".project-content",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
    );
  }, [index]);

  const project = projects[index];

  return (
    <section ref={container} className='container-page'>
      <div className='text-center'>
        <h2 className='heading-font text-[#6C081F] text-[clamp(48px,5vw,80px)]'>
          SELECTED WORK
        </h2>
        <p className='body-font text-[#1E1E1E] text-[clamp(14px,1.2vw,18px)]'>
          Designing and developing high-performance digital experiences that
          help brands grow online.
        </p>
      </div>

      <div className='mt-12 flex flex-col lg:flex-row gap-10 items-center'>
        <div className='project-media w-full lg:w-[65%]'>
          <div className='rounded-[20px] overflow-hidden bg-gray-200 relative aspect-video'>
            <img
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 z-10 ${
                videoLoaded ? "opacity-0" : "opacity-100"
              }`}
            />
            {project.video && (
              <video
                key={project.video}
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                preload='metadata'
                onCanPlayThrough={() => {
                  setTimeout(() => {
                    setVideoLoaded(true);
                  }, 300);
                }}
                className={`w-full h-full object-cover transition-opacity duration-700 z-20 ${
                  videoLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </div>
        </div>

        <div className='project-content w-full lg:w-[35%] relative'>
          <div className='flex gap-4 justify-end mb-6'>
            <button
              onClick={prev}
              className='group transition-all duration-300 active:scale-90'
            >
              <img
                src={leftArrow}
                className='w-12 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:brightness-110'
              />
            </button>

            <button
              onClick={next}
              className='group transition-all duration-300 active:scale-90'
            >
              <img
                src={rightArrow}
                className='w-12 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:brightness-110'
              />
            </button>
          </div>

          <h3 className='heading-font text-[#6C081F] text-[clamp(24px,2.5vw,32px)]'>
            {project.title}
          </h3>

          <p className='body-font text-[#1E1E1E] font-bold mt-2 text-[clamp(14px,1.1vw,16px)]'>
            {project.subtitle}
          </p>

          <p className='body-font text-[#1E1E1E] mt-3 text-[clamp(13px,1vw,15px)] leading-relaxed'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-3 mt-5'>
            {project.tech.map((item, i) => (
              <span
                key={i}
                className='px-8 py-1 border border-[#6C081F] rounded-full text-[#6C081F] text-sm'
              >
                {item}
              </span>
            ))}
          </div>

          <div className='flex gap-3 mt-6'>
            {project.live && (
              <a
                href={project.live}
                target='_blank'
                className='px-4 py-2 text-sm rounded-md bg-[#6C081F] text-white hover:bg-[#520615] transition-all duration-300 hover:-translate-y-0.5'
              >
                Live Site →
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target='_blank'
                className='px-4 py-2 text-sm rounded-md border border-[#6C081F] text-[#6C081F] hover:bg-[#6C081F] hover:text-white transition-all duration-300 hover:-translate-y-0.5'
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
