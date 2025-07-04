import { Button } from "../../../shared/ui/buttons/Button";
import { IconButton } from "../../../shared/ui/buttons/IconButton";
import type { Campaign } from "../types/campaign";

interface CampaignCardProps {
  campaign: Campaign;
  isExpanded: boolean;
  onToggle: () => void;
  onDelete: () => void;
  formatNumber: (num: number) => string;
  getStatusClasses: (status: string) => string;
}

export const CampaignCard = ({
  campaign,
  isExpanded,
  onToggle,
  onDelete,
  formatNumber,
  getStatusClasses,
}: CampaignCardProps) => (
  <div className="border rounded-lg overflow-hidden">
    <button
      className="w-full p-4 flex justify-between items-center text-primary"
      onClick={onToggle}
    >
      <div className="text-left">
        <h3 className="font-medium">{campaign.name}</h3>
        <p className="text-sm text-gray-500">#{campaign.id}</p>
        <div
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getStatusClasses(
            campaign.status
          )}`}
        >
          {campaign.status}
        </div>
      </div>
      <svg
        className={`w-5 h-5 text-gray-500 transform transition-transform ${
          isExpanded ? "rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    {isExpanded && (
      <div className="p-4 border-t">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Payment model</span>
            <span className="text-sm font-medium">
              CPD: <span className="text-primary">{campaign.paymentModel}</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Spendings</span>
            <span className="text-sm font-medium">${campaign.spending}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Impressions</span>
            <span className="text-sm font-medium">
              {formatNumber(campaign.impressions)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Clicks</span>
            <span className="text-sm font-medium">
              {formatNumber(campaign.clicks)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">CTR</span>
            <span className="text-sm font-medium">{campaign.ctr}%</span>
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <Button variant="outline" className="w-full" onClick={() => {}}>
            Go to Campaign Page
          </Button>
          <IconButton
            onClick={onDelete}
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
            className="p-1"
          />
        </div>
      </div>
    )}
  </div>
);
