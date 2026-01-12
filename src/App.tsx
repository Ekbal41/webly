import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkSamples } from "@/components/WorkSamples";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";

import { ThemeProvider } from "@/components/theme-provider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
                <footer className="py-8 border-t bg-muted/30">
                    <div className="mx-auto px-4 max-w-6xl text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} TrustyWebdev. All rights reserved.
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
