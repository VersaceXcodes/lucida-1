import Section from "@/components/ui/section";
import { BodyMdParagraph, HeadingMd } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const CareersHero = () => {
	return (
		<>
			<Section className="px-6">
				<div className="max-w-[540px] mx-auto text-center flex flex-col gap-4">
					<HeadingMd>Join the Lucida Team</HeadingMd>
					<BodyMdParagraph>
						Help us transform home services in Libya. Join our growing team
						and make a difference in how people access trusted services.
					</BodyMdParagraph>
				</div>
			</Section>
			{ITEMS.map((item, index) => (
				<Section
					key={item.title}
					className="px-6">
					<div className="md:max-w-[1110px] max-w-[540px] mx-auto grid md:grid-cols-2 w-full md:gap-16 gap-12 items-center">
						<div
							className={cn(
								"order-last",
								index % 2 === 0 ? "md:order-first" : "md:order-last"
							)}>
							<HeadingMd>{item.title}</HeadingMd>
							<BodyMdParagraph className="mt-4 max-w-[480px]">
								{item.content}
							</BodyMdParagraph>
						</div>
						<img
							className={cn(
								"w-full h-auto order-first",
								index % 2 === 0 ? "md:order-last" : "md:order-first"
							)}
							src={item.img}
							alt=""
						/>
					</div>
				</Section>
			))}
		</>
	);
};

const ITEMS = [
	{
		title: "Grow with Libya's Leading Platform",
		content:
			"Join the team behind Libya's first home services app. Develop your skills, grow your career, and be part of something transformative.",
		img: "./images/careers/1.png",
	},
	{
		title: "Make an Impact in Your Community",
		content:
			"Help connect thousands of Libyans with trusted service providers. Your work directly improves lives and supports local businesses.",
		img: "./images/careers/1.png",
	},
];

export default CareersHero;
