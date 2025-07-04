// src/features/campaigns/campaigns.constants.ts
import type { Campaign } from "../types/campaign";

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: "109973",
    name: "Кампания #109973",
    status: "Active",
    paymentModel: "0.00067287",
    spending: "43.12",
    impressions: 123456,
    clicks: 9456,
    ctr: "0.5%",
  },
  {
    id: "109974",
    name: "Длинное название кампании #109974",
    status: "Warning",
    paymentModel: "0.00067287",
    spending: "43.12",
    impressions: 123456,
    clicks: 9456,
    ctr: "0.5%",
  },
  {
    id: "109975",
    name: "Кампания #109975",
    status: "Paused",
    paymentModel: "0.00067287",
    spending: "43.12",
    impressions: 123456,
    clicks: 9456,
    ctr: "0.5%",
  },
];

export const DEFAULT_START_NUMBER = 109975;
