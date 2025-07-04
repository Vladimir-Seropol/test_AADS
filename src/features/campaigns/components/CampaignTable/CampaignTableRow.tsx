import type { Campaign } from "../../types/campaign";
import { Tooltip } from "../../../../shared/ui/feedback/Tooltip";
import { IconButton } from "../../../../shared/ui/buttons/IconButton";
import { StatusBadge } from "../../../../shared/ui/StatusBadge";
import { PaymentModel } from "../../../../shared/ui/PaymentModel";

interface CampaignTableRowProps {
  campaign: Campaign;
  onDelete: (id: string) => void;
}

export const CampaignTableRow = ({
  campaign,
  onDelete,
}: CampaignTableRowProps) => {
  return (
    <tr key={campaign.id} className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <Tooltip content={campaign.name}>
          <span className="text-sm font-semibold text-primary">
            {campaign.name}
          </span>
        </Tooltip>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <StatusBadge status={campaign.status} />
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <PaymentModel model={campaign.paymentModel} />
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Tooltip content={`Общие расходы: $${campaign.spending}`}>
          <span>$ {campaign.spending}</span>
        </Tooltip>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Tooltip content={`Показы: ${campaign.impressions.toLocaleString()}`}>
          <span>{campaign.impressions.toLocaleString()}</span>
        </Tooltip>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Tooltip content={`Клики: ${campaign.clicks.toLocaleString()}`}>
          <span>{campaign.clicks.toLocaleString()}</span>
        </Tooltip>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Tooltip content={`CTR: ${campaign.ctr}%`}>
          <span>{campaign.ctr}%</span>
        </Tooltip>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <Tooltip content="Удалить кампанию">
          <IconButton
            onClick={() => onDelete(campaign.id)}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z" />
                <path d="M10 11v6M14 11v6" />
              </svg>
            }
          />
        </Tooltip>
      </td>
    </tr>
  );
};
