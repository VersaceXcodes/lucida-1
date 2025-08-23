import Section from "@/components/ui/section";
import { BodyMdParagraph, HeadingMd } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const CareersHero = () => {
	return (
		<>
			<Section className="px-6">
				<div className="max-w-[540px] mx-auto text-center flex flex-col gap-4">
					<HeadingMd>Shape the Future with Us</HeadingMd>
					<BodyMdParagraph>
						Manage Your Entire Business Ecosystem from a Single Dashboard with
						Our Scalable, Cloud-Based SaaS Solution Tailored to Your Needs.
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
		title: "Career Development Opportunities",
		content:
			"Advance your career through structured training programs, mentorship, and growth opportunities tailored to your ambitions.",
		img: "./images/careers/1.png",
	},
	{
		title: "Diverse and Inclusive Culture",
		content:
			"We celebrate diversity and foster a welcoming environment where everyone feels valued, respected, and empowered to excel.",
		img: "./images/careers/1.png",
	},
];

export default CareersHero;
