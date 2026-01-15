import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkSamples } from "@/components/WorkSamples";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useTranslation } from "react-i18next";
import { useTheme } from "./components/theme-provider";

function App() {
  const { theme } = useTheme();
  const { t } = useTranslation();
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
      <FloatingWhatsApp
        phoneNumber="8801796900817"
        accountName="Sequence Zero"
        avatar="/favicon.ico"
        statusMessage={t("wp_chat.status")}
        chatMessage={t("wp_chat.chat_placeholder")}
        placeholder={t("wp_chat.input_placeholder")}
        darkMode={theme === "dark" ? true : false}
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatboxClassName="!rounded-[28px] dark:border dark:border-stone-700"
      />
    </div>
  );
}

export default App;
