import Section from "@/components/ui/section";
import { BodyMdParagraph, HeadingMd } from "@/components/ui/typography";


const BecomePartnerHero = () => {
	return (
		<Section className="px-6">
			<div className="max-w-[540px] mx-auto text-center flex flex-col gap-4">
				<HeadingMd>Become a partner</HeadingMd>
				<BodyMdParagraph>
					Whether you have a question, need support, or want to discuss a
					project, we’re here to help. Reach out to us via the form below or
					through any of the contact methods listed.
				</BodyMdParagraph>
			</div>
		</Section>
	);
};

export default BecomePartnerHero;
