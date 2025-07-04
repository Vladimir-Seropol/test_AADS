import type {
  ColumnConfig,
  SortField,
  SortDirection,
} from "../../types/sorting";
import { Tooltip } from "../../../../shared/ui/feedback/Tooltip";

interface CampaignTableHeaderProps {
  columns: ColumnConfig[];
  onSort: (field: SortField) => void;
  sortField: SortField;
  sortDirection: SortDirection;
}

export const CampaignTableHeader = ({
  columns,
  onSort,
  sortField,
  sortDirection,
}: CampaignTableHeaderProps) => {
  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) return null;
    return <span className="ml-1">{sortDirection === "asc" ? "↑" : "↓"}</span>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.field || "actions"}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 relative"
            onClick={() => column.field && onSort(column.field as SortField)}
          >
            <Tooltip content={column.tooltip} position="bottom">
              <div className="flex items-center">
                {column.label}
                {column.field && renderSortIcon(column.field as SortField)}
              </div>
            </Tooltip>
          </th>
        ))}
      </tr>
    </thead>
  );
};
