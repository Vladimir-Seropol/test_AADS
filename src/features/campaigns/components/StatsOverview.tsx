import type { Campaign } from "../types/campaign";

interface StatsOverviewProps {
  campaigns: Campaign[];
}

export const StatsOverview = ({ campaigns }: StatsOverviewProps) => {
  const totalImpressions = campaigns.reduce(
    (sum, campaign) => sum + campaign.impressions,
    0
  );
  const totalSpending = campaigns.reduce(
    (sum, campaign) =>
      sum + parseFloat(campaign.spending.replace("$", "").replace(",", "")),
    0
  );
  const activeCampaigns = campaigns.filter(
    (campaign) => campaign.status === "Active"
  ).length;

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)} M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)} K`;
    }
    return num.toString();
  };

  return (
    <div className=" rounded-lg mb-16 pt-5">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-24">
        <div className="flex-1 max-w-md">
         <h1 className="font-poppins font-bold text-[28px] leading-[40px] md:text-[36px] md:leading-[44px] tracking-normal text-[#263238] mb-4">
            The first crypto & bitcoin advertising network in the market
          </h1>
         <p className="font-inter font-normal text-base leading-6 tracking-normal text-[#263238] font-[600]">
            Skyrocket your publisher earnings with our game-changing traffic
            monetization solution
          </p>
        </div>

        <div className="w-full md:hidden space-y-4">
          <div className="flex justify-between items-center border-b pb-4 relative">
            <div>
              <p className="text-sm text-gray-500">Impressions/day</p>
              <p className="absolute right-0 top-1 text-2xl font-bold">
                {formatNumber(totalImpressions)}
                <span className="text-sm font-medium text-green-500">↑ 1.78%</span>
              </p>
              <p className=" text-xs text-gray-500">8.3M unique IPs</p>
            </div>
           
          </div>

          <div className="flex justify-between items-center border-b pb-4 relative">
            <div>
              <p className="text-sm text-gray-500">Active ad units</p>
              <p className="absolute right-0 top-1 text-2xl font-bold">
                {formatNumber(activeCampaigns * 1000)}
                 <span className="text-sm font-medium text-red-500">↓ 1.78%</span>
              </p>
              <p className="text-xs text-gray-500">over 6K publishers</p>
            </div>
           
          </div>

          <div className="flex justify-between items-center relative">
            <div>
              <p className="text-sm text-gray-500">Publishers earn/month</p>
              <p className="text-2xl font-bold absolute right-0 top-1">
                ${Math.floor(totalSpending / 1000)}K
                 <span className="text-sm font-medium text-green-500">↑ 3.17%</span>
              </p>
              <p className="text-xs text-gray-500">
                from {campaigns.length} ad campaigns
              </p>
            </div>
           
          </div>
        </div>

        <div className="hidden md:block w-full md:w-auto">
          <div className="grid grid-cols-3 gap-4 border-l border-gray-200 pl-6">
            <div className="pr-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">
                  Impressions/day
                </h3>
               
              </div>
              <p className="text-2xl font-bold mt-1">
                {formatNumber(totalImpressions)}
                <span className="text-sm font-medium text-green-500 pl-1">
                  ↑ 1.78%
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {campaigns.length} active campaigns
              </p>
            </div>

            <div className="px-4 border-l border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">
                  Active ad units
                </h3>
                
              </div>
              <p className="text-2xl font-bold mt-1">{activeCampaigns}
                <span className="text-sm font-medium text-red-500">
                  ↓ 1.78%
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                over {campaigns.length} publishers
              </p>
            </div>

            <div className="pl-4 border-l border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">
                  Publishers earn/month
                </h3>
               
              </div>
              <p className="text-2xl font-bold mt-1">
                ${totalSpending.toFixed(2)}
                 <span className="text-sm font-medium text-green-500">
                  ↑ 3.17%
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                from {campaigns.length} ad campaigns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
