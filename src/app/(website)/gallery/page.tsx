"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

/*
 * EDIT THIS DATA
 * Every image from the supplied gallery archive is included below.
 * The text is SAMPLE CONTENT only. Replace title, year, location, detail
 * and subgroup with the correct information for every image.
 *
 * Factory sample subgroups:
 * Quality Control / Packing & Logistics / Warehouse / Machining /
 * CNC / Technical & Production / Production Line / Finished Components
 *
 * Exhibition sample subgroups:
 * AUME 2015 / Agritechnica 2015 / Hannover Messe 2017 /
 * Agritechnica 2019 / Konya Agriculture Fair / Other Exhibition
 */
type GalleryItem = {
  src: string;
  title: string;
  year: string;
  location: string;
  detail: string;
  subgroup: string;
  alt: string;
};

const factoryImages: GalleryItem[] = [
  {
    src: "/images/gallery/1.jpg",
    title: "Machining Area — 01",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Precision machining and component production",
    subgroup: "Machining",
    alt: "Farteks machining — 1.jpg",
  },
  {
    src: "/images/gallery/10.jpg",
    title: "CNC Machining — 02",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "CNC machining and automated production",
    subgroup: "CNC",
    alt: "Farteks cnc — 10.jpg",
  },
  {
    src: "/images/gallery/11.jpg",
    title: "CNC Machining — 03",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "CNC machining and automated production",
    subgroup: "CNC",
    alt: "Farteks cnc — 11.jpg",
  },
  {
    src: "/images/gallery/12.jpg",
    title: "Quality Control — 04",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Dimensional inspection and process control",
    subgroup: "Quality Control",
    alt: "Farteks quality control — 12.jpg",
  },
  {
    src: "/images/gallery/13.jpg",
    title: "Quality Control — 05",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Dimensional inspection and process control",
    subgroup: "Quality Control",
    alt: "Farteks quality control — 13.jpg",
  },
  {
    src: "/images/gallery/14.jpg",
    title: "Technical & Production — 06",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Technical production and manufacturing operations",
    subgroup: "Technical & Production",
    alt: "Farteks technical & production — 14.jpg",
  },
  {
    src: "/images/gallery/15.jpg",
    title: "Machining Area — 07",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Precision machining and component production",
    subgroup: "Machining",
    alt: "Farteks machining — 15.jpg",
  },
  {
    src: "/images/gallery/16.jpg",
    title: "CNC Machining — 08",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "CNC machining and automated production",
    subgroup: "CNC",
    alt: "Farteks cnc — 16.jpg",
  },
  {
    src: "/images/gallery/17.jpg",
    title: "Production Line — 09",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Organized production flow and machine cells",
    subgroup: "Production Line",
    alt: "Farteks production line — 17.jpg",
  },
  {
    src: "/images/gallery/18.jpg",
    title: "Quality Control — 10",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Dimensional inspection and process control",
    subgroup: "Quality Control",
    alt: "Farteks quality control — 18.jpg",
  },
  {
    src: "/images/gallery/19.jpg",
    title: "Finished Components — 11",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Finished hydraulic components ready for processing",
    subgroup: "Finished Components",
    alt: "Farteks finished components — 19.jpg",
  },
  {
    src: "/images/gallery/2.jpg",
    title: "Machining Area — 12",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Precision machining and component production",
    subgroup: "Machining",
    alt: "Farteks machining — 2.jpg",
  },
  {
    src: "/images/gallery/20.jpg",
    title: "Machining Area — 13",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Precision machining and component production",
    subgroup: "Machining",
    alt: "Farteks machining — 20.jpg",
  },
  {
    src: "/images/gallery/21.jpg",
    title: "CNC Machining — 14",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "CNC machining and automated production",
    subgroup: "CNC",
    alt: "Farteks cnc — 21.jpg",
  },
  {
    src: "/images/gallery/22.jpg",
    title: "CNC Machining — 15",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "CNC machining and automated production",
    subgroup: "CNC",
    alt: "Farteks cnc — 22.jpg",
  },
  {
    src: "/images/gallery/23.jpg",
    title: "Technical & Production — 16",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Technical production and manufacturing operations",
    subgroup: "Technical & Production",
    alt: "Farteks technical & production — 23.jpg",
  },
  {
    src: "/images/gallery/24.jpg",
    title: "Machining Area — 17",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Precision machining and component production",
    subgroup: "Machining",
    alt: "Farteks machining — 24.jpg",
  },
  {
    src: "/images/gallery/25.jpg",
    title: "Quality Control — 18",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Dimensional inspection and process control",
    subgroup: "Quality Control",
    alt: "Farteks quality control — 25.jpg",
  },
  {
    src: "/images/gallery/26.jpg",
    title: "Warehouse — 19",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Organized stock and finished goods storage",
    subgroup: "Warehouse",
    alt: "Farteks warehouse — 26.jpg",
  },
  {
    src: "/images/gallery/27.jpg",
    title: "Warehouse — 20",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Organized stock and finished goods storage",
    subgroup: "Warehouse",
    alt: "Farteks warehouse — 27.jpg",
  },
  {
    src: "/images/gallery/28.jpg",
    title: "Warehouse — 21",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Organized stock and finished goods storage",
    subgroup: "Warehouse",
    alt: "Farteks warehouse — 28.jpg",
  },
  {
    src: "/images/gallery/29.jpg",
    title: "Packing & Logistics — 22",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Packing, preparation and dispatch operations",
    subgroup: "Packing & Logistics",
    alt: "Farteks packing & logistics — 29.jpg",
  },
  {
    src: "/images/gallery/3.jpg",
    title: "Packing & Logistics — 23",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Packing, preparation and dispatch operations",
    subgroup: "Packing & Logistics",
    alt: "Farteks packing & logistics — 3.jpg",
  },
  {
    src: "/images/gallery/30.jpg",
    title: "Warehouse — 24",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Organized stock and finished goods storage",
    subgroup: "Warehouse",
    alt: "Farteks warehouse — 30.jpg",
  },
  {
    src: "/images/gallery/31.jpg",
    title: "Technical & Production — 25",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Technical production and manufacturing operations",
    subgroup: "Technical & Production",
    alt: "Farteks technical & production — 31.jpg",
  },
  {
    src: "/images/gallery/32.jpg",
    title: "Machining Area — 26",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Precision machining and component production",
    subgroup: "Machining",
    alt: "Farteks machining — 32.jpg",
  },
  {
    src: "/images/gallery/4.jpg",
    title: "Machining Area — 27",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Precision machining and component production",
    subgroup: "Machining",
    alt: "Farteks machining — 4.jpg",
  },
  {
    src: "/images/gallery/5.jpg",
    title: "CNC Machining — 28",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "CNC machining and automated production",
    subgroup: "CNC",
    alt: "Farteks cnc — 5.jpg",
  },
  {
    src: "/images/gallery/6.jpg",
    title: "Production Line — 29",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Organized production flow and machine cells",
    subgroup: "Production Line",
    alt: "Farteks production line — 6.jpg",
  },
  {
    src: "/images/gallery/7.jpg",
    title: "Machining Area — 30",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Precision machining and component production",
    subgroup: "Machining",
    alt: "Farteks machining — 7.jpg",
  },
  {
    src: "/images/gallery/8.jpg",
    title: "Technical & Production — 31",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Technical production and manufacturing operations",
    subgroup: "Technical & Production",
    alt: "Farteks technical & production — 8.jpg",
  },
  {
    src: "/images/gallery/9.jpg",
    title: "CNC Machining — 32",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "CNC machining and automated production",
    subgroup: "CNC",
    alt: "Farteks cnc — 9.jpg",
  },
  {
    src: "/images/gallery/factory1.jpg",
    title: "Packing & Logistics — 33",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Packing, preparation and dispatch operations",
    subgroup: "Packing & Logistics",
    alt: "Farteks packing & logistics — factory1.jpg",
  },
  {
    src: "/images/gallery/factory2.JPG",
    title: "Warehouse — 34",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Organized stock and finished goods storage",
    subgroup: "Warehouse",
    alt: "Farteks warehouse — factory2.JPG",
  },
  {
    src: "/images/gallery/factory3.JPG",
    title: "Warehouse — 35",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Organized stock and finished goods storage",
    subgroup: "Warehouse",
    alt: "Farteks warehouse — factory3.JPG",
  },
  {
    src: "/images/gallery/guality.jpg",
    title: "Quality Control — 36",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Dimensional inspection and process control",
    subgroup: "Quality Control",
    alt: "Farteks quality control — guality.jpg",
  },
  {
    src: "/images/gallery/hero-machine.jpg",
    title: "Machining Area — 37",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Precision machining and component production",
    subgroup: "Machining",
    alt: "Farteks machining — hero-machine.jpg",
  },
  {
    src: "/images/gallery/manufacturing.jpg",
    title: "Technical & Production — 38",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Technical production and manufacturing operations",
    subgroup: "Technical & Production",
    alt: "Farteks technical & production — manufacturing.jpg",
  },
];

