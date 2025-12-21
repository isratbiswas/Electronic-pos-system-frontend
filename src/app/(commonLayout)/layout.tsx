import Footer from "@/components/shered/PublicFooter";
import Navbar from "@/components/shered/PublicNavbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default PublicLayout;
