import DisCountSection from "@/components/modules/Home/DisCountSection";
import HeroSection from "@/components/modules/Home/HeroSection";
import HowItWorksSection from "@/components/modules/Home/HowItWorksSection";
import ReviewSection from "@/components/modules/Home/ReviewSection";
import ServiceSection from "@/components/modules/Home/ServiceSection";
import WhyChooseUs from "@/components/modules/Home/WhyChooseUs";


export default function Home() {
  return (
 <div className="">
   <HeroSection/>
   <ServiceSection/>
   <HowItWorksSection/>
   <ReviewSection/>
   <DisCountSection/>
   <WhyChooseUs/>
 </div>
  );
}
