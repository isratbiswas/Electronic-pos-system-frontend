import About from "@/components/PublicPage/About/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Pos System",
  description: "Pos system by create next app",
};
const AboutPage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default AboutPage;
