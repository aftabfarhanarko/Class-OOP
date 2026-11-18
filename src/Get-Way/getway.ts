// getway.ts
import {
  paymentProcess,
  type NationalPayment,
} from "../Nastinal-Lib/Payment.js";

const paymentProvider: NationalPayment = {
  initiateTransaction(amount, fromAccount, toAccount) {
    const transactionId = `TXN-${Date.now()}`;

    console.log(`Sending ${amount} from ${fromAccount} to ${toAccount}`);

    return transactionId;
  },

  verifyTransaction(transactionId) {
    console.log(`Verifying transaction: ${transactionId}`);
    return true;
  },

  isTrue(): boolean {
    console.log("Okkkk");
    
    return true;
  },
};

paymentProcess(paymentProvider, 500, "ACC-101", "ACC-202");
