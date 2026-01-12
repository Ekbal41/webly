import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, GraduationCap, BookOpen } from "lucide-react";

export function Services() {
    const { t } = useTranslation();

    const features = [
        {
            title: t("features.teacher.title") || "অভিজ্ঞ শিক্ষক",
            description: t("features.teacher.desc") || "আমাদের সকল শিক্ষক অভিজ্ঞ ও দ্বীনি শিক্ষায় শিক্ষিত যারা অত্যন্ত ধৈর্যের সাথে সাইন্টিফিক পদ্ধতিতে শিক্ষা প্রদান করেন।",
            icon: Users,
        },
        {
            title: t("features.age.title") || "সব বয়সের জন্য",
            description: t("features.age.desc") || "শিশু থেকে বৃদ্ধ যে কেউ আমাদের এখানে কুরআন শিখতে পারেন। আমরা প্রত্যেকের সক্ষমতার ভিত্তিতে আলাদা পদ্ধতি অনুসরণ করি।",
            icon: GraduationCap,
        },
        {
            title: t("features.free.title") || "সম্পূর্ণ ফ্রি",
            description: t("features.free.desc") || "আমরা কোনো ফী গ্রহণ করিনা। শুধুমাত্র আল্লাহর সন্তুষ্টির উদ্দেশ্যে কুরআনের আলো ছড়িয়ে দেওয়াই আমাদের মূল লক্ষ্য!",
            icon: BookOpen,
        },
    ];

    return (
        <section className="bg-muted/30 py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern pointer-events-none opacity-5" />

            <div className="mx-auto px-4 max-w-6xl relative z-10">
                <div className="mb-20 text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-foreground">
                        {t("features.title_part1") || "কেন আমাদের"} <span className="text-primary">{t("features.title_part2") || "বেছে নেবেন?"}</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-medium">
                        {t("features.subtext")}
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Card className="h-full border-none bg-background shadow-xl shadow-primary/5 transition-all hover:shadow-2xl hover:-translate-y-2 group overflow-hidden">
                                <CardHeader className="relative z-10">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110 duration-300">
                                        <feature.icon className="h-7 w-7" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold tracking-tight">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                                </CardContent>
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mb-12 blur-2xl" />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
