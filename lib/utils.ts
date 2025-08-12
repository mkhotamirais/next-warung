export const roles = ["admin", "editor", "user"];

export const smartTrim = (text: string, maxLength = 60) => {
  if (text.length <= maxLength) return text;

  const words = text.split(" ");
  let result = "";

  for (const word of words) {
    if ((result + " " + word).trim().length <= maxLength) {
      result = (result + " " + word).trim();
    } else {
      break;
    }
  }

  return result + "...";
};

// function formatTime(datetime) {
//     const date = new Date(datetime);

//     const hari = date.toLocaleDateString("id-ID", { weekday: "long" });
//     const tanggal = date.toLocaleDateString("id-ID", {
//         day: "2-digit",
//         month: "long",
//         year: "numeric",
//     });
//     const jam = date.toLocaleTimeString("id-ID", {
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: false,
//     });

//     return `${hari}, ${tanggal} - Jam ${jam}`;
// }

export const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export const capitalize = (text: string) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
