import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Create additional categories
  const softwareCategory = await prisma.category.create({
    data: {
      name: "Software Development",
    },
  });

  const healthcareCategory = await prisma.category.create({
    data: {
      name: "Healthcare",
    },
  });

  // Additional solutions under different categories
  const customSoftwaresolution = await prisma.solution.create({
    data: {
      name: "Custom Software Solutions",
      description: "Tailored software development for businesses",
      categoryId: softwareCategory.id,
    },
  });

  const healthcareAppsolution = await prisma.solution.create({
    data: {
      name: "Healthcare Management App",
      description: "App to manage patient records and scheduling",
      categoryId: healthcareCategory.id,
    },
  });

  // Additional plans with various durations and pricing
  const enterprisePlan = await prisma.plan.create({
    data: {
      name: "Enterprise Plan",
      description: "Enterprise-level access with extended features",
      price: 10000,
      duration: 24, // in months
      solutionId: customSoftwaresolution.id,
    },
  });

  const trialPlan = await prisma.plan.create({
    data: {
      name: "Trial Plan",
      description: "Free trial plan for new customers",
      price: 0,
      duration: 1, // in months
      solutionId: healthcareAppsolution.id,
    },
  });

  const hasedPassword = await hash("password", 10);

  const user3 = await prisma.user.create({
    data: {
      fname: "Alice",
      lname: "Johnson",
      email: "alice.johnson@example.com",
      password: hasedPassword,
      mobile: "4561237890",
      role: "Client",
      isVerfiy: true,
      marketingEmails: false,
      updatesEmails: true,
    },
  });

  const user4 = await prisma.user.create({
    data: {
      fname: "Bob",
      lname: "Williams",
      email: "bob.williams@example.com",
      password: hasedPassword,
      mobile: "7891234560",
      role: "Client",
      isVerfiy: true,
      marketingEmails: true,
      updatesEmails: false,
    },
  });

  const user5 = await prisma.user.create({
    data: {
      fname: "Eve",
      lname: "Taylor",
      email: "eve.taylor@example.com",
      password: hasedPassword,
      mobile: "1237894560",
      role: "Admin",
      isVerfiy: true,
    },
  });

  // Additional subscriptions with varied statuses and dates
  const subscription4 = await prisma.subscription.create({
    data: {
      status: "Active",
      startDate: new Date(),
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 12)),
      userId: user3.id,
      planId: enterprisePlan.id,
    },
  });

  const subscription5 = await prisma.subscription.create({
    data: {
      status: "Expired",
      startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
      endDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
      userId: user4.id,
      planId: trialPlan.id,
    },
  });

  const subscription6 = await prisma.subscription.create({
    data: {
      status: "Pending",
      startDate: new Date(),
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 3)),
      userId: user4.id,
      planId: trialPlan.id,
    },
  });

  // Additional licenses with edge cases (e.g., expired, about to expire)
  await prisma.license.createMany({
    data: [
      {
        licenseKey: "LMN456OPQ",
        expiryDate: new Date(new Date().setDate(new Date().getDate() + 30)), // Expires in 30 days
        status: "Active",
        userId: user3.id,
        solutionId: customSoftwaresolution.id,
        subscriptionId: subscription4.id,
      },
      {
        licenseKey: "UVW987XYZ",
        expiryDate: new Date(new Date().setDate(new Date().getDate() - 10)), // Expired 10 days ago
        status: "Expired",
        userId: user4.id,
        solutionId: healthcareAppsolution.id,
        subscriptionId: subscription5.id,
      },
    ],
  });

  // Additional payments with varied amounts, methods, and statuses
  await prisma.payment.createMany({
    data: [
      {
        amount: 10000,
        currency: "USD",
        paymentDate: new Date(new Date().setMonth(new Date().getMonth() - 6)), // 6 months ago
        status: "Completed",
        method: "Bank Transfer",
        userId: user3.id,
        subscriptionId: subscription4.id,
        razorpayPaymentId: "razorpay456123",
      },
      {
        amount: 0,
        currency: "USD",
        paymentDate: new Date(new Date().setDate(new Date().getDate() - 5)), // 5 days ago
        status: "Completed",
        method: "Credit Card",
        userId: user4.id,
        subscriptionId: subscription5.id,
      },
      {
        amount: 1000,
        currency: "USD",
        paymentDate: new Date(),
        status: "Pending",
        method: "Paypal",
        userId: user4.id,
        subscriptionId: subscription6.id,
      },
    ],
  });

  console.log("Extended dummy data with additional variations inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
