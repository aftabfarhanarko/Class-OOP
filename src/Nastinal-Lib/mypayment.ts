export interface MyGatewayValidations {
  initiate(
    id: string,
    amount: number,
    taxId: string
  ): string;

  verify(taxId: string): boolean;
}

export function processPayment(
  gateway: MyGatewayValidations,
  id: string,
  amount: number,
  taxId: string
): void {
  const transactionId = gateway.initiate(id, amount, taxId);
  console.log(`Transaction started: ${transactionId}`);

  if (gateway.verify(taxId)) {
    console.log("Payment verified.");
  } else {
    console.log("Payment verification failed.");
  }
}

const gateway: MyGatewayValidations = {
  initiate(id, amount, taxId) {
    console.log(`Processing ID ${id}, amount ${amount}, tax ID ${taxId}`);
    return `TXN-${id}`;
  },

  verify(taxId) {
    return taxId.length > 0;
  },
};

processPayment(gateway, "101", 500, "TAX-123");