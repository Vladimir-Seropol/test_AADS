import { BrowserRouter } from "react-router-dom";
import { Header } from "./features/campaigns/components/layout/Header";
import { CampaignTable } from "./features/campaigns/components/CampaignTable/CampaignTable";
import { Footer } from "./features/campaigns/components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full max-w-[1440px] bg-[#F8F8F9] md:pl-4">
        <Header />
        <main className="py-10 px-5  max-w-[1150px] mx-auto">
          <div className="max-w-7xl mx-auto   ">
            <CampaignTable />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
