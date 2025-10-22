import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Methodology } from "@/components/Methodology";
import { Cases } from "@/components/Cases";
import { Credentials } from "@/components/Credentials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Methodology />
      <Cases />
      <Credentials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
