import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Categories from "@/components/sections/Categories";
import Promo from "@/components/sections/Promo";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* 1. Hero Section - Futuristic Impression */}
      <Hero />

      {/* 2. Featured Products - GPU/CPU Showdown */}
      <Featured />

      {/* 3. Categories - Hardware Grid */}
      <Categories />

      {/* 4. Promo Banner - Special Offers */}
      <Promo />

      {/* 5. Our Core Services - Trust & Support */}
      <Services />

      {/* 6. Tech Enthusiast Reviews - Testimonials */}
      <Testimonials />

      {/* 7. Newsletter Sync - Final Footer Sync */}
      <Newsletter />
    </div>
  );
}