import type { Campaign } from "../types/campaign";
import type { SortField, SortDirection } from "../types/sorting";

export const sortCampaigns = (
  campaigns: Campaign[],
  sortField: SortField,
  sortDirection: SortDirection
) => {
  return [...campaigns].sort((a, b) => {
    let valueA, valueB;

    switch (sortField) {
      case "spending":
        valueA = parseFloat(a.spending.replace("$", "").replace(",", ""));
        valueB = parseFloat(b.spending.replace("$", "").replace(",", ""));
        break;
      case "ctr":
        valueA = parseFloat(a.ctr.replace("%", ""));
        valueB = parseFloat(b.ctr.replace("%", ""));
        break;
      default:
        valueA = a[sortField];
        valueB = b[sortField];
    }

    if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
    if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
};
