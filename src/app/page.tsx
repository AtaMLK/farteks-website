import type { Metadata } from "next";
import EntrancePage from "@/components/entrance/page";

export const metadata: Metadata = {
  title: "Farteks | Hydraulic Cylinder Components Manufacturer",
  description: "Farteks hydraulic cylinder components and OEM manufacturing.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <EntrancePage />;
}
