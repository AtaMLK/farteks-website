import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function ProductCard({
  title,
  description,
  image,
  href,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <div className="overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={700}
          height={600}
          className="aspect-4/3 object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      <div className="p-8">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          {description}
        </p>

        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-500"
        >
          Learn More

          <ArrowRight size={18} />
        </Link>

      </div>

    </article>
  );
}