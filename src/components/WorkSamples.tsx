import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function WorkSamples() {
    const { t } = useTranslation();

    const samples = [
        {
            id: 1,
            title: t("samples.item1.title") || "Portfolio Site",
            category: t("samples.item1.category") || "Personal Portfolio",
            image: "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            title: t("samples.item2.title") || "Landing Page",
            category: t("samples.item2.category") || "Business Landing Page",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            title: t("samples.item3.title") || "Business Website",
            category: t("samples.item3.category") || "Corporate Site",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
    ];

    return (
        <section id="work" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern pointer-events-none" />

            <div className="mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        {t("samples.title_part1") || "Our"} <span className="text-primary">{t("samples.title_part2") || "Work"}</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        {t("samples.subtext") || "Check out some of our recent projects."}
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {samples.map((sample, index) => (
                        <motion.div
                            key={sample.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Card className="overflow-hidden group border-none shadow-xl shadow-primary/5 hover:shadow-2xl transition-all duration-300 h-full">
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={sample.image}
                                        alt={sample.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <Button variant="secondary" size="sm" className="gap-2 rounded-full">
                                            <ExternalLink className="w-4 h-4" /> {t("samples.view_demo") || "View Demo"}
                                        </Button>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">{sample.title}</CardTitle>
                                    <CardDescription className="text-base">{sample.category}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