const exhibitionImages: GalleryItem[] = [
  {
    src: "/images/gallery/exhibitions/1.jpg",
    title: "Agritechnica 2015",
    year: "2015",
    location: "Hannover, Germany",
    detail: "International agricultural machinery exhibition archive",
    subgroup: "Agritechnica 2015",
    alt: "Farteks Agritechnica 2015 exhibition archive — exhibitions/1.jpg",
  },
  {
    src: "/images/gallery/exhibitions/10.JPG",
    title: "Agritechnica 2015",
    year: "2015",
    location: "Hannover, Germany",
    detail: "International agricultural machinery exhibition archive",
    subgroup: "Agritechnica 2015",
    alt: "Farteks Agritechnica 2015 exhibition archive — exhibitions/10.JPG",
  },
  {
    src: "/images/gallery/exhibitions/11.JPG",
    title: "AUME 2015",
    year: "Sample",
    location: "Sample location",
    detail: "International trade exhibition archive",
    subgroup: "AUME 2015",
    alt: "Farteks AUME 2015 exhibition archive — exhibitions/11.JPG",
  },
  {
    src: "/images/gallery/exhibitions/12.JPG",
    title: "AUME 2015",
    year: "Sample",
    location: "Sample location",
    detail: "International trade exhibition archive",
    subgroup: "AUME 2015",
    alt: "Farteks AUME 2015 exhibition archive — exhibitions/12.JPG",
  },
  {
    src: "/images/gallery/exhibitions/13.JPG",
    title: "Hannover Messe 2017",
    year: "2017",
    location: "Hannover, Germany",
    detail: "Industrial technology exhibition archive",
    subgroup: "Hannover Messe 2017",
    alt: "Farteks Hannover Messe 2017 exhibition archive — exhibitions/13.JPG",
  },
  {
    src: "/images/gallery/exhibitions/14.jpg",
    title: "Hannover Messe 2017",
    year: "2017",
    location: "Hannover, Germany",
    detail: "Industrial technology exhibition archive",
    subgroup: "Hannover Messe 2017",
    alt: "Farteks Hannover Messe 2017 exhibition archive — exhibitions/14.jpg",
  },
  {
    src: "/images/gallery/exhibitions/16.JPG",
    title: "Hannover Messe 2017",
    year: "2017",
    location: "Hannover, Germany",
    detail: "Industrial technology exhibition archive",
    subgroup: "Hannover Messe 2017",
    alt: "Farteks Hannover Messe 2017 exhibition archive — exhibitions/16.JPG",
  },
  {
    src: "/images/gallery/exhibitions/17.JPG",
    title: "Hannover Messe 2017",
    year: "2017",
    location: "Hannover, Germany",
    detail: "Industrial technology exhibition archive",
    subgroup: "Hannover Messe 2017",
    alt: "Farteks Hannover Messe 2017 exhibition archive — exhibitions/17.JPG",
  },
  {
    src: "/images/gallery/exhibitions/18.jpg",
    title: "Agritechnica 2019",
    year: "2019",
    location: "Hannover, Germany",
    detail: "Agricultural machinery and components exhibition archive",
    subgroup: "Agritechnica 2019",
    alt: "Farteks Agritechnica 2019 exhibition archive — exhibitions/18.jpg",
  },
  {
    src: "/images/gallery/exhibitions/19.JPG",
    title: "Agritechnica 2019",
    year: "2019",
    location: "Hannover, Germany",
    detail: "Agricultural machinery and components exhibition archive",
    subgroup: "Agritechnica 2019",
    alt: "Farteks Agritechnica 2019 exhibition archive — exhibitions/19.JPG",
  },
  {
    src: "/images/gallery/exhibitions/2.jpg",
    title: "Agritechnica 2019",
    year: "2019",
    location: "Hannover, Germany",
    detail: "Agricultural machinery and components exhibition archive",
    subgroup: "Agritechnica 2019",
    alt: "Farteks Agritechnica 2019 exhibition archive — exhibitions/2.jpg",
  },
  {
    src: "/images/gallery/exhibitions/20.JPG",
    title: "Agritechnica 2019",
    year: "2019",
    location: "Hannover, Germany",
    detail: "Agricultural machinery and components exhibition archive",
    subgroup: "Agritechnica 2019",
    alt: "Farteks Agritechnica 2019 exhibition archive — exhibitions/20.JPG",
  },
  {
    src: "/images/gallery/exhibitions/21.JPG",
    title: "Konya Agriculture Fair",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Agricultural machinery exhibition in Konya",
    subgroup: "Konya Agriculture Fair",
    alt: "Farteks Konya Agriculture Fair exhibition archive — exhibitions/21.JPG",
  },
  {
    src: "/images/gallery/exhibitions/22.jpg",
    title: "Konya Agriculture Fair",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Agricultural machinery exhibition in Konya",
    subgroup: "Konya Agriculture Fair",
    alt: "Farteks Konya Agriculture Fair exhibition archive — exhibitions/22.jpg",
  },
  {
    src: "/images/gallery/exhibitions/23.jpg",
    title: "Konya Agriculture Fair",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Agricultural machinery exhibition in Konya",
    subgroup: "Konya Agriculture Fair",
    alt: "Farteks Konya Agriculture Fair exhibition archive — exhibitions/23.jpg",
  },
  {
    src: "/images/gallery/exhibitions/24.jpg",
    title: "Konya Agriculture Fair",
    year: "Sample",
    location: "Konya, Türkiye",
    detail: "Agricultural machinery exhibition in Konya",
    subgroup: "Konya Agriculture Fair",
    alt: "Farteks Konya Agriculture Fair exhibition archive — exhibitions/24.jpg",
  },
  {
    src: "/images/gallery/exhibitions/25.JPG",
    title: "Other Exhibition",
    year: "Sample",
    location: "Sample location",
    detail: "International exhibition and trade fair archive",
    subgroup: "Other Exhibition",
    alt: "Farteks Other Exhibition exhibition archive — exhibitions/25.JPG",
  },
  {
    src: "/images/gallery/exhibitions/26.JPG",
    title: "Other Exhibition",
    year: "Sample",
    location: "Sample location",
    detail: "International exhibition and trade fair archive",
    subgroup: "Other Exhibition",
    alt: "Farteks Other Exhibition exhibition archive — exhibitions/26.JPG",
  },
  {
    src: "/images/gallery/exhibitions/27.JPG",
    title: "Other Exhibition",
    year: "Sample",
    location: "Sample location",
    detail: "International exhibition and trade fair archive",
    subgroup: "Other Exhibition",
    alt: "Farteks Other Exhibition exhibition archive — exhibitions/27.JPG",
  },
  {
    src: "/images/gallery/exhibitions/4.jpg",
    title: "Other Exhibition",
    year: "Sample",
    location: "Sample location",
    detail: "International exhibition and trade fair archive",
    subgroup: "Other Exhibition",
    alt: "Farteks Other Exhibition exhibition archive — exhibitions/4.jpg",
  },
  {
    src: "/images/gallery/exhibitions/5.jpg",
    title: "Other Exhibition",
    year: "Sample",
    location: "Sample location",
    detail: "International exhibition and trade fair archive",
    subgroup: "Other Exhibition",
    alt: "Farteks Other Exhibition exhibition archive — exhibitions/5.jpg",
  },
  {
    src: "/images/gallery/exhibitions/6.JPG",
    title: "Other Exhibition",
    year: "Sample",
    location: "Sample location",
    detail: "International exhibition and trade fair archive",
    subgroup: "Other Exhibition",
    alt: "Farteks Other Exhibition exhibition archive — exhibitions/6.JPG",
  },
  {
    src: "/images/gallery/exhibitions/7.JPG",
    title: "Other Exhibition",
    year: "Sample",
    location: "Sample location",
    detail: "International exhibition and trade fair archive",
    subgroup: "Other Exhibition",
    alt: "Farteks Other Exhibition exhibition archive — exhibitions/7.JPG",
  },
  {
    src: "/images/gallery/exhibitions/8.JPG",
    title: "Other Exhibition",
    year: "Sample",
    location: "Sample location",
    detail: "International exhibition and trade fair archive",
    subgroup: "Other Exhibition",
    alt: "Farteks Other Exhibition exhibition archive — exhibitions/8.JPG",
  },
  {
    src: "/images/gallery/exhibitions/9.JPG",
    title: "Other Exhibition — Stand 25",
    year: "Sample",
    location: "Sample location",
    detail: "International exhibition and trade fair archive",
    subgroup: "Other Exhibition",
    alt: "Farteks Other Exhibition exhibition archive — exhibitions/9.JPG",
  },
];

