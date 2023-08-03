import express, { Request, Response } from "express";
import { InvoiceModel, InvoiceDocument } from "../models/Invoice.model";
import { sacCodes } from "./sacCodesData";

// Item Interface
interface Item {
  itemName: string;
  quantity: number;
  rate: number;
  taxAmount: number;
}

// SAC Codes Interface
interface SACCode {
  id: number;
  code: string;
  description: string;
  gstRate: number;
}

const invoiceRouter = express.Router();

function checkSACcode(itemName: string): SACCode | undefined {
  return sacCodes.find(
    (sacCode) => sacCode.description.toLowerCase() === itemName.toLowerCase()
  );
}

// CREATING NEW INVOICE

invoiceRouter.post("/create", async (req: Request, res: Response) => {
  try {
    const { customerName, address, emailId, items } = req.body;

    // Calculate taxes and associate SAC Code for each item
    const processedItems = items.map((item: Item) => {
      const { itemName, quantity, rate } = item;

      const sacCode = checkSACcode(itemName);

      if (!sacCode) {
        return { error: `SAC Code not found for item: ${itemName}` };
      }

      const { gstRate } = sacCode;

      // Calculate tax amount for the item
      const taxAmount = (quantity * rate * gstRate) / 100;
      const totalAmount = rate + taxAmount;

      return {
        itemName,
        quantity,
        rate,
        gstRate,
        taxAmount,
        totalAmount,
        sacCode: sacCode.code,
      };
    });

    // Calculate the total amount for the invoice
    const totalAmount = processedItems.reduce(
      (acc: number, item: Item) => acc + item.rate + item.taxAmount,
      0
    );

    // Create the new invoice document
    const newInvoice: InvoiceDocument = new InvoiceModel({
      customerName,
      address,
      emailId,
      items: processedItems,
      taxAmount:
        totalAmount -
        items.reduce((acc: number, item: Item) => acc + item.rate, 0),
    });

    // Save the new invoice to the database
    await newInvoice.save();

    res
      .status(201)
      .json({ message: "Invoice created successfully", data: newInvoice });
  } catch (error) {
    console.error("Error creating invoice:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { invoiceRouter };
