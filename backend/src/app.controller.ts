import { Request, Response } from "express";
import { appService } from "./app.service";

export class AppController {
  getHealth(req: Request, res: Response): void {
    const health = appService.getHealth();
    res.status(200).json(health);
  }
}

export const appController = new AppController();
