import Section from "@/components/ui/section";
import {
	BodyLgParagraph,
	BodyMdParagraph,
	CodeMdParagraph,
	HeadingMd,
} from "@/components/ui/typography";
import { CORE_FEATURES } from "@/constants/features";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const CoreFeatures = () => {
	const { t, i18n } = useTranslation();
	return (
		<Section className="px-6">
			<div
				className={cn(
					"flex flex-col items-center sm:max-w-[1110px] max-w-[540px] mx-auto w-full text-center",
					{
						"text-right items-end": i18n.language === "ar",
					}
				)}>
				<CodeMdParagraph className="mb-[18px] max-w-[540px]">
					{t("home.coreFeatures.key")}
				</CodeMdParagraph>
				<HeadingMd className="max-w-[540px]">
					{t("home.coreFeatures.title")}
				</HeadingMd>
				<BodyMdParagraph className="mt-[18px] max-w-[540px]">
					{t("home.coreFeatures.content")}
				</BodyMdParagraph>
			</div>
			<div className="sm:max-w-[1110px] max-w-[540px]  mx-auto md:mt-24 mt-12 grid gap-x-11 md:gap-y-24 gap-y-12 md:grid-cols-3 sm:grid-cols-2">
				{CORE_FEATURES[i18n.language as keyof typeof CORE_FEATURES].map(
					(feature) => (
						<div
							key={feature.title}
							className={cn(
								"flex flex-col items-center gap-[14px] text-center",
								{
									"items-end text-right": i18n.language === "ar",
								}
							)}>
							<div className="bg-violet-60/10 size-12 rounded-full grid place-content-center text-[20px]">
								{feature.icon}
							</div>
							<BodyLgParagraph className="font-semibold">
								{feature.title}
							</BodyLgParagraph>
							<BodyMdParagraph className="max-w-[340px]">
								{feature.content}
							</BodyMdParagraph>
						</div>
					)
				)}
			</div>
		</Section>
	);
};

export default CoreFeatures;
