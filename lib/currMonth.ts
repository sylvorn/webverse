export const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
export const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
export const startOfYear: Date = new Date(new Date().getFullYear(), 0, 1);
export const currentMonth: Date = new Date();
export const endOfCurrentMonth: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

const optionsStartMonth: Intl.DateTimeFormatOptions = { month: "long" };
const optionsCurrentMonth: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
const startMonthFormatted: string = startOfYear.toLocaleString("default", optionsStartMonth);
const currentMonthFormatted: string = currentMonth.toLocaleString("default", optionsCurrentMonth);

export const dateRange: string = `${startMonthFormatted} - ${currentMonthFormatted}`;
