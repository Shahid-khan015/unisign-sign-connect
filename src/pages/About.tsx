import { About as AboutSection } from "@/components/About";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;