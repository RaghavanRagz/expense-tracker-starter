function Summary({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpenses;

  const formatAmount = (val) =>
    val.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <div className="summary">
      <div className="summary-card">
        <h3>Income</h3>
        <p className="amount income-amount">${formatAmount(totalIncome)}</p>
      </div>
      <div className="summary-card">
        <h3>Expenses</h3>
        <p className="amount expense-amount">${formatAmount(totalExpenses)}</p>
      </div>
      <div className="summary-card">
        <h3>Balance</h3>
        <p className={`amount ${balance < 0 ? 'balance-negative' : 'balance-amount'}`}>
          ${formatAmount(balance)}
        </p>
      </div>
    </div>
  );
}

export default Summary
