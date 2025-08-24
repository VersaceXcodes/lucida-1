import Header from "@/components/layout/header";
import { BodyLgParagraph, HeadingXl } from "@/components/ui/typography";

const HeroPage = () => {
	return (
		<div className="relative">
			<Header />
			<img
				src="./images/hero-page-bg.webp"
				alt=""
				className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
			/>
			<div className="px-6 w-full">
				<div className="md:max-w-[1000px] mx-auto pt-20 pb-14 relative flex flex-col items-center text-center">
					<div className="flex flex-col items-center md:gap-[34px] gap-6 max-w-[820px] mx-auto">
						<HeadingXl>Look for awesome experts close to you</HeadingXl>
						<BodyLgParagraph className="text-secondary/75">
							Lucida is the coolest app for finding local pros right in your
							area.
						</BodyLgParagraph>
						<div className="flex items-center gap-4 md:justify-start justify-center">
							<a href="apple.com">
								<img
									src="./images/appstore.svg"
									className="h-10 w-auto"
									fetchPriority="high"
									alt="Download on the App Store"
								/>
							</a>
							<a href="google.com">
								<img
									src="./images/google-play.svg"
									className="h-10 w-auto"
									fetchPriority="high"
									alt="Download on Google Play"
								/>
							</a>
						</div>
					</div>
					<img src="./images/hero-card.webp" className="w-full h-auto md:mt-12 mt-8" alt="" />
				</div>
			</div>
		</div>
	);
};

export default HeroPage;
