const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
      default: () => new mongoose.Types.ObjectId().toString(),
    },
    address: { type: String, required: true },
    emailId: { type: String, required: true },
    items: [
      {
        itemName: { type: String, required: true },
        quantity: { type: Number, required: true },
        rate: { type: Number, required: true },
        taxPercentage: { type: Number, required: true },
        sacCode: { type: String, required: true },
      },
    ],
    taxAmount: { type: Number, required: true },
  },
  { timestamps: true }
);
