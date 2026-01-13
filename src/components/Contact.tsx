import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { contactWPLink } from "@/lib/utils";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-primary relative overflow-hidden"
    >
      <div className="mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-black text-primary-foreground">
            {t("contact.cta_headline")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            {t("contact.cta_subtext")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-4 font-bold shadow-xl"
              asChild
            >
              <a
                href={contactWPLink({
                  template: "Hello, I'm interested in your services.",
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  className="w-5 h-5 rounded-full"
                />
                {t("contact.whatsapp_btn")}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 rounded-full px-8 font-bold"
              asChild
            >
              <a href="mailto:asifekbaldev@gmail.com">
                {t("contact.email_btn")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          <p className="text-primary-foreground/60 text-sm pt-4">
            {t("contact.response_promise")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
