/*
  Warnings:

  - You are about to drop the column `sku` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sku",
DROP COLUMN "title",
ADD COLUMN     "Products_details" TEXT,
ADD COLUMN     "Products_imageUrl" TEXT,
ADD COLUMN     "Products_name" TEXT,
ADD COLUMN     "Products_price" TEXT,
ADD COLUMN     "Products_sku" TEXT,
ADD COLUMN     "Products_url" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;
