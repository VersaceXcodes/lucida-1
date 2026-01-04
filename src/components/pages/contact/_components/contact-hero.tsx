import Section from "@/components/ui/section";
import { BodyMdParagraph, HeadingMd } from "@/components/ui/typography";

const ContactHero = () => {
	return (
		<Section className="px-6">
			<div className="max-w-[540px] mx-auto w-full flex flex-col text-center gap-4">
				<HeadingMd>Get in Touch with Lucida</HeadingMd>
				<BodyMdParagraph>
					Have questions about our home services? Need help with a booking?
					Want to become a service provider? We're here to assist you.
				</BodyMdParagraph>
			</div>
		</Section>
	);
};

export default ContactHero;
