import QRCodeSection from "@/components/sections/qrcode-section";
import DownloadApp from "./_components/download-app";
import HomeFaq from "./_components/home-faq";

const HomePage = () => {
	return (
		<>
			<HomeFaq />
			<DownloadApp />
			<QRCodeSection />
		</>
	);
};

export default HomePage;
