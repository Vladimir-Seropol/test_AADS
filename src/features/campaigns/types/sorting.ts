export type SortField =
  | "name"
  | "status"
  | "paymentModel"
  | "spending"
  | "impressions"
  | "clicks"
  | "ctr";

export type SortDirection = "asc" | "desc";

export interface SortConfig {
  field: SortField;
  direction: SortDirection;
}

export interface ColumnConfig {
  field: SortField | "";
  label: string;
  tooltip: string;
}
