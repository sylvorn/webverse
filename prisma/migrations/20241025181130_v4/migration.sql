-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Admin', 'Client');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('Pending', 'Active', 'Expired');

-- CreateEnum
CREATE TYPE "LicenseStatus" AS ENUM ('Pending', 'Active', 'Expired');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Pending', 'Completed', 'Failed');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fname" TEXT,
    "lname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mobile" INTEGER,
    "role" "UserRole" NOT NULL DEFAULT 'Client',
    "otp" TEXT,
    "otpExpiresOn" TIMESTAMP(3),
    "isVerfiy" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Features" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "serviceId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'Pending',
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "planId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "License" (
    "id" TEXT NOT NULL,
    "licenseKey" TEXT NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "status" "LicenseStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subscriptionId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "PaymentStatus" NOT NULL,
    "method" TEXT,
    "subscriptionId" TEXT NOT NULL,
    "razorpayPaymentId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Service_id_key" ON "Service"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Features_id_key" ON "Features"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_id_key" ON "Plan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_id_key" ON "Subscription"("id");

-- CreateIndex
CREATE UNIQUE INDEX "License_id_key" ON "License"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");

-- AddForeignKey
ALTER TABLE "Features" ADD CONSTRAINT "Features_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "License" ADD CONSTRAINT "License_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
