import * as Joi from "joi";

export const CreateTransactionDto = Joi.object({
  amount: Joi.number().required(),
  type: Joi.string().valid("credit", "debit").required(),
  timestamp: Joi.date().default(new Date()),
});

export interface TransactionDto {
  amount: number;
  type: "credit" | "debit";
  timestamp?: Date;
}
