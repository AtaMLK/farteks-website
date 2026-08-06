import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";

export function ProductsHero() {
  return (
    <section className="bg-slate-50 py-40">

      <Container>

        <Badge>

          Product Catalogue

        </Badge>

        <h1 className="mt-8 max-w-5xl text-7xl font-bold leading-tight">

          Hydraulic Cylinder Components

        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">

          Precision-machined hydraulic cylinder components
          manufactured for OEM customers around the world.

        </p>

      </Container>

    </section>
  );
}