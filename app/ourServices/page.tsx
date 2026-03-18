import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function OurServices() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mt-8 md:mt-12">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
