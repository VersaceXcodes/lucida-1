import Section from "@/components/ui/section";
import { BodyMdParagraph, HeadingMd } from "@/components/ui/typography";

const PresentationOne = () => {
	return (
		<Section className="px-6">
			<div className="md:grid md:grid-cols-2 md:gap-18 items-center max-w-[1110px] mx-auto flex flex-col gap-12">
				<div className="grid max-md:order-2">
					<HeadingMd className="block mb-[18px] md:max-w-[470px] max-w-[540px]">
						Exclusive place for Exploring
					</HeadingMd>
					<BodyMdParagraph className="md:max-w-[470px] max-w-[540px]">
						Easily chat with experts and keep track of your projects on the go
						with our super easy mobile app made just for you.
					</BodyMdParagraph>
				</div>
                <img src="./images/presentation/1.webp" className="w-full h-auto max-md:max-w-[540px] max-md:order-1" loading="lazy" alt="" />
			</div>
		</Section>
	);
};

export default PresentationOne;
