import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./LanguageToggle";
import SiteLogo from "./SiteLogo";
import { contactWPLink } from "@/lib/utils";

export function Navbar() {
  const { t } = useTranslation();

  const navLinks = [
    { href: "#services", label: t("nav.services") || "Services" },
    { href: "#work", label: t("nav.work") || "Work" },
    { href: "#process", label: t("nav.process") || "Process" },
    { href: "#pricing", label: t("nav.pricing") || "Pricing" },
  ];

  return (
    <nav className="border-b border-primary bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 h-16 grid grid-cols-3 items-center">
        <div className="flex items-center">
          <SiteLogo />
        </div>
        <div className="hidden md:flex justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center justify-end gap-2">
          <LanguageToggle />
          <ModeToggle />
          <Button asChild>
            <a
              href={contactWPLink({
                template: "Hello, I'm interested in your services.",
              })}
            >
              <img
                src="/images/whatsapp.png"
                alt="WhatsApp"
                className="w-5 h-5 rounded-full"
              />
              {t("nav.contact") || "Contact"}
            </a>
          </Button>
        </div>
        <div className="md:hidden col-span-2 flex justify-end items-center gap-2">
          <LanguageToggle />
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-4 px-4">
                <a href="#" className="font-black text-2xl text-primary mb-2">
                  {t("brand.name")}
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="w-full rounded-full" asChild>
                  <a
                    href={contactWPLink({
                      template: "Hello, I'm interested in your services.",
                    })}
                  >
                    <img
                      src="/images/whatsapp.png"
                      alt="WhatsApp"
                      className="w-5 h-5 rounded-full"
                    />
                    {t("nav.contact") || "Contact"}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
