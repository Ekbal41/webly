import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function Process() {
    const { t } = useTranslation();

    const steps = [
        { key: "step1", icon: "১" },
        { key: "step2", icon: "২" },
        { key: "step3", icon: "৩" },
        { key: "step4", icon: "৪" },
    ];

    return (
        <section id="process" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern pointer-events-none" />

            <div className="mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        {t("process.title_part1") || "How We"} <span className="text-primary">{t("process.title_part2") || "Work"}</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        {t("process.subtext") || "A simple and transparent process to get you started."}
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-xl shadow-primary/5 border-none relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-2">{t(`process.${step.key}`)}</h3>
                            <p className="text-muted-foreground text-sm">{t(`process.${step.key}_desc`) || ""}</p>

                            {/* Connector for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 -translate-y-1/2" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
