interface Payment {
  readonly transactionId: string;
  pay(amount: number): boolean;
  refund(transactionId: string): boolean;
  getPaymentDetails(): void;
}

type PaymentStatus = "pending" | "success" | "failed" | "refunded";

class BkashPayment implements Payment {
  readonly transactionId: string;
  private amount: number = 0;
  private status: PaymentStatus = "pending";

  constructor(transactionId: string) {
    this.transactionId = transactionId;
  }

  pay(amount: number): boolean {
    if (amount < 10 || amount > 10000) {
      throw new Error("Payment must be between 10 and 10000");
    }

    this.amount = amount;
    this.status = "success";
    console.log(`Paid ${amount} BDT using Bkash`);
    return true;
  }

  refund(transactionId: string): boolean {
    if (transactionId !== this.transactionId) {
      throw new Error("Invalid Transaction ID");
    }
    if (this.status !== "success") {
      throw new Error("Payment cannot be refunded");
    }

    this.status = "refunded";

    console.log(`Refunded ${this.amount} BDT through Bkash`);
    return true;
  }

  getPaymentDetails(): void {
    console.log({
      transactionId: this.transactionId,
      amount: this.amount,
      status: this.status,
      method: "Bkash",
    });
  }
}

class PaymentProcessor {
  processPayment(payment: Payment, amount: number): void {
    try {
      payment.pay(amount);
      payment.getPaymentDetails();
    } catch (error) {
      console.error(error instanceof Error ? error.message : "Payment Failed");
    }
  }

  processRefund(payment: Payment): void {
    try {
      payment.refund(payment.transactionId);
      payment.getPaymentDetails();
    } catch (error) {
      console.error(error instanceof Error ? error.message : "Refund failed");
    }
  }
}
const bkash = new BkashPayment("TXN-BKASH-1001");

const processor = new PaymentProcessor();

processor.processPayment(bkash, 500);
processor.processRefund(bkash);
bkash.getPaymentDetails();
