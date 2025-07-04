
export const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const getStatusClasses = (status: string) => {
  switch (status) {
    case "Active": return "bg-green-100 text-green-800 border-green-200";
    case "Warning": return "bg-red-100 text-yellow-800 border-yellow-200";
    case "Paused": return "bg-yellow-100 text-gray-800 border-gray-200";
    default: return "bg-gray-100 text-blue-800 border-blue-200";
  }
};

export const getStatusBadgeClasses = (status: string) => {
  switch (status) {
    case "Active": return "bg-green-100 text-green-800";
    case "Paused": return "bg-yellow-100 text-yellow-800";
    case "Warning": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};