import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const educationCategory = await prisma.category.create({
    data: {
      name: "Finance",
    },
  });

  const itServicesCategory = await prisma.category.create({
    data: {
      name: "IT Services",
    },
  });

  // Create services
  const schoolManagementService = await prisma.service.create({
    data: {
      name: "School Management System",
      description: "A comprehensive school management software",
      categoryId: educationCategory.id,
    },
  });

  const libraryManagementService = await prisma.service.create({
    data: {
      name: "Library Management System",
      description: "Software to manage library operations",
      categoryId: educationCategory.id,
    },
  });

  const webDevService = await prisma.service.create({
    data: {
      name: "Web Development Service",
      description: "Full-stack web development services",
      categoryId: itServicesCategory.id,
    },
  });

  // Create features
  await prisma.features.createMany({
    data: [
      {
        title: "Attendance Tracking",
        content: "Track student attendance",
        serviceId: schoolManagementService.id,
      },
      {
        title: "Library Catalog",
        content: "Manage and search books",
        serviceId: libraryManagementService.id,
      },
      {
        title: "Responsive Design",
        content: "Fully responsive web pages",
        serviceId: webDevService.id,
      },
    ],
  });

  // Create plans
  const basicPlan = await prisma.plan.create({
    data: {
      name: "Basic Plan",
      description: "Affordable plan for small schools",
      price: 500,
      duration: 6, // in months
      serviceId: schoolManagementService.id,
    },
  });

  const premiumPlan = await prisma.plan.create({
    data: {
      name: "Premium Plan",
      description: "Extended features for large institutions",
      price: 2000,
      duration: 12, // in months
      serviceId: schoolManagementService.id,
    },
  });

  const webDevMonthlyPlan = await prisma.plan.create({
    data: {
      name: "Monthly Web Dev Plan",
      description: "Subscription for ongoing web development",
      price: 1000,
      duration: 1, // in months
      serviceId: webDevService.id,
    },
  });

  const hasedPassword = await hash("password", 10);

  // Create users
  const user1 = await prisma.user.create({
    data: {
      fname: "John",
      lname: "Doe",
      email: "john.doe@example.com",
      password: hasedPassword,
      mobile: "1234567890",
      role: "Client",
      isVerfiy: true,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      fname: "Jane",
      lname: "Smith",
      email: "jane.smith@example.com",
      password: hasedPassword,
      mobile: "0987654321",
      role: "Client",
      isVerfiy: true,
    },
  });

  const adminUser = await prisma.user.create({
    data: {
      fname: "Admin",
      lname: "User",
      email: "admin@example.com",
      password: hasedPassword,
      role: "Admin",
      isVerfiy: true,
    },
  });

  // Create subscriptions
  const subscription1 = await prisma.subscription.create({
    data: {
      status: "Active",
      startDate: new Date(),
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 6)),
      userId: user1.id,
      planId: basicPlan.id,
    },
  });

  const subscription2 = await prisma.subscription.create({
    data: {
      status: "Expired",
      startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
      endDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1, new Date().getMonth() + 6)),
      userId: user2.id,
      planId: premiumPlan.id,
    },
  });

  const subscription3 = await prisma.subscription.create({
    data: {
      status: "Pending",
      startDate: new Date(),
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      userId: user2.id,
      planId: webDevMonthlyPlan.id,
    },
  });

  // Create licenses
  await prisma.license.createMany({
    data: [
      {
        licenseKey: "ABC123XYZ",
        expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        status: "Active",
        userId: user1.id,
        serviceId: schoolManagementService.id,
        subscriptionId: subscription1.id,
      },
      {
        licenseKey: "XYZ789ABC",
        expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        status: "Expired",
        userId: user2.id,
        serviceId: libraryManagementService.id,
        subscriptionId: subscription2.id,
      },
    ],
  });

  // Create payments
  await prisma.payment.createMany({
    data: [
      {
        amount: 500,
        currency: "USD",
        paymentDate: new Date(new Date().setMonth(new Date().getMonth() - 2)),
        status: "Completed",
        method: "Credit Card",
        userId: user1.id,
        subscriptionId: subscription1.id,
        razorpayPaymentId: "razorpay123456",
      },
      {
        amount: 2000,
        currency: "USD",
        paymentDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        status: "Completed",
        method: "Bank Transfer",
        userId: user2.id,
        subscriptionId: subscription2.id,
        razorpayPaymentId: "razorpay7891011",
      },
      {
        amount: 1000,
        currency: "USD",
        paymentDate: new Date(),
        status: "Pending",
        method: "Credit Card",
        userId: user2.id,
        subscriptionId: subscription3.id,
      },
    ],
  });

  console.log("Dummy data with variations inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
