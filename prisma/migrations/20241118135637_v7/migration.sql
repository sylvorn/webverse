/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Features` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `License` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `solutionId` to the `Features` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solutionId` to the `License` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solutionId` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Features" DROP CONSTRAINT "Features_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "License" DROP CONSTRAINT "License_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_categoryId_fkey";

-- AlterTable
ALTER TABLE "Features" DROP COLUMN "serviceId",
ADD COLUMN     "solutionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "License" DROP COLUMN "serviceId",
ADD COLUMN     "solutionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "serviceId",
ADD COLUMN     "solutionId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Service";

-- CreateTable
CREATE TABLE "Solution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Solution_id_key" ON "Solution"("id");

-- AddForeignKey
ALTER TABLE "Solution" ADD CONSTRAINT "Solution_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Features" ADD CONSTRAINT "Features_solutionId_fkey" FOREIGN KEY ("solutionId") REFERENCES "Solution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_solutionId_fkey" FOREIGN KEY ("solutionId") REFERENCES "Solution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "License" ADD CONSTRAINT "License_solutionId_fkey" FOREIGN KEY ("solutionId") REFERENCES "Solution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
