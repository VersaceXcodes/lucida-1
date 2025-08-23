import Header from "@/components/layout/header";
import QRCodeSection from "@/components/sections/qrcode-section";
import ContactHero from "./_components/contact-hero";
import ContactForm from "./_components/contact-form";

const ContactPage = () => {
	return (
		<>
			<Header />
			<ContactHero />
			<ContactForm />
			<QRCodeSection />
		</>
	);
};

export default ContactPage;
