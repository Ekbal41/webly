import { useTranslation } from "react-i18next";
import SiteLogo from "./SiteLogo";

export function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#work", label: t("nav.work") },
    { href: "#process", label: t("nav.process") },
    { href: "#pricing", label: t("nav.pricing") },
  ];

  return (
    <footer className="bg-foreground dark:bg-accent-foreground text-background py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-3 items-center">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <SiteLogo className="dark:!text-black text-white" />
            </div>
            <p className="text-sm text-background/60 max-w-xs mx-auto md:mx-0">
              {t("footer.tagline") ||
                "Building modern websites that grow your business."}
            </p>
          </div>
          <nav className="flex justify-center gap-6 flex-wrap">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="text-center md:text-right text-base text-background/70">
            <p className="font-semibold">
              &copy; {new Date().getFullYear()} {t("brand.name") || "Webly"}
            </p>
            <p className="text-sm mt-1">
              {t("footer.rights") || "All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
