// Style
import "./App.css";

// Components
import Chapter from "./components/Chapter";

// Imgs
import bigCloud from "./assets/big-cloud.png";
import treeBranch from "./assets/treebranch_5617544.png";
import bg1 from "./assets/wooden-surface-with-books-blank-space.jpg"
import bg2 from "./assets/front-view-book-with-blue-background.jpg"
import bg3 from "./assets/creative-arrangement-with-different-books.jpg"
import bg4 from "./assets/four-open-books-with-space-right.jpg"


// Book Cover Imgs
import bookOneCover from "./assets/book1.jpg";
import bookTwoCover from "./assets/book2.jpg";
import bookThreeCover from "./assets/book3.jpg";
import bookFourCover from "./assets/book4.jpg";
import bookFiveCover from "./assets/book5.jpg";

// Gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const heroSection = useRef(null);
  const horizontalSection = useRef(null);
  const framesSection = useRef(null);
  let windowWidth = window.innerWidth;

  // Hero Section Animation
  useGSAP(() => {
    // Create ScrollSmoother
    let scrollSmooth = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      normalizeScroll: true,
      smoothTouch: 0.4,
    });

    // Website Intro
    const heroSectionTl = gsap.timeline({
      onStart: () => {
        scrollSmooth.paused(true);
      },
      onComplete: () => {
        scrollSmooth.paused(false);
      },
    });
    heroSectionTl.from(heroSection.current, {
      delay: 0.5,
      duration: 1,
      clipPath: "inset(30% 20% 30% 20% )",
    });

    heroSectionTl.from(
      ".hero-text div :is(span ,p)",
      {
        duration: 1,
        clipPath: "inset(100% 0% 0% 0% )",
      },
      "<10%"
    );

    // Animation Clouds
    gsap.set(".cloud", {
      y: `random(0,500)`,
      scale: "random(0.3,1)",
    });

    gsap.fromTo(
      ".cloud",
      {
        x: `random(0,${windowWidth})`,
      },
      {
        x: `random(0,${windowWidth})`,
        duration: 60,
        ease: "none",
        stagger: {
          repeat: -1,
          yoyo: true,
        },
      }
    );

    // Animation branch
    gsap.to(".branch-1", {
      y: 100,
      rotate: -20,
      scrollTrigger: {
        ease: "none",
        trigger: heroSection.current,
        start: "top top",
        end: "=+400",
        scrub: true,
      },
    });

    gsap.to(".branch-2", {
      y: 100,
      rotate: 20,
      scrollTrigger: {
        ease: "none",
        trigger: heroSection.current,
        start: "top top",
        end: "=+400",
        scrub: true,
      },
    });

    // Animation big Clouds
    gsap.to(".bigCloud", {
      scale: 1.2,
      scrollTrigger: {
        ease: "none",
        trigger: heroSection.current,
        start: "top top",
        end: "=+400",
        scrub: true,
      },
    });

    gsap.to(".hero-text div :is(span ,p)", {
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        ease: "none",
        trigger: heroSection.current,
        start: "=+400 center",
        scrub: true,
      },
    });

    // HandelResize Page
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Horizontal Section
  useGSAP(
    () => {
      const chapters = gsap.utils.toArray(".chapter");

      const HS = gsap.to(chapters, {
        xPercent: -100 * (chapters.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontalSection",
          pin: true,
          start: "top top",
          end: `+=${chapters.length * 1000}px`,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      chapters.forEach((chapter, i) => {
        const chapterElements = chapter.querySelectorAll(
          ":is(.book-img,.content)"
        );

        if (i !== 0) {
          gsap.from(chapterElements, {
            opacity: 0,
            y: 120,
            rotate: 20,
            scrollTrigger: {
              trigger: chapter,
              start: "top center",
              containerAnimation: HS,
              stagger: 0.5,
              toggleActions: "play reverse play reverse",
            },
          });
        }
      });
    },
    { scope: horizontalSection }
  );

  // Frames Section
  useGSAP(
    () => {
      const frames = gsap.utils.toArray(".frame");
      const framesTl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: framesSection.current,
          start: "top top",
          end: "+=4000px",
          pin: true,
          scrub: 1,
        },
      });
      frames.forEach((frame, i) => {
        if (i !== frames.length - 1) {
          framesTl.to(frame, {
            clipPath: "inset(0 0 100% 0)",
          });
        }
      });
    },
    { scope: framesSection }
  );

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {/* Hero Section */}
        <section
          ref={heroSection}
          className="relative h-screen bg-linear-to-b from-sky-500 to-sky-200  select-none"
        >
          {/* Clouds , branch */}
          <div className="hero-items absolute h-full w-full ">
            <img
              src={bigCloud}
              className="cloud w-80 absolute "
              alt="bigCloud"
            />
            <img
              src={bigCloud}
              className="cloud w-80 absolute"
              alt="bigCloud"
            />
            <img
              src={bigCloud}
              className="cloud w-80 absolute"
              alt="bigCloud"
            />
            <img
              src={bigCloud}
              className="cloud w-80 absolute"
              alt="bigCloud"
            />
            <img
              src={bigCloud}
              className="cloud w-80 absolute"
              alt="bigCloud"
            />
            <img
              src={bigCloud}
              className="cloud w-80 absolute"
              alt="bigCloud"
            />
            {/* Bottom Clouds */}
            <img
              src={bigCloud}
              className="bigCloud w-320 absolute max-md:bottom-[-150px] bottom-[-300px] left-[-200px] z-2"
              alt="bigCloud"
            />
            <img
              src={bigCloud}
              className="bigCloud w-280 absolute max-md:bottom-[-150px] bottom-[-300px] right-[-150px] z-1"
              alt="bigCloud"
            />

            <img
              src={treeBranch}
              className="branch-1 w-80 md:w-140 lg:w-170 absolute bottom-0 z-1"
              alt="treeBranch"
            />
            <img
              src={treeBranch}
              className="branch-2 w-80 md:w-140 lg:w-170 absolute top-10 right-0  rotate-y-180 "
              alt="treeBranch"
            />
          </div>
          <div className="hero-text absolute h-screen w-full flex items-center justify-center  max-sm:p-5">
            <div className="md:w-200 text-center">
              <span className="text-4xl font-bold">
                The <span className="text-white">Clouds</span> Forgot Her
              </span>
              <br />
              <span className="text-8xl md:text-[200px] font-bold text-white">
                Name
              </span>
              <p className="font-bold mt-5 max-sm:text-sm">
                Clouds are white or gray shapes that float in the sky. They are
                made of tiny water droplets or ice crystals. Clouds help control
                the weather and bring rain, snow, or shade on sunny days. They
                also make the sky look calm and beautiful.
              </p>
            </div>
          </div>
        </section>
        {/* Chapters Section */}
        <section
          ref={horizontalSection}
          className="relative w-full overflow-hidden "
        >
          <div className="horizontalSection relative w-full min-w-fit flex nowrap ">
            {/* Book Intro */}
            <div className="chapter bg-linear-to-b from-sky-200 to-sky-500  relative h-screen w-screen p-30 flex pl-20 justify-center flex-col">
              <span className="text-red-500 font-bold  text-4xl min-lg:text-6xl">
                A Book by
              </span>
              <h1 className="text-5xl min-lg:text-[200px] font-bold text-nowrap">
                Alice White
              </h1>
            </div>
            {/* Chapters */}
            <Chapter
              title="Chapter1"
              name="The Power of Small Changes"
              content="Small changes may seem insignificant at first, but over time they create powerful results. When you focus on improving just one percent every day, those improvements compound into remarkable growth. Success is rarely the result of one big action, but rather a collection of consistent small steps."
              img={bookOneCover}
              bg="#dd715c"
            />
            <Chapter
              title="Chapter2"
              name="Building Better Habits"
              content="Habits shape our identity more than our goals do. What you repeatedly do every day defines who you become. By designing your environment and routines carefully, you can make good habits easier to follow and bad habits harder to maintain."
              img={bookTwoCover}
              bg="#c40c21"
            />
            <Chapter
              title="Chapter3"
              name="Focus in a Distracted World"
              content="In a world full of notifications and constant noise, deep focus has become a rare skill. Learning how to protect your attention allows you to produce higher-quality work in less time. Focus is not about doing more, but about doing what truly matters."
              img={bookThreeCover}
              bg="#80411b"
            />
            <Chapter
              title="Chapter4"
              name="Consistency Over Motivation"
              content="Motivation comes and goes, but consistency builds lasting progress. Relying on discipline instead of mood helps you stay on track even on difficult days. The people who succeed are not always the most motivated, but the most consistent."
              img={bookFourCover}
              bg="#bacfde"
            />
            <Chapter
              title="Chapter5"
              name="The Long-Term Mindset"
              content="True growth requires patience and trust in the process. Results often lag behind effort, making it easy to give up too early. Those who think long-term understand that meaningful success is built over months and years, not overnight."
              img={bookFiveCover}
              bg="#d65600"
            />
          </div>
        </section>
        {/* Frame Section */}
        <div className="relative">
          <div
            ref={framesSection}
            className="relative h-screen text-center text-white uppercase "
          >
            <div className="frame absolute inset-0 size-full flex justify-center items-center z-4 bg-amber-400">
              <h2 className="absolute text-3xl"> A book is a window that opens <br /> your mind to new worlds and ideas</h2>
              <img src={bg1} alt="bg1" className="size-full object-cover" />
            </div>
            <div className="frame absolute inset-0 size-full flex justify-center items-center z-3 bg-amber-800">
              <h2 className="absolute text-3xl">Reading a single book can change <br />the way you think forever</h2>
              <img src={bg2} alt="bg2" className="size-full object-cover" />
            </div>
            <div className="frame absolute inset-0 size-full flex justify-center items-center z-2 bg-red-900">
              <h2 className="absolute text-3xl">A book is a silent friend that gives <br /> knowledge without asking for anything in return</h2>
              <img src={bg3} alt="bg3" className="size-full object-cover" />
            </div>
            <div className="frame absolute inset-0 size-full flex justify-center items-center z-1 bg-gray-700">
              <h2 className="absolute text-3xl">Inside a book’s pages are ideas powerful <br /> enough to shape a different mind</h2>
              <img src={bg4} alt="bg4" className="size-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
