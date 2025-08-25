import FaqItem from "@/components/ui/faq-item";
import Section from "@/components/ui/section";
import {
	BodyMdParagraph,
	CodeMdParagraph,
	HeadingMd,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const HomeFaq = () => {
	const { i18n, t } = useTranslation();
	const FAQS = t("home.faq.items", { returnObjects: true }) as {
		title: string;
		content: string;
	}[];
	return (
		<Section className="px-6 bg-violet-5">
			<div className="flex flex-col max-w-[540px] mx-auto">
				<div
					dir={i18n.language === "ar" ? "rtl" : "ltr"}
					className={cn(
						"flex-col text-center md:mb-24 mb-12",
						i18n.language === "ar" ? "items-end text-right" : "items-start"
					)}>
					<CodeMdParagraph className="mb-[18px]">
						{t("home.faq.name")}
					</CodeMdParagraph>
					<HeadingMd>{t("home.faq.title")}</HeadingMd>
					<BodyMdParagraph>{t("home.faq.content")}</BodyMdParagraph>
				</div>
				<div className="w-full flex flex-col gap-[14px]">
					{FAQS.map((faq) => (
						<FaqItem
							key={faq.title}
							title={faq.title}
							content={faq.content}
						/>
					))}
				</div>
			</div>
		</Section>
	);
};

export default HomeFaq;
