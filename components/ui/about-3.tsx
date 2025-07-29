import { Button } from "@/components/ui/button";
import Image from "next/image";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    name: string;
    svg: React.ReactNode;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  { 
    name: "BMW",
    svg: (
      <div className="flex items-center justify-center h-12 px-6 bg-transparent">
        <span className="text-2xl font-bold tracking-wider text-black">BMW</span>
      </div>
    )
  },
  { 
    name: "Mercedes",
    svg: (
      <div className="flex items-center justify-center h-12 px-6 bg-transparent">
        <span className="text-xl font-semibold tracking-wide text-black">Mercedes-Benz</span>
      </div>
    )
  },
  { 
    name: "Audi",
    svg: (
      <div className="flex items-center justify-center h-12 px-6 bg-transparent">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 border-2 border-black rounded-full"></div>
          <div className="w-4 h-4 border-2 border-black rounded-full -ml-2"></div>
          <div className="w-4 h-4 border-2 border-black rounded-full -ml-2"></div>
          <div className="w-4 h-4 border-2 border-black rounded-full -ml-2"></div>
        </div>
      </div>
    )
  },
  { 
    name: "Porsche",
    svg: (
      <div className="flex items-center justify-center h-12 px-6 bg-transparent">
        <span className="text-xl font-bold tracking-wider text-black">PORSCHE</span>
      </div>
    )
  },
  { 
    name: "Tesla",
    svg: (
      <div className="flex items-center justify-center h-12 px-6 bg-transparent">
        <span className="text-xl font-bold tracking-wider text-black">TESLA</span>
      </div>
    )
  },
  { 
    name: "Lexus",
    svg: (
      <div className="flex items-center justify-center h-12 px-6 bg-transparent">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-black">L</span>
          <div className="w-6 h-3 border-2 border-black rounded-full ml-1"></div>
        </div>
      </div>
    )
  },
];

const defaultAchievements = [
  { label: "Cars Sold", value: "2,500+" },
  { label: "Happy Customers", value: "98%" },
  { label: "Years Experience", value: "25+" },
  { label: "Service Centers", value: "15+" },
];

export const About3 = ({
  title = "About Us",
  description = "Prodac is a premier automotive dealership committed to providing exceptional vehicles and outstanding customer service. We've been serving our community for decades with integrity and expertise.",
  mainImage = {
    src: "/images/about-1.jpg",
    alt: "About us main image",
  },
  secondaryImage = {
    src: "/images/about-2.jpg",
    alt: "About us secondary image",
  },
  breakout = {
    src: "",
    alt: "",
    title: "Premium Vehicle Selection at Prodac",
    description:
      "From luxury sedans to high-performance sports cars, we offer an extensive selection of premium vehicles from the world's most trusted manufacturers.",
    buttonText: "View Inventory",
    buttonUrl: "#inventory",
  },
  companiesTitle = "Authorized Dealer For",
  companies = defaultCompanies,
  achievementsTitle = "Our Track Record",
  achievementsDescription = "Building lasting relationships through quality vehicles, transparent pricing, and exceptional customer service that exceeds expectations.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold text-black">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="relative lg:col-span-2">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              width={800}
              height={620}
              className="w-full h-full max-h-[620px] rounded-xl object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-gray-50 p-7 border border-gray-200 h-fit">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L21 12M21 12L15 6M21 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold text-black">{breakout.title}</p>
                <p className="text-gray-600">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto border-black text-black hover:bg-black hover:text-white" asChild>
                <a href={breakout.buttonUrl}>
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <div className="relative flex-1">
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                width={400}
                height={300}
                className="w-full h-full min-h-[200px] rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <p className="text-center text-gray-600 text-sm font-medium mb-12 tracking-wide">{companiesTitle}</p>
          <div className="flex items-center justify-center flex-wrap gap-12 md:gap-16">
            {companies.map((company, idx) => (
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300" key={company.name + idx}>
                {company.svg}
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-gray-50 p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-black">{achievementsTitle}</h2>
            <p className="max-w-screen-sm text-gray-600">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p className="text-gray-700 font-medium">{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl text-black">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,rgb(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0,0,0,0.1)_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>
      </div>
    </section>
  );
}; 