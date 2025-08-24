import QRCodeSection from "@/components/sections/qrcode-section";
import DownloadApp from "./_components/download-app";
import HomeFaq from "./_components/home-faq";
import CoreFeatures from "./_components/core-features";
import Features from "./_components/features";
import PresentationOne from "./_components/presentation-one";
import PresentationTwo from "./_components/presentation-two";
import PresentationThree from "./_components/presentation-three";
import HomeHero from "./_components/home-hero";
import { useTranslation } from "react-i18next";

const HomePage = () => {
	const { i18n } = useTranslation();
	return (
		<>
			{i18n.language === "ar" ? <HomeHero /> : <HomeHero />}
			<CoreFeatures />
			<PresentationOne />
			<PresentationTwo />
			<PresentationThree />
			<Features />
			<HomeFaq />
			<DownloadApp />
			<QRCodeSection />
		</>
	);
};

export default HomePage;
