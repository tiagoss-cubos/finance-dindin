import { format } from "date-fns";

export function formatToMoney(value) {
  const valueAsNumber = Number(value);
  return valueAsNumber.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatToDate(date) {
  const generateDate = new Date(date);
  return format(generateDate, "dd/MM/yyyy");
}

export function formatToDay(day) {
  return day.slice(0, 1).toUpperCase().concat(day.slice(1));
}
