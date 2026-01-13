import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkSamples } from "@/components/WorkSamples";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WorkSamples />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
