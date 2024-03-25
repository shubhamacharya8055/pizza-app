export function formatCurrency(value) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  }
  
  export function formatDate(dateStr) {
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateStr));
  }
  
  export function calcMinutesLeft(dateStr) {
    const d1 = new Date().getTime();
    const d2 = new Date(dateStr).getTime();
    return Math.round((d2 - d1) / 60000);
  }

  export function convertUSDtoINR(usdAmount, exchangeRate = 83.59) {
    // Input validation (optional)
    if (usdAmount <= 0 || !exchangeRate) {
      throw new Error("Invalid input: Please provide a positive USD amount and an exchange rate.");
    }
  
    // Perform conversion with exchange rate
    const inrAmount = usdAmount * exchangeRate;
  
    // Optionally format the output for currency
    return +inrAmount.toFixed(2) // Rounds to 2 decimal places and adds currency symbol
  }
  
  console.log(formatCurrency(convertUSDtoINR(5)))
  
  