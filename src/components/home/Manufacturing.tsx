"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Factory, Gauge, ScanLine, Wrench } from "lucide-react";

const STAGES = [
  { eyebrow: "MANUFACTURING", title: "Engineered for precision.", body: "Every component begins with controlled geometry, disciplined machining and a production process designed around repeatable accuracy.", icon: Factory, range: [0, 0.15] },
  { eyebrow: "ENGINEERING", title: "Precision in every component.", body: "Critical dimensions, material quality and machining tolerances are controlled throughout the manufacturing process.", icon: Gauge, range: [0.15, 0.35] },
  { eyebrow: "PRODUCTION", title: "From raw material to finished component.", body: "Turning, milling, forming, finishing and inspection come together in one controlled production workflow.", icon: Wrench, range: [0.35, 0.6] },
  { eyebrow: "QUALITY", title: "Built for demanding applications.", body: "The finished component is evaluated as part of a manufacturing process focused on consistency, fit and reliable performance.", icon: ScanLine, range: [0.6, 0.8] },
];

export function Manufacturing() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;

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
        },
      });

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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] overflow-clip bg-[#111214] text-white md:min-h-[520vh]">
      <div className="sticky top-0 h-svh min-h-[560px] overflow-hidden sm:min-h-[620px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#17181b]" />
          <img src="/images/factory/manufacturing.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_45%,rgba(255,255,255,0.11),transparent_34%),linear-gradient(90deg,rgba(10,11,13,0.94)_0%,rgba(10,11,13,0.62)_32%,rgba(10,11,13,0.16)_65%,rgba(10,11,13,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.52)_0%,transparent_22%,transparent_76%,rgba(10,11,13,0.78)_100%)]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between md:left-10 md:right-10 md:top-10">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/55"><span className="h-px w-8 bg-[#E5322D]" />Manufacturing / 01</div>
          <div className="hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 md:flex">Precision components<span className="h-1.5 w-1.5 rounded-full bg-[#E5322D]" /></div>
        </div>

        <div className="relative z-10 mx-auto h-full w-full max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="flex h-full items-center">
            <div className="relative w-full max-w-xl lg:max-w-2xl">
              {STAGES.map((stage, index) => {
                const Icon = stage.icon;
                return <div key={stage.title} ref={(node) => { stageRefs.current[index] = node; }} className="absolute left-0 top-1/2 w-full -translate-y-1/2 will-change-transform px-1"><div className="mb-4 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/60 sm:mb-6 sm:text-[11px] sm:tracking-[0.3em]"><span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-md"><Icon size={15} strokeWidth={1.7} /></span><span>{stage.eyebrow}</span></div><h2 className="max-w-2xl text-[2.35rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">{stage.title}</h2><p className="mt-5 max-w-lg text-sm leading-6 text-white/62 sm:mt-7 sm:text-lg sm:leading-8">{stage.body}</p></div>;
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-6 right-6 z-20 flex items-end justify-between md:left-10 md:right-10">
          <div className="hidden max-w-xs text-[10px] font-medium uppercase leading-5 tracking-[0.18em] text-white/35 md:block">Scroll to explore our manufacturing process</div>
          <div className="ml-auto flex flex-col items-center gap-2 text-white/40"><span className="text-[9px] font-bold uppercase tracking-[0.25em]">Scroll</span><ChevronDown size={15} className="animate-bounce" /></div>
        </div>
      </div>
    </section>
  );
}
