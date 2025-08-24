import Section from "@/components/ui/section";
import { BodyMdParagraph, HeadingXs } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const Features = () => {
	const { t, i18n } = useTranslation();
	const FEATURES_CARDS = t("home.features", { returnObjects: true }) as {
		img: string;
		title: string;
		content: string;
	}[];
	return (
		<Section className="px-6">
			<div className="max-w-[1020px] w-full mx-auto grid md:grid-cols-3  max-md:max-w-[400px] gap-x-7 gap-y-12">
				{FEATURES_CARDS.map((feature) => (
					<div
						dir={i18n.language === "ar" ? "rtl" : "ltr"}
						key={feature.title}
						className={cn("flex flex-col", {
							"max-md:text-center": i18n.language !== "ar",
						})}>
						<img
							src={feature.img}
							className="w-full h-auto md:mb-18 mb-7"
							alt={feature.title}
						/>
						<HeadingXs className="block mb-[18px]">{feature.title}</HeadingXs>
						<BodyMdParagraph>{feature.content}</BodyMdParagraph>
					</div>
				))}
			</div>
		</Section>
	);
};

export default Features;
