import { getStatusBadgeClasses } from "../../features/campaigns/utils/campaignUtils";

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => (
  <span
    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClasses(
      status
    )}`}
  >
    {status}
  </span>
);
