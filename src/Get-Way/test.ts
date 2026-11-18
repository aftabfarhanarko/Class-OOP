import {
  processPayment,
  type MyGatewayValidations,
} from "../Nastinal-Lib/mypayment.js";

const gateway: MyGatewayValidations = {
  initiate(id, amount, taxId) {
    const transactionId = `TXN-${id}`;
    console.log(`Processing ${amount} for ID ${id} with tax ID ${taxId}`);
    return transactionId;
  },

  verify(taxId) {
    return taxId.length > 0;
  },
};

processPayment(gateway, "101", 500, "TAX-123");