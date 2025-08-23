import Section from "@/components/ui/section";
import {
	BodyLgParagraph,
	BodyMdParagraph,
	CodeMdParagraph,
	HeadingMd,
} from "@/components/ui/typography";
import { CORE_FEATURES } from "@/constants/core-features";

const CoreFeatures = () => {
	return (
		<Section className="px-6">
			<div className="flex flex-col max-w-[540px] mx-auto w-full text-center">
				<CodeMdParagraph className="mb-[18px]">CORE FEATURES</CodeMdParagraph>
				<HeadingMd>Your Go-To App for Hassle Free Solutions</HeadingMd>
				<BodyMdParagraph className="mt-[18px]">
					Seamlessly connect with experts and manage your projects from anywhere
					using our user-friendly mobile app designed for your convenience.
				</BodyMdParagraph>
			</div>
			<div className="max-w-[1110px] mx-auto md:mt-24 mt-12 grid md:gap-x-11 md:gap-y-24 gap-y-12 md:grid-cols-3 sm:grid-cols-2">
				{CORE_FEATURES.map((feature) => (
					<div
						key={feature.title}
						className="flex flex-col items-center gap-[14px] text-center">
						<div className="bg-violet-60/10 size-12 rounded-full grid place-content-center">
							{feature.icon}
						</div>
						<BodyLgParagraph className="font-semibold">{feature.title}</BodyLgParagraph>
                        <BodyMdParagraph className="max-w-[340px]">{feature.content}</BodyMdParagraph>
					</div>
				))}
			</div>
		</Section>
	);
};

export default CoreFeatures;
