import QRCodeSection from "@/components/sections/qrcode-section";
import CareersHero from "./_components/careers-hero";
import Header from "@/components/layout/header";
import OpenRoles from "./_components/open-roles";

const CareersPage = () => {
	return (
		<>
			<Header />
			<CareersHero />
			<OpenRoles />
			<QRCodeSection />
		</>
	);
};

export default CareersPage;
