import { paymentSum, recentPayment, totalActiveLicense, totalPayment, totalSubscriptions } from "@/lib/client-overview-stats";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const session = await auth();

  if (!session?.user) return NextResponse.json({ error: "Unauthorized" });

  const totalSubscription = await totalSubscriptions();
  const totalActiveLicenses = await totalActiveLicense();
  const totalPayments = await totalPayment();
  const paymentsSum = await paymentSum();
  const recentPayments = await recentPayment();

  return NextResponse.json({ totalActiveLicenses, totalSubscription, totalPayments, paymentsSum, recentPayments });
}
