import Header from "@/components/layout/header";
import { BodyLgParagraph, HeadingXl } from "@/components/ui/typography";

const HomeHero = () => {
	return (
		<section className="w-full relative overflow-hidden z-20 md:pb-[174px] pb-20">
			<Header />
			<img
				src="./images/ar-home-hero.webp"
				className="w-full h-full object-cover z-[-1] absolute top-0 left-0"
				alt=""
			/>
			<div className="w-full px-6">
				<div className="flex flex-col z-5 md:pt-[88px]  pt-14 text-center items-center md:max-w-[820px] max-w-[540px] mx-auto relative md:pb-[112px] pb-20">
					<HeadingXl>Libya's First Home Services App</HeadingXl>
					<BodyLgParagraph className="max-w-[410px] text-primary/70 mt-6">
						With Lucida, life is easier. Book cleaning, maintenance, laundry and more - all in a few taps.
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
				</div>
			</div>
			<div className="w-full flex items-center justify-center gap-[37px] relative mask-image max-w-max mx-auto">
				<img
					src="./images/ar-hero/1.png"
					className="w-[248px] h-auto flex-shrink-0"
				/>
				<img
					src="./images/ar-hero/2.png"
					className="w-[248px] h-auto flex-shrink-0"
				/>
				<img
					src="./images/ar-hero/3.png"
					className="w-[305px] h-auto flex-shrink-0"
				/>
				<img
					src="./images/ar-hero/4.png"
					className="w-[248px] h-auto flex-shrink-0"
				/>
				<img
					src="./images/ar-hero/5.png"
					className="w-[248px] h-auto flex-shrink-0"
				/>
			</div>
			<img
				style={{
					filter:
						"drop-shadow(0 118px 105px rgba(36, 14, 75, 0.19)) drop-shadow(0 26.357px 23.453px rgba(36, 14, 75, 0.11)) drop-shadow(0 7.847px 6.983px rgba(36, 14, 75, 0.08))",
				}}
				src="./images/ar-hero/3.png"
				className="w-[305px] h-auto flex-shrink-0 mx-auto mt-[-620px]"
			/>
		</section>
	);
};

export default HomeHero;
