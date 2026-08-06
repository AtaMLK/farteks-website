import { Hero } from "../components/home/Hero";
import { Trusted } from "../components/home/Trusted";
import { Stats } from "../components/home/Stats";
import { ProductPreview } from "../components/home/ProductPreview";
import { Manufacturing } from "../components/home/Manufacturing";
import { Industries } from "../components/home/Industries";
import { Quality } from "../components/home/Quality";
import { Export } from "../components/home/Export";
import { GalleryPreview } from "../components/home/GalleryPreview";
import { CTA } from "../components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Stats />

      <Trusted />

      <ProductPreview />

      <Manufacturing />

      <Industries />

      <Quality />

      <Export />

      <GalleryPreview />

      <CTA />
    </>
  );
}