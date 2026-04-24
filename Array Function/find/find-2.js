const transactions = [
  { txId: 'TX101', status: 'failed' },
  { txId: 'TX102', status: 'pending' },
  { txId: 'TX103', status: 'success' },
  { txId: 'TX104', status: 'success' }
];

const successTransaction = transactions.find( transaction => {
    return transaction.status === 'success'
})

console.log(successTransaction)