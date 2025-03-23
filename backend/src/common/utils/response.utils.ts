import { Response } from "express";

export const sendSuccess = (
  res: Response,
  data: any,
  message = "Success",
  statusCode = 200
): Response => {
  return res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

export const sendError = (
  res: Response,
  message = "Error",
  statusCode = 400,
  errors?: any
): Response => {
  const response: any = {
    status: "error",
    message,
  };

  if (errors) {
    response.errors = errors;
  }

  return res.status(statusCode).json(response);
};
