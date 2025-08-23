import Header from "@/components/layout/header";
import { BodyLgParagraph, HeadingXl } from "@/components/ui/typography";

const HomeHero = () => {
	return (
		<section className="w-full relative overflow-hidden z-20">
			<Header />
			<img
				src="./images/home-hero-bg.webp"
				className="w-full h-full object-cover absolute top-0 left-0"
				alt=""
			/>
			<div className="w-full px-6">
				<div className="flex flex-col z-5 md:pt-[88px] md:pb-[172px] pt-14 pb-20 text-center items-center md:max-w-[820px] max-w-[540px] mx-auto relative">
					<HeadingXl>Look for awesome experts close to you</HeadingXl>
					<BodyLgParagraph className="max-w-[410px] text-primary/70 mt-6">
						Lucida is the coolest app for finding local pros right in your area.
					</BodyLgParagraph>
					<div className="flex items-center md:mt-11 mt-6 gap-4 md:justify-start justify-center">
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
					<img
						src="./images/home-hero-phone.webp"
						className=" w-[305px] h-auto md:mt-[112px] mt-12"
						style={{
							filter: `
      drop-shadow(0 118px 105px rgba(36, 14, 75, 0.19))
      drop-shadow(0 26.357px 23.453px rgba(36, 14, 75, 0.11))
      drop-shadow(0 7.847px 6.983px rgba(36, 14, 75, 0.08))
    `,
						}}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
