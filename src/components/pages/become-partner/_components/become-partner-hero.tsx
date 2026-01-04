import Section from "@/components/ui/section";
import { BodyMdParagraph, HeadingMd } from "@/components/ui/typography";


const BecomePartnerHero = () => {
	return (
		<Section className="px-6">
			<div className="max-w-[540px] mx-auto text-center flex flex-col gap-4">
				<HeadingMd>Become a Service Provider</HeadingMd>
				<BodyMdParagraph>
					Join Libya's first home services platform. Reach more customers,
					manage your bookings easily, and grow your business with Lucida.
				</BodyMdParagraph>
			</div>
		</Section>
	);
};

export default BecomePartnerHero;
