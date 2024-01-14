import { UzcardTransactions } from "../../../../data/models";

export async function createUzcardTransaction(
  reservationId,
  transactionId,
  merchantId,
  terminalId,
  utrno,
  cardNumber,
  total,
  commission,
  statusComment,
  status
) {
  const transaction = await UzcardTransactions.insertOrUpdate({
    reservationId,
    transactionId,
    merchantId,
    terminalId,
    utrno,
    cardNumber,
    total,
    commission,
    statusComment,
    status,
    createdAt: new Date(),
  });

  if (transaction) {
    return {
      status: "created",
    };
  } else {
    return {
      status: "failed to create transaction",
    };
  }
}
