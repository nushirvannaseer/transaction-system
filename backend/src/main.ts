import express from "express";
import cors from "cors";
import { config } from "./config/config";
import { AppModule } from "./app.module";
import { errorMiddleware } from "./common/middlewares/error.middleware";
import { appController } from "./app.controller";

// Create Express application
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Mount root health check endpoint
app.get("/health", (req, res) => appController.getHealth(req, res));

// Mount API routes
app.use("/api", AppModule.router);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
  console.log(`Environment: ${config.env}`);
});
