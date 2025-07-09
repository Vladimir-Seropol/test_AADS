import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../app/store";
import { deleteCampaign } from "../../campaignsSlice";
import { CreateCampaignModal } from "../CreateCampaignModal";
import { Button } from "../../../../shared/ui/buttons/Button";
import { StatsOverview } from "../StatsOverview";
import { sortCampaigns } from "../../utils/sorting";
import type { ColumnConfig, SortField } from "../../types/sorting";
import { CampaignTableHeader } from "./CampaignTableHeader";
import { CampaignTableRow } from "./CampaignTableRow";
import { CampaignCard } from "../CampaignCard";
import { formatNumber, getStatusClasses } from "../../utils/campaignUtils";

const columns: ColumnConfig[] = [
  { field: "name", label: "Campaign", tooltip: "Название кампании" },
  { field: "status", label: "Status", tooltip: "Текущий статус кампании" },
  { field: "paymentModel", label: "Payment Model", tooltip: "Модель оплаты" },
  { field: "spending", label: "Spendings", tooltip: "Общие расходы" },
  { field: "impressions", label: "Impressions", tooltip: "Количество показов" },
  { field: "clicks", label: "Clicks", tooltip: "Количество кликов" },
  { field: "ctr", label: "CTR", tooltip: "Click-Through Rate (CTR)" },
  { field: "", label: "Actions", tooltip: "Действия с кампанией" },
];

export const CampaignTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [expandedCampaignId, setExpandedCampaignId] = useState<string | null>(
    null
  );

  const campaigns = useSelector((state: RootState) => state.campaigns.items);
  const dispatch = useDispatch();

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const toggleCampaign = (id: string) => {
    setExpandedCampaignId(expandedCampaignId === id ? null : id);
  };

  const sortedCampaigns = sortCampaigns(campaigns, sortField, sortDirection);

  return (
    <>
      <StatsOverview campaigns={campaigns} />
      <div className="noto-sans  rounded-lg shadow-sm overflow-hidden">
        <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10 mb-7">
          <h2 className="text-xl font-semibold text-gray-800">Campaigns</h2>
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            + Create New Campaign
          </Button>
        </div>

        {/* Мобильная версия */}
        <div className="md:hidden space-y-2 p-4 bg-white">
          {sortedCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              isExpanded={expandedCampaignId === campaign.id}
              onToggle={() => toggleCampaign(campaign.id)}
              onDelete={() => dispatch(deleteCampaign(campaign.id))}
              formatNumber={formatNumber}
              getStatusClasses={getStatusClasses}
            />
          ))}
        </div>

        {/* Десктопная версия */}
        <div className="border hidden md:block overflow-x-auto bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <CampaignTableHeader
              columns={columns}
              onSort={handleSort}
              sortField={sortField}
              sortDirection={sortDirection}
            />
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedCampaigns.map((campaign) => (
                <CampaignTableRow
                  key={campaign.id}
                  campaign={campaign}
                  onDelete={(id) => dispatch(deleteCampaign(id))}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CreateCampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
