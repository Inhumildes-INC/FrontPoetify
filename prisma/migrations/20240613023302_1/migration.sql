/*
  Warnings:

  - You are about to drop the column `ocupacion` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `orientacion` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `id_ocupacion` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_orientacion` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `ocupacion`,
    DROP COLUMN `orientacion`,
    ADD COLUMN `id_ocupacion` INTEGER NOT NULL,
    ADD COLUMN `id_orientacion` INTEGER NOT NULL;
