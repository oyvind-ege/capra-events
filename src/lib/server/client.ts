import { PrismaClient } from '@prisma/client';

/* A common Prisma Client, to avoid instatiating Prisma clients all over the place. */

const prisma = new PrismaClient();

export default prisma;
