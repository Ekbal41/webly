import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();

    const footerLinks = [
        { href: "#services", label: t("nav.services") || "Services" },
        { href: "#work", label: t("nav.work") || "Work" },
        { href: "#process", label: t("nav.process") || "Process" },
        { href: "#pricing", label: t("nav.pricing") || "Pricing" },
    ];

    return (
        <footer className="bg-foreground text-background py-12">
            <div className="mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left - Brand */}
                    <div className="text-center md:text-left">
                        <a href="#" className="font-black text-2xl text-primary">
                            {t("brand.name") || "Webly"}
                        </a>
                        <p className="text-background/60 text-sm mt-2 max-w-xs">
                            {t("footer.tagline") || "Building modern websites that grow your business."}
                        </p>
                    </div>

                    {/* Center - Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-background/70 hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right - Copyright */}
                    <div className="text-center md:text-right text-sm text-background/60">
                        <p>&copy; {new Date().getFullYear()} {t("brand.name") || "Webly"}</p>
                        <p>{t("footer.rights") || "All rights reserved."}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
