/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const Price = days * COST_PER_DAY;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return Price - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return Price - SHORT_TERM_DISCOUNT;
  }

  return Price;
}

module.exports = calculateRentalCost;
