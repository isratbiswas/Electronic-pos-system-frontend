import Features from "@/components/PublicPage/Features/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Pos System",
  description: "Pos system by create next app",
};
const FeaturesPage = () => {
  return (
    <div>
      <Features />
    </div>
  );
};

export default FeaturesPage;
