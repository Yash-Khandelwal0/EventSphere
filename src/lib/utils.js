export { cn } from "cn"
import {format, parseISO} from "date-fns"

export function formatPrice(amount, currency = "INR") {
    const value = Number(amount)

    if(!value) return "Free";

    return new Intl.NumberFormat("en-IN", {
        style : "currency" ,
        currency : "INR",
        maximumFractionDigits : 0,
    }).format(value);
}

export function formatEventDate(dateInput) { 
    // format(new Date(2014, 0, 13), "MM/dd/yyyy")
    const date = parseISO(dateInput)

    // console.log(format(date, "dd MM yyyy"));

    // console.log(date)
    // console.log(typeof date)

    return format(date, "E, LLL, dd, yyyy")
}