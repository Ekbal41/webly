import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const contactWPLink = ({
  template,
  phone = "01796900817",
}: {
  template: string;
  phone?: string;
}) => {
  return `https://wa.me/${phone}?text=${template}`;
};
