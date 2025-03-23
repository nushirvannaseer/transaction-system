export class AppService {
  getHealth() {
    return {
      status: "ok",
      timestamp: new Date(),
      environment: process.env.NODE_ENV || "development",
    };
  }
}

export const appService = new AppService();
