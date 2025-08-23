import FaqItem from "@/components/ui/faq-item";
import Section from "@/components/ui/section";
import {
	BodyMdParagraph,
	CodeMdParagraph,
	HeadingMd,
} from "@/components/ui/typography";
import { FAQS } from "@/constants/faqs";

const HomeFaq = () => {
	return (
		<Section className="px-6 bg-violet-5">
			<div className="flex flex-col max-w-[540px] mx-auto">
				<div className="flex-col text-center md:mb-24 mb-12">
					<CodeMdParagraph className="mb-[18px]">
						GOT QUESTIONS?
					</CodeMdParagraph>
					<HeadingMd>FAQ</HeadingMd>
					<BodyMdParagraph>
						Discover quick and comprehensive answers to common questions about
						our platform, services, and features.
					</BodyMdParagraph>
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
