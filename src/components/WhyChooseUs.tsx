import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
    const { t } = useTranslation();

    const reasons = [
        "fast_delivery",
        "mobile_first",
        "clean_code",
        "direct_comm",
        "no_hidden_costs",
    ];

    return (
        <section className="py-20 container">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">{t("why_us.title")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {reasons.map((reason) => (
                    <div key={reason} className="flex items-center gap-3 p-4 rounded-lg bg-card border shadow-sm">
                        <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" />
                        <span className="font-medium">{t(`why_us.${reason}`)}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
