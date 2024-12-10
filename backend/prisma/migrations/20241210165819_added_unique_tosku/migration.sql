/*
  Warnings:

  - A unique constraint covering the columns `[Products_sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_Products_sku_key" ON "Product"("Products_sku");
