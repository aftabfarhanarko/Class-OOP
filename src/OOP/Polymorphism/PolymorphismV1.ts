

interface Payment {
  readonly transactionId: string;
  pay(amount: number): boolean;
  refund(transactionId: string): boolean;
  getPaymentDetails(): void;
}

type PaymentStatus = "pending" | "success" | "failed" | "refunded";

// Bkash Payment
class BkashPayment implements Payment {
  readonly transactionId: string;
  private amount: number = 0;
  private status: PaymentStatus = "pending";

  constructor(transactionId: string) {
    this.transactionId = transactionId;
  }

  pay(amount: number): boolean {
    if (amount < 10 || amount > 100000) {
      throw new Error("Payment must be between 10 and 100000 BDT");
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

// Card Payment
class CardPayment implements Payment {
  readonly transactionId: string;
  private amount: number = 0;
  private status: PaymentStatus = "pending";

  constructor(transactionId: string) {
    this.transactionId = transactionId;
  }

  pay(amount: number): boolean {
    if (amount < 10 || amount > 100000) {
      throw new Error("Invalid Card Payment Amount");
    }

    this.amount = amount;
    this.status = "success";

    console.log(`Paid ${amount} BDT using Card`);
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

    console.log(`Refunded ${this.amount} BDT to Card`);
    return true;
  }

  getPaymentDetails(): void {
    console.log({
      transactionId: this.transactionId,
      amount: this.amount,
      status: this.status,
      method: "Card",
    });
  }
}

// Nagad Payment
class NagadPayment implements Payment {
  readonly transactionId: string;
  private amount: number = 0;
  private status: PaymentStatus = "pending";

  constructor(transactionId: string) {
    this.transactionId = transactionId;
  }

  pay(amount: number): boolean {
    if (amount < 10 || amount > 100000) {
      throw new Error("Invalid Nagad Payment Amount");
    }

    this.amount = amount;
    this.status = "success";

    console.log(`Paid ${amount} BDT using Nagad`);
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

    console.log(`Refunded ${this.amount} BDT through Nagad`);
    return true;
  }

  getPaymentDetails(): void {
    console.log({
      transactionId: this.transactionId,
      amount: this.amount,
      status: this.status,
      method: "Nagad",
    });
  }
}

// Payment Processor
class PaymentProcessor {
  processPayment(payment: Payment, amount: number): void {
    try {
      payment.pay(amount);
      payment.getPaymentDetails();
    } catch (error) {
      console.error(error instanceof Error ? error.message : "Payment failed");
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

// Create Payment Objects
const bkash = new BkashPayment("TXN-BKASH-1001");
const card = new CardPayment("TXN-CARD-1002");
const nagad = new NagadPayment("TXN-NAGAD-1003");

// Create Processor
const processor = new PaymentProcessor();

// Process Payments
processor.processPayment(bkash, 500);
processor.processPayment(card, 1000);
processor.processPayment(nagad, 1500);

// Process Refund
processor.processRefund(bkash);
processor.processRefund(card);

// Final Payment Details
bkash.getPaymentDetails();
card.getPaymentDetails();
nagad.getPaymentDetails();