const groups = {
  factory: {
    label: "Factory",
    description:
      "Machining, CNC production, quality control, packing, warehouse and technical operations.",
    images: factoryImages,
  },
  exhibitions: {
    label: "Exhibitions",
    description:
      "A visual archive of trade fairs and international exhibition activity.",
    images: exhibitionImages,
  },
} as const;

type GroupKey = keyof typeof groups;

export default function GalleryPage() {
  const [group, setGroup] = useState<GroupKey>("factory");
  const [subgroup, setSubgroup] = useState("All");
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const allImages = groups[group].images;

  const subgroups = useMemo(
    () => [
      "All",
      ...Array.from(new Set(allImages.map((item) => item.subgroup))),
    ],
    [allImages],
  );

  const images = useMemo(
    () =>
      subgroup === "All"
        ? allImages
        : allImages.filter((item) => item.subgroup === subgroup),
    [allImages, subgroup],
  );

  const safeIndex = Math.min(index, Math.max(images.length - 1, 0));
  const current = images[safeIndex];

  const changeGroup = (nextGroup: GroupKey) => {
    setGroup(nextGroup);
    setSubgroup("All");
    setIndex(0);
    setLightbox(false);
  };

  const changeSubgroup = (nextSubgroup: string) => {
    setSubgroup(nextSubgroup);
    setIndex(0);
    setLightbox(false);
  };

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F0F0F0] px-5 pb-16 pt-32 md:px-10 lg:px-14 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <p className="site-eyebrow">Farteks / gallery</p>
          <h1 className="site-page-title mt-5">Inside the process.</h1>
          <p className="site-page-description">
            A visual archive of our factory operations, manufacturing
            capabilities, exhibitions and international trade activity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 lg:px-14 lg:py-20">
        <div className="mb-10 flex flex-col gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="site-eyebrow">Explore the archive</p>
            <h2 className="site-section-title mt-3">Factory & exhibitions.</h2>
            <p className="mt-4 max-w-2xl text-slate-500">
              {groups[group].description}
            </p>
          </div>

          <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1">
            {(Object.keys(groups) as GroupKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => changeGroup(key)}
                className={`rounded-full px-5 py-3 text-sm font-bold transition-all ${group === key ? "bg-[#392B87] text-white shadow-lg" : "text-slate-500 hover:text-[#392B87]"}`}
              >
                {groups[key].label}
              </button>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {subgroups.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => changeSubgroup(item)}
                className={`rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] transition ${
                  subgroup === item
                    ? "border-[#392B87] bg-[#392B87] text-white"
                    : "border-slate-200 bg-white text-slate-500 hover:border-[#392B87] hover:text-[#392B87]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[38px] bg-[#181617] shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${group}-${subgroup}-${current.src}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45 }}
              className="relative h-[58vh] min-h-[430px] w-full"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority
                className="object-cover"
              />
              {group === "exhibitions" && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/10" />
              )}

              <div className="absolute bottom-7 left-7 right-7 text-white md:bottom-10 md:left-10 md:right-10">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-white/70">
                  <span className="text-[#E5322D]">
                    {String(safeIndex + 1).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")}
                  </span>
                  <span>{current.subgroup}</span>
                  <span>{current.year}</span>
                  <span>{current.location}</span>
                </div>
                <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold tracking-[-.035em] md:text-5xl">
                  {current.title}
                </h2>
                <p className="mt-2 text-sm text-white/70 md:text-base">
                  {current.detail}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-4 text-[#181617] shadow-xl backdrop-blur transition hover:scale-105 hover:bg-white"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-4 text-[#181617] shadow-xl backdrop-blur transition hover:scale-105 hover:bg-white"
          >
            <ChevronRight />
          </button>
          <button
            onClick={() => setLightbox(true)}
            aria-label="Magnify image"
            className="absolute right-5 top-5 rounded-full bg-black/40 p-3 text-white backdrop-blur transition hover:bg-black/70"
          >
            <Maximize2 size={19} />
          </button>
        </div>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
          {images.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setIndex(i)}
              aria-label={`View ${item.title}`}
              className={`group relative h-24 w-36 shrink-0 overflow-hidden rounded-2xl border-2 transition ${i === safeIndex ? "border-[#E5322D]" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, i) => (
            <button
              key={`grid-${item.src}`}
              onClick={() => {
                setIndex(i);
                setLightbox(true);
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[28px] bg-slate-100 text-left"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[.18em] text-white/65">
                  <span className="text-[#E5322D]">{item.year}</span>
                  <span>{item.subgroup}</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="mt-2 font-[var(--font-heading)] text-xl font-extrabold tracking-[-.02em]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-white/65">{item.detail}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white"
          >
            <X />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-5 rounded-full bg-white/10 p-3 text-white"
          >
            <ChevronLeft />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[85vh] w-[90vw]"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-5 rounded-full bg-white/10 p-3 text-white"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </main>
  );
}
