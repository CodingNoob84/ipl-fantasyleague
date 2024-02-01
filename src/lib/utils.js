import { clsx } from "clsx";
import { format, isBefore, isToday, parseISO } from "date-fns";
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

export function formatDateTime(datetimeString) {
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDateTime = new Date(datetimeString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDateTime;
}

export function compareDateWithToday(datetimeString, timezone) {
  // Parse the ISO date string in the provided timezone
  const parsedDate = parseISO(datetimeString, { timeZone: timezone });

  // Get today's date in the provided timezone
  const today = new Date();
  const todayInTimezone = format(today, "yyyy-MM-dd'T'HH:mm:ss", {
    timeZone: timezone,
  });

  // Parse the ISO string representation of today's date in the provided timezone
  const parsedToday = parseISO(todayInTimezone);

  // Compare the dates
  if (isToday(parsedDate, parsedToday)) {
    return "today";
  } else if (isBefore(parsedDate, parsedToday)) {
    return "past";
  } else {
    return "upcoming";
  }
}

export function mergeDateTimeString(dateObj, time) {
  // Get date components
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  // Get time components
  const [hours, minutes] = time.split(":").map(Number);

  // Construct datetime string
  const dateTimeString = `${year}-${month}-${day}T${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00.000+05:30`;

  return dateTimeString;
}
