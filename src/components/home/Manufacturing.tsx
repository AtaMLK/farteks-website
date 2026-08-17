"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown, Factory, Gauge, ScanLine, Wrench } from "lucide-react";

const STAGES = [
  {
    eyebrow: "MANUFACTURING",
    title: "Engineered for precision.",
    body: "Every component begins with controlled geometry, disciplined machining and a production process designed around repeatable accuracy.",
    icon: Factory,
    range: [0, 0.15],
  },
  {
    eyebrow: "ENGINEERING",
    title: "Precision in every component.",
    body: "Critical dimensions, material quality and machining tolerances are controlled throughout the manufacturing process.",
    icon: Gauge,
    range: [0.15, 0.35],
  },
  {
    eyebrow: "PRODUCTION",
    title: "From raw material to finished component.",
    body: "Turning, milling, forming, finishing and inspection come together in one controlled production workflow.",
    icon: Wrench,
    range: [0.35, 0.6],
  },
  {
    eyebrow: "QUALITY",
    title: "Built for demanding applications.",
    body: "The finished component is evaluated as part of a manufacturing process focused on consistency, fit and reliable performance.",
    icon: ScanLine,
    range: [0.6, 0.8],
  },
];

export function Manufacturing() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const durationRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const video = videoRef.current;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mediaQuery.matches;

    const setVideoTime = () => {
      if (!video || !durationRef.current || reducedMotionRef.current) return;

      const target = progressRef.current * durationRef.current;
      if (Math.abs(video.currentTime - target) < 0.012) return;

      video.currentTime = target;
    };

    const requestVideoFrame = () => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        setVideoTime();
      });
    };

    const ctx = gsap.context(() => {
      gsap.set(stageRefs.current, { autoAlpha: 0, y: 42, filter: "blur(8px)" });
      gsap.set(stageRefs.current[0], { autoAlpha: 1, y: 0, filter: "blur(0px)" });

      const contentTimeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.45,
          invalidateOnRefresh: true,
          onEnter: () => {
            if (video && !reducedMotionRef.current && video.preload !== "auto") {
              video.preload = "auto";
              video.load();
            }
          },
          onUpdate: (self) => {
            progressRef.current = self.progress;
            requestVideoFrame();
          },
        },
      });

      // The content is deliberately sparse. Each stage owns a defined part of
      // the same timeline as the video rather than reacting to arbitrary scroll events.
      stageRefs.current.forEach((stage, index) => {
        if (!stage) return;
        const start = STAGES[index].range[0] * 100;
        const end = STAGES[index].range[1] * 100;
        const duration = Math.max(end - start, 1);

        if (index === 0) {
          contentTimeline.to(stage, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: duration * 0.18 }, start);
        } else {
          contentTimeline.to(stageRefs.current[index - 1], { autoAlpha: 0, y: -26, filter: "blur(8px)", duration: duration * 0.18 }, start);
          contentTimeline.to(stage, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: duration * 0.24 }, start + duration * 0.08);
          contentTimeline.to(stage, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: duration * 0.45 }, start + duration * 0.32);
          contentTimeline.to(stage, { autoAlpha: 0, y: -26, filter: "blur(8px)", duration: duration * 0.13 }, end - duration * 0.13);
        }
      });

      // Final CTA is tied to the last part of the same scroll timeline.
      const cta = document.querySelector<HTMLElement>("[data-manufacturing-cta]");
      if (cta) {
        gsap.set(cta, { autoAlpha: 0, y: 32 });
        contentTimeline.to(cta, { autoAlpha: 1, y: 0, duration: 8 }, 82);
        contentTimeline.to(cta, { autoAlpha: 0.98, y: 0, duration: 10 }, 90);
      }
    }, section);

    const handleMetadata = () => {
      if (!video) return;
      durationRef.current = Number.isFinite(video.duration) ? video.duration : 0;
      requestVideoFrame();
    };

    video?.addEventListener("loadedmetadata", handleMetadata);
    video?.addEventListener("durationchange", handleMetadata);

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;
      if (event.matches && video) video.currentTime = 0;
      if (!event.matches) requestVideoFrame();
    };

    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      video?.removeEventListener("loadedmetadata", handleMetadata);
      video?.removeEventListener("durationchange", handleMetadata);
      mediaQuery.removeEventListener("change", handleMotionPreference);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[520vh] overflow-clip bg-[#111214] text-white">
      <div className="sticky top-0 h-svh min-h-[620px] overflow-hidden">
        {/* Visual layer */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#17181b]" />
          <img
            src="/images/factory/manufacturing.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.92]"
            src="/videos/manufacturing-cylinder.mp4"
            poster="/images/factory/manufacturing.jpg"
            muted
            playsInline
            preload="metadata"
            aria-label="Hydraulic cylinder manufacturing assembly animation"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_45%,rgba(255,255,255,0.11),transparent_34%),linear-gradient(90deg,rgba(10,11,13,0.94)_0%,rgba(10,11,13,0.62)_32%,rgba(10,11,13,0.16)_65%,rgba(10,11,13,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.52)_0%,transparent_22%,transparent_76%,rgba(10,11,13,0.78)_100%)]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        {/* Quiet technical UI */}
        <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between md:left-10 md:right-10 md:top-10">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
            <span className="h-px w-8 bg-[#E5322D]" />
            Manufacturing / 01
          </div>
          <div className="hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 md:flex">
            Precision components
            <span className="h-1.5 w-1.5 rounded-full bg-[#E5322D]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto h-full w-full max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="flex h-full items-center">
            <div className="relative w-full max-w-xl lg:max-w-2xl">
              {STAGES.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={stage.title}
                    ref={(node) => {
                      stageRefs.current[index] = node;
                    }}
                    className="absolute left-0 top-1/2 w-full -translate-y-1/2 will-change-transform"
                  >
                    <div className="mb-6 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.3em] text-white/60">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-md">
                        <Icon size={15} strokeWidth={1.7} />
                      </span>
                      <span>{stage.eyebrow}</span>
                    </div>
                    <h2 className="max-w-2xl text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                      {stage.title}
                    </h2>
                    <p className="mt-7 max-w-lg text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
                      {stage.body}
                    </p>
                  </div>
                );
              })}

              <div
                data-manufacturing-cta
                className="absolute left-0 top-1/2 w-full -translate-y-1/2 will-change-transform"
              >
                <div className="mb-6 text-[11px] font-extrabold uppercase tracking-[0.3em] text-white/55">
                  FARTEKS MANUFACTURING
                </div>
                <h2 className="max-w-3xl text-4xl font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                  Explore our manufacturing capabilities.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                  Discover the production capabilities behind our hydraulic cylinder components.
                </p>
                <Link
                  href="/manufacturing"
                  className="group mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-[#E5322D] px-7 text-sm font-bold text-white shadow-[0_18px_50px_rgba(229,50,45,.24)] transition-transform duration-300 hover:-translate-y-1"
                >
                  Explore Manufacturing
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-6 right-6 z-20 flex items-end justify-between md:left-10 md:right-10">
          <div className="hidden max-w-xs text-[10px] font-medium uppercase leading-5 tracking-[0.18em] text-white/35 md:block">
            Scroll to assemble the complete hydraulic cylinder
          </div>
          <div className="ml-auto flex flex-col items-center gap-2 text-white/40">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em]">Scroll</span>
            <ChevronDown size={15} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
