import { clsx } from "clsx";
import { format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName) {
  //console.log(fullName);
  const words = fullName.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
  return initials;
}

export function getFormattedDatetime(dateString) {
  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, "eeee do MMM h a", { locale: enUS });
  return formattedDate;
}
