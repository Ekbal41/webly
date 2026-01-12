import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

export function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative overflow-hidden bg-background py-20 lg:py-32">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 islamic-pattern pointer-events-none" />

            <div className="mx-auto px-4 max-w-6xl mt-12 md:mt-0 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20"
                    >
                        <BookOpen className="mr-2 h-4 w-4" />
                        <span>{t("hero.badge") || "সম্পূর্ণ ফ্রি অনলাইন কুরআন শিক্ষা"}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
                    >
                        {t("hero.headline_part1") || "বিনা মূল্যে শুদ্ধভাবে"} <br />
                        <span className="text-primary">{t("hero.headline_part2") || "কুরআন শিখুন"}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                    >
                        {t("hero.subtext")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                    >
                        <Button size="lg" variant="islamic" className="px-10" asChild>
                            <a
                                href="#contact"
                            >
                                {t("hero.cta_quote")}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="px-10 rounded-full border-2">
                            <a href="#work">{t("hero.cta_samples")}</a>
                        </Button>
                    </motion.div>

                    {/* Stats or Trust Elements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-16 grid grid-cols-2 gap-12"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-black text-primary">১০০%</span>
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                                {t("hero.stats.online") || "অনলাইন ক্লাস"}
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-black text-primary">২৪/১২</span>
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                                {t("hero.stats.support") || "সাপোর্ট"}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse" />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary/5 blur-3xl animate-pulse" />
        </section>
    );
}
