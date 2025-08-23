import QRCodeSection from "@/components/sections/qrcode-section";
import DownloadApp from "./_components/download-app";
import HomeFaq from "./_components/home-faq";
import CoreFeatures from "./_components/core-features";
import Features from "./_components/features";
import PresentationOne from "./_components/presentation-one";
import PresentationTwo from "./_components/presentation-two";
import PresentationThree from "./_components/presentation-three";
import HomeHero from "./_components/home-hero";

const HomePage = () => {
	return (
		<>
			<HomeHero />
			<PresentationOne />
			<PresentationTwo />
			<PresentationThree />
			<CoreFeatures />
			<Features />
			<HomeFaq />
			<DownloadApp />
			<QRCodeSection />
		</>
	);
};

export default HomePage;
