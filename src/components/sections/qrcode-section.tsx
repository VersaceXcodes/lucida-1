import Section from "../ui/section";
import { HeadingMd, BodyMdParagraph } from "../ui/typography";

const QRCodeSection = () => {
	return (
		<div className="w-full bg-neutral-5">
			<Section className="px-6 overflow-hidden bg-white md:rounded-b-[60px] rounded-4xl border-b border-b-neutral-10">
				<div className="w-full flex flex-col text-center items-center">
					<HeadingMd className="mb-[18px]">
						Get it now. Explore. Enjoy.
					</HeadingMd>
					<BodyMdParagraph className="max-w-[540px] w-full">
						Discover quick and comprehensive answers to common questions about
						our platform, services, and features.
					</BodyMdParagraph>
					<div className="w-full md:py-[60px] py-10 flex items-center justify-center">
						<div className="relative w-max">
							<img
								src="./images/qr-shadow.png"
								className="absolute  -bottom-[123px] left-1/2 -translate-1/2"
								alt="Lucida React shadow"
							/>
							<img
								src="./images/qr.png"
								className="w-[222px] h-[222px] qr relative"
								alt="Lucida React"
							/>
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default QRCodeSection;
