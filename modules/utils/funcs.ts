export const formatPrice = (price: number) => {
  return Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
  }).format(price);
};
