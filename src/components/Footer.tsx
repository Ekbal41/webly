import { useTranslation } from "react-i18next";
import SiteLogo from "./SiteLogo";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-foreground dark:bg-background dark:text-foreground text-background py-4 xl:py-5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap gap-4 justify-center md:justify-between items-center">
          <p className="text-center md:text-start">
            &copy; {new Date().getFullYear()} {t("brand.name")} -
            <span className="ms-2">
              {t("footer.rights") || "All rights reserved."}
            </span>
          </p>
          <div className="hidden md:block">
            <SiteLogo className="text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
