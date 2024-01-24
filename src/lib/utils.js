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

export function getFormattedDatetime(inputDateString) {
  const date = new Date(inputDateString);
  const options = { weekday: "long", day: "numeric", month: "short" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedTime =
    hours % 12 === 0
      ? "12"
      : (hours % 12).toString() + ":" + (minutes < 10 ? "0" : "") + minutes;
  const result = `${formattedDate} ${formattedTime} ${ampm}`;
  return result;
}
