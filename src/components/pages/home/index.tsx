import QRCodeSection from "@/components/sections/qrcode-section";
import DownloadApp from "./_components/download-app";
import HomeFaq from "./_components/home-faq";
import CoreFeatures from "./_components/core-features";

const HomePage = () => {
	return (
		<>
			<CoreFeatures />
			<HomeFaq />
			<DownloadApp />
			<QRCodeSection />
		</>
	);
};

export default HomePage;
