/*
  Warnings:

  - A unique constraint covering the columns `[licenseKey]` on the table `License` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "License_licenseKey_key" ON "License"("licenseKey");
