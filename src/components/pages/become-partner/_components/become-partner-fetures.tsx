import Section from "@/components/ui/section";
import { BodyLgParagraph, BodyMdParagraph } from "@/components/ui/typography";
import { CORE_FEATURES } from "@/constants/features";

const BecomePartnerFeatures = () => {
	return (
		<Section className="px-6">
			<div className="max-w-[1110px] mx-auto md:mt-24 mt-12 sm:grid gap-x-10 md:gap-y-24 gap-y-12 md:grid-cols-3 sm:grid-cols-2 flex flex-col max-sm:items-center">
				{CORE_FEATURES.en.map((feature) => (
					<div
						key={feature.title}
						className="flex flex-col max-sm:items-center gap-[14px] sm:text-left text-center w-full">
						<div className="text-[24px]">{feature.icon}</div>
						<BodyLgParagraph className="font-semibold">
							{feature.title}
						</BodyLgParagraph>
						<BodyMdParagraph className="max-w-[340px] w-full">
							{feature.content}
						</BodyMdParagraph>
					</div>
				))}
			</div>
		</Section>
	);
};

export default BecomePartnerFeatures;
