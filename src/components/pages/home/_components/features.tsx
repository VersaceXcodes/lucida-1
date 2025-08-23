import Section from "@/components/ui/section"
import { BodyMdParagraph, HeadingXs } from "@/components/ui/typography"
import { FEATURES_CARDS } from "@/constants/features"


const Features = () => {
  return (
		<Section className="px-6">
			<div className="max-w-[1020px] w-full mx-auto grid md:grid-cols-3 max-md:text-center max-md:max-w-[400px] gap-x-7 gap-y-12">
				{FEATURES_CARDS.map((feature) => (
					<div
						key={feature.title}
						className="flex flex-col">
						<img
							src={feature.img}
							className="w-full h-auto md:mb-18 mb-7"
							alt={feature.title}
						/>
						<HeadingXs className="block mb-[18px]">{feature.title}</HeadingXs>
						<BodyMdParagraph>
							Easily chat with experts and keep track of your projects on the go
							with our super easy mobile app made just for you.
						</BodyMdParagraph>
					</div>
				))}
			</div>
		</Section>
	);
}

export default Features