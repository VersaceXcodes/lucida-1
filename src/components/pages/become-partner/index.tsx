import Header from "@/components/layout/header";
import QRCodeSection from "@/components/sections/qrcode-section";
import BecomePartnerHero from "./_components/become-partner-hero";
import BecomePartnerFeatures from "./_components/become-partner-fetures";
import BecomePartnerContact from "./_components/become-partner-contact";

const BecomePartnerPages = () => {
	return (
		<>
			<Header />
			<BecomePartnerHero />
			<BecomePartnerFeatures />
			<BecomePartnerContact />
			<QRCodeSection />
		</>
	);
};

export default BecomePartnerPages;
