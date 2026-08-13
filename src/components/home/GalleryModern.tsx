'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Container } from '../layout/Container';

const images = [
  '/images/gallery/15.jpg',
  '/images/gallery/19.jpg',
  '/images/gallery/manufacturing.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/20.jpg',
  '/images/gallery/12.jpg',
  '/images/gallery/16.jpg',
  '/images/gallery/13.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/17.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/9.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/6.jpg',
  '/images/gallery/7.jpg',
  '/images/gallery/10.jpg',
  '/images/gallery/18.jpg',
  '/images/gallery/8.jpg',
  '/images/gallery/guality.jpg',
  '/images/gallery/11.jpg',
  '/images/gallery/1.jpg',
  '/images/gallery/14.jpg',
];

export function GalleryModern() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive((current) => current === null ? 0 : (current + 1) % images.length);
      if (event.key === 'ArrowLeft') setActive((current) => current === null ? images.length - 1 : (current - 1 + images.length) % images.length);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(229,50,45,0.16),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(57,43,135,0.2),transparent_34%)]" />

      <Container className="relative">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-400">Factory / Gallery</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Inside Farteks</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Manufacturing, machining, quality control and the people behind our hydraulic component production.
            </p>
          </div>
          <div className="text-sm font-semibold text-slate-400">{images.length} images · Click to explore</div>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 lg:auto-rows-[240px] lg:gap-4">
          {images.map((image, index) => {
            const featured = index === 0 || index === 5 || index === 10;
            return (
              <motion.button
                type="button"
                key={image}
                onClick={() => setActive(index)}
                className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 text-left ${
                  featured ? 'col-span-2 row-span-2' : index % 7 === 0 ? 'row-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, delay: Math.min(index * 0.035, 0.3) }}
              >
                <Image
                  src={image}
                  alt={`Farteks manufacturing gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Farteks</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur transition group-hover:bg-orange-500">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </Container>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close gallery"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            >
              <X />
            </button>

            <motion.div
              className="relative h-[80vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-slate-900"
              initial={{ scale: 0.94, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 8 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={images[active]}
                alt={`Farteks manufacturing gallery image ${active + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
