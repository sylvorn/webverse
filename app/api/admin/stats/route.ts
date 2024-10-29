import { getMonthlyCategorySums, getRecentPayments, getServiceSales, getTotalActiveLicense, getTotalRevenue, getTotalSubscriptions } from "@/lib/admin-overview-stats";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (session?.user.role === "Admin") {
    const totalRevenue = await getTotalRevenue();
    const totalSubscriptions = await getTotalSubscriptions();
    const totalActiveLicense = await getTotalActiveLicense();
    const recentPayments = await getRecentPayments();
    const monthlyCategorySums = await getMonthlyCategorySums();
    const serviceSales = await getServiceSales();

    return NextResponse.json({ totalRevenue, totalSubscriptions, totalActiveLicense, recentPayments, monthlyCategorySums, serviceSales });
  } else {
    return NextResponse.json({ error: "Unauthorized" });
  }
}
