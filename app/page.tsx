
import Navbar from "@/components/Navbar";
import ComponentName from "@/components/Hero";
import CarouselDemo from "@/components/Logo-cloud";
import MainEditor from "@/components/main_editor";
import Card1 from "@/components/Faccard1";
import Faccard2 from "@/components/Faccard2";
import Faccard3 from "@/components/Faccard3";
import Startcode from "@/components/Startcode";
import Growing from "@/components/Growing";
import TestimonialSection from "@/components/Costomar_review";
import HeroSection from "@/components/Ctasec";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between pt-16 w-[100%] bg-[#0f1117] text-[#e0e0e0]">
      <Navbar />
      <ComponentName />
      <div className="w-full flex items-center justify-center">
        <CarouselDemo />
      </div>
      <div className="w-full flex items-center justify-center">
        <MainEditor />
      </div>
      <div className="w-full flex items-center justify-center">
        <Card1 />
      </div>
      <div className="w-full flex items-center justify-center">
        <Faccard2 />
      </div>
      <div className="w-full flex items-center justify-center">
        <Faccard3 />
      </div>
      <div className="w-full flex items-center justify-center">
        <Startcode />
      </div>
      <div className="w-full flex items-center justify-center">
        <Growing />
      </div>
      <div className="w-full flex items-center justify-center">
        <TestimonialSection />
      </div>
      <div className="w-full flex items-center justify-center">
        <HeroSection />
      </div>
      <Footer />

    </main>
  );
}
