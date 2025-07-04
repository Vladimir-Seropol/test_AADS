export type CampaignStatus = 'Active' | 'Paused' | 'Warning';

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  paymentModel: string;
  spending: string;    
  impressions: number;
  clicks: number;
  ctr: string;         
}
