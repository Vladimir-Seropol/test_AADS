// src/features/campaigns/campaignsSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import type { Campaign } from "./types/campaign";
import { INITIAL_CAMPAIGNS } from "../campaigns/constants/campaigns.constants";

interface CampaignsState {
  items: Campaign[];
}

const initialState: CampaignsState = {
  items: INITIAL_CAMPAIGNS,
};

const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    addCampaign: (state, action: PayloadAction<Omit<Campaign, "id">>) => {
      state.items.push({
        id: nanoid(6),
        ...action.payload,
      });
    },
    deleteCampaign: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addCampaign, deleteCampaign } = campaignsSlice.actions;
export default campaignsSlice.reducer;
