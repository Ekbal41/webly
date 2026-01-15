import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export function Process() {
  const { t } = useTranslation();

  const steps = [
    { key: "step1", icon: t("process.step1_num") },
    { key: "step2", icon: t("process.step2_num") },
    { key: "step3", icon: t("process.step3_num") },
    { key: "step4", icon: t("process.step4_num") },
  ];

  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 islamic-pattern pointer-events-none" />

      <div className="mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            {t("process.title_part1")}
            <span className="text-primary ms-4">
              {t("process.title_part2")}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("process.subtext") ||
              "A simple and transparent process to get you started."}
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
            >
              <Card className="h-full border-none shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 group overflow-hidden">
                <CardContent className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">
                    {t(`process.${step.key}`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`process.${step.key}_desc`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
