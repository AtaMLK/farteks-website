import Image from "next/image";

import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Stagger } from "../animations/Stagger";
import { FadeItem } from "../animations/FadeItem";

const images = [
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/12.jpg",
  "/images/gallery/13.jpg",
  "/images/gallery/15.jpg",
  "/images/gallery/16.jpg",
  "/images/gallery/17.jpg",
  "/images/gallery/18.jpg",
  "/images/gallery/19.jpg",
  "/images/gallery/20.jpg",
];

export function GalleryPreview() {
  return (
    <section className="bg-slate-50">
      <Container>
        <SectionTitle
          eyebrow="Gallery"
          title="Inside Farteks"
          description="Our manufacturing facility, production processes, and quality standards."
        />

        <Stagger>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {images.map((image) => (
              <FadeItem key={image}>
                <Image
                  src={image}
                  alt=""
                  width={500}
                  height={500}
                  className="aspect-square rounded-[28px] object-cover transition duration-500 hover:scale-[1.03] shadow-card"
                />
              </FadeItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
