export interface NationalPayment {
  initiateTransaction(
    amount: number,
    fromAccount: string,
    toAccount: string,
  ): string;

  verifyTransaction(transactionId: string): boolean;

  isTrue():boolean
}

export function paymentProcess(
  paymentProvider: NationalPayment,
  amount: number,
  fromAccount: string,
  toAccount: string,
): void {
  console.log("Government System: Starting payment process...");

  const transactionId = paymentProvider.initiateTransaction(
    amount,
    fromAccount,
    toAccount,
  );

  console.log(`Transaction initiated. ID: ${transactionId}`);

  const isVerified = paymentProvider.verifyTransaction(transactionId);

  if (isVerified) {
    console.log("Government System: Payment verified successfully.");
  } else {
    console.log("Government System: Payment verification failed!");
  }
}
