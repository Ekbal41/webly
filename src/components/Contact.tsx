import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-24 md:py-32 bg-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            </div>

            <div className="mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-primary-foreground">
                        {t("contact.cta_headline") || "Ready to Start Your Project?"}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
                        {t("contact.cta_subtext") || "Let's build something amazing together. Get in touch today!"}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 font-bold shadow-xl" asChild>
                            <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                {t("contact.whatsapp_btn")}
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 font-bold" asChild>
                            <a href="mailto:your@email.com">
                                {t("contact.email_btn") || "Send Email"}
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
