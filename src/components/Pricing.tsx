import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      key: "portfolio",
      price: t("pricing.portfolio.price"),
      currency: t("pricing.currency"),
      features: [
        t("pricing.portfolio.f1"),
        t("pricing.portfolio.f2"),
        t("pricing.portfolio.f3"),
        t("pricing.portfolio.f4"),
      ],
    },
    {
      key: "landing_page",
      price: t("pricing.landing.price"),
      currency: t("pricing.currency"),
      features: [
        t("pricing.landing.f1"),
        t("pricing.landing.f2"),
        t("pricing.landing.f3"),
        t("pricing.landing.f4"),
      ],
    },
    {
      key: "maintenance",
      price: t("pricing.maintenance.price"),
      currency: t("pricing.monthly"),
      features: [
        t("pricing.maintenance.f1"),
        t("pricing.maintenance.f2"),
        t("pricing.maintenance.f3"),
        t("pricing.maintenance.f4"),
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 islamic-pattern pointer-events-none" />

      <div className="mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            {t("pricing.title_part1")}
            <span className="text-primary ms-3">
              {t("pricing.title_part2")}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("pricing.subtext") || "Transparent pricing with no hidden fees."}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                className={`flex flex-col h-full relative transition-all duration-300 hover:-translate-y-2 border-none shadow-xl ${
                  index === 1
                    ? "ring-2 ring-primary shadow-primary/20"
                    : "shadow-primary/5"
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {t("pricing.popular") || "Most Popular"}
                  </div>
                )}
                <CardHeader className="text-left pb-6">
                  <CardTitle className="text-2xl font-bold">
                    {t(`services.${plan.key}.title`)}
                  </CardTitle>
                  <CardDescription className="text-base min-h-[2.5rem]">
                    {t(`services.${plan.key}.desc`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-left space-y-6">
                  <div className="space-y-1">
                    <div className="text-5xl font-black text-primary">
                      {plan.price}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                      {plan.currency}
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm font-medium"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    className="w-full rounded-full h-12 text-base font-bold"
                    variant={index === 1 ? "default" : "outline"}
                    asChild
                  >
                    <a href="#contact">{t("hero.cta_quote")}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
