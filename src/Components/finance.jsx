export function formatCurrencyVND(price) {
  if (!price) return "0 ₫"; // Xử lý trường hợp chuỗi rỗng

  const number = parseFloat(price.replace(/[^\d.-]/g, ""));
  if (isNaN(number)) return "0 ₫";

  // Định dạng số thành tiền tệ Việt Nam
  return number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
}

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return date.toLocaleDateString("vi-VN", options);
};

export const formatTime = (timeString) => {
  const [hour, minute] = timeString.split(":");
  return `${hour}:${minute}`;
};
