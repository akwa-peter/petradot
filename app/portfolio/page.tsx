import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function OurServices() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mt-8 md:mt-12">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
