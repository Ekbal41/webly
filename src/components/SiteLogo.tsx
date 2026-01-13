import { useTranslation } from "react-i18next";

export default function SiteLogo({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <>
      <a href="/" className="flex gap-1 items-center">
        <img
          src="/logo.png"
          title={t("brand.name")}
          alt="SeqZero"
          className="h-8"
        />
        <div className={`text-foreground ${className}`}>
          <p className="text-lg font-extrabold uppercase">
            {t("brand.name") || "SeqZero"}
          </p>
          <p className="text-[0.70rem] -mt-1.5">Sequence Zero</p>
        </div>
      </a>
    </>
  );
}
