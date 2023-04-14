import BlackArtilce from "./BlackArtilce";
import BlueSection from "./BlueSection";
import GrayAside from "./GrayAside";
import GreenNav from "./GreenNav";
import OrangeFooter from "./OrangeFooter";
import RedHeader from "./RedHeader";

export default function Bai2e() {
  return (
    <div style={{ marginTop: "20px" }}>
      <RedHeader />
      <GreenNav />
      <div style={{display: 'flex'}}>
        <div>
          <BlueSection />
          <BlackArtilce />
        </div>
        <GrayAside />
      </div>
        <OrangeFooter/>
    </div>
  );
}
