import Section from "../ui/section";

const QRCodeSection = () => {
	return (
		<Section className="px-6 overflow-hidden">
			<div className="w-full flex flex-col text-center items-center">
				<h2 className="md:text-[40px] md:leading-[48px] text-4xl font-semibold mb-[18px]">
					Get it now. Explore. Enjoy.
				</h2>
				<p className="max-w-[540px] w-full text-secondary/70 leading-6 trackin-[-0.16px]">
					Discover quick and comprehensive answers to common questions about our
					platform, services, and features.
				</p>
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
	);
};

export default QRCodeSection;
