import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCampaign } from "../campaignsSlice";
import { type CampaignStatus } from "../types/campaign";
import type { RootState } from "../../../app/store";
import { TRANSLATIONS } from "../constants/translations.constants";
import { DEFAULT_START_NUMBER } from "../constants/campaigns.constants";
import { Button } from "../../../shared/ui/buttons/Button";
import { Checkbox } from "../../../shared/ui/inputs/Checkbox";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateCampaignModal = ({ isOpen, onClose }: Props) => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state: RootState) => state.campaigns.items);

  const [name, setName] = useState("");
  const [language, setLanguage] = useState<"" | "en" | "ru">("");
  const [categories, setCategories] = useState<string[]>([]);

  const t = language ? TRANSLATIONS[language] : TRANSLATIONS.en;

  const getNextCampaignNumber = () => {
    if (campaigns.length === 0) return DEFAULT_START_NUMBER + 1;

    const numbers = campaigns.map((camp) => {
      const match = camp.name.match(/#(\d+)$/);
      return match ? parseInt(match[1]) : 0;
    });

    const maxNumber = Math.max(...numbers, DEFAULT_START_NUMBER);
    return maxNumber + 1;
  };

  const toggleCategory = (cat: string) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleSubmit = () => {
    if (!name || !language) return;

    const campaignNumber = getNextCampaignNumber();
    const fullCampaignName = `${name} #${campaignNumber}`;

    dispatch(
      addCampaign({
        name: fullCampaignName,
        status: "Active" as CampaignStatus,
        paymentModel: "CPD: 0.00067287",
        spending: "$0.00",
        impressions: 0,
        clicks: 0,
        ctr: "0.0%",
      })
    );

    onClose();
    setName("");
    setCategories([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 px-[20px]">
      <div className="bg-white rounded-lg p-6 w-full max-w-[580px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{t.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.nameLabel}
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.languageLabel}
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "ru")}
          >
            <option value="">{t.languageSelect}</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.ratingsLabel}
          </label>
          <div className="flex flex-wrap gap-3">
            {t.categories.map((cat) => (
              <Checkbox
                key={cat}
                id={`category-${cat}`}
                checked={categories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              >
                {cat}
              </Checkbox>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <Button onClick={onClose} variant="outline">
            {t.cancel}
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            {t.create}
          </Button>
        </div>
      </div>
    </div>
  );
};
