-- CreateEnum
CREATE TYPE "PurchaseStatus" AS ENUM ('PENDING', 'APPROVED', 'FAILED');

-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "status" "PurchaseStatus" NOT NULL DEFAULT 'PENDING';
