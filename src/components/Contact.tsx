import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern pointer-events-none" />

            <div className="mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        {t("contact.title_part1") || "Get In"} <span className="text-primary">{t("contact.title_part2") || "Touch"}</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        {t("contact.subtext") || "We'd love to hear from you. Reach out anytime!"}
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="border-none shadow-xl shadow-primary/5 hover:-translate-y-2 transition-all duration-300 h-full">
                                <CardContent className="pt-8 pb-8 flex flex-col items-center gap-6 text-center">
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <MessageCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">{t("contact.whatsapp_title") || "WhatsApp"}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{t("contact.whatsapp_desc") || "Fastest way to reach us"}</p>
                                    </div>
                                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full" asChild>
                                        <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer">
                                            {t("contact.whatsapp_btn")}
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            <Card className="border-none shadow-xl shadow-primary/5 hover:-translate-y-2 transition-all duration-300 h-full">
                                <CardContent className="pt-8 pb-8 flex flex-col items-center gap-6 text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Mail className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">{t("contact.email_title") || "Email"}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{t("contact.email_desc") || "For detailed inquiries"}</p>
                                    </div>
                                    <Button size="lg" variant="outline" className="w-full rounded-full border-2" asChild>
                                        <a href="mailto:your@email.com">
                                            {t("contact.email_btn") || "Send Email"}
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-muted-foreground text-center mt-10 text-sm"
                    >
                        {t("contact.response_promise")}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
