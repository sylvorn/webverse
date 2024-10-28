/*
  Warnings:

  - You are about to drop the `NotificationPreference` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NotificationPreference" DROP CONSTRAINT "NotificationPreference_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "marketingEmails" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "securityEmails" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatesEmails" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "NotificationPreference";

-- DropEnum
DROP TYPE "NotificationType";
