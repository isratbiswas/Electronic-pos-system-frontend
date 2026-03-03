import Contact from "@/components/PublicPage/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pos System",
  description: "Pos system by create next app",
};
const ContactPage = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;
