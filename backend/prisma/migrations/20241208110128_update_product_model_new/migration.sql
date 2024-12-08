/*
  Warnings:

  - Made the column `Products_details` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Products_imageUrl` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Products_name` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Products_price` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Products_sku` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Products_url` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "Products_details" SET NOT NULL,
ALTER COLUMN "Products_imageUrl" SET NOT NULL,
ALTER COLUMN "Products_name" SET NOT NULL,
ALTER COLUMN "Products_price" SET NOT NULL,
ALTER COLUMN "Products_sku" SET NOT NULL,
ALTER COLUMN "Products_url" SET NOT NULL;
