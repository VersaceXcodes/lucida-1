import Header from "@/components/layout/header";
import { BodyLgParagraph, HeadingXl } from "@/components/ui/typography";

const HomeArHero = () => {
	return (
		<section className="relative w-full md:pb-[174px] pb-20 overflow-hidden">
			<img
				src="./images/ar-home-hero.webp"
				className="w-full h-full object-cover z-[-1] absolute top-0 left-0"
				alt=""
			/>
			<Header />
			<div className="w-full px-6">
				<div className="w-full max-w-[1110px] mx-auto text-right flex flex-col items-end md:pt-[88px] md:pb-[112px] pt-14 pb-20">
					<HeadingXl className="max-w-[820px]">
						أول تطبيق حجز خدمات منزلية في ليبيا
					</HeadingXl>
					<BodyLgParagraph className="max-w-[410px] text-primary/70 mt-6">
						مع لوسيدا حياتك أسهل. احجز خدمات التنظيف والصيانة والغسيل وأكثر
						بضغطة زر.
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

export default HomeArHero;
