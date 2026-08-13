export const SITE = {
  name: "Farteks Limited",
  shortName: "Farteks",
  description: "Hydraulic cylinder components manufactured in Türkiye for OEM and industrial applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://farteks.com",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@farteks.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+90 212 660 58 57",
  map: process.env.NEXT_PUBLIC_GOOGLE_MAP || "https://maps.app.goo.gl/ttufjcvHgUxsR98y5",
  slogan: "Hydraulic Cylinder Components",
  since: "1980",
  country: "Türkiye",
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
  },
} as const;
