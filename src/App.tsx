import { BrowserRouter } from "react-router-dom";
import { Header } from "./features/campaigns/components/layout/Header";
import { CampaignTable } from "./features/campaigns/components/CampaignTable/CampaignTable";
import { Footer } from "./features/campaigns/components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full">
        <Header />
        <main className="py-6 bg-[#F8F8F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CampaignTable />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
