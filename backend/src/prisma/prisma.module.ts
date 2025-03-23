import { prismaService } from "./prisma.service";

// This is a simulation of a NestJS module for Express
// In Express, we don't actually need modules, but we'll use this for organizational purposes
export const PrismaModule = {
  // Exports the service for use in other modules
  exports: () => ({
    prismaService,
  }),
};
