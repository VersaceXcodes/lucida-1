import Section from "@/components/ui/section";

const DownloadApp = () => {
	return (
		<Section className="px-6">
			<div
				className="max-w-[1110px] mx-auto relative rounded-3xl overflow-hidden"
				style={{
					
					boxShadow:
						"0 -0.5px 0 0 rgba(0, 0, 0, 0.12) inset, 0 1px 2px -0.5px rgba(0, 0, 0, 0.08)",
				}}>
				<img
					src="./images/download-app-bg.webp"
					className="absolute inset-0 w-full h-full object-cover"
					fetchPriority="high"
					loading="lazy"
					alt="Download App"
				/>
				<div className="flex justify-between px-9 relative items-center md:gap-6 max-md:flex-col">
					<div className="py-10">
						<h4 className="md:inline-block block text-white md:text-2xl md:leading-[30px] text-xl font-semibold md:text-left text-center">
							Download now and explore
						</h4>
						<p className="text-white/70 leading-6 tracking-[-0.16px] mt-[14px] max-w-[320px] md:text-left text-center">
							Lucida is the coolest app for finding local pros right in your
							area.
						</p>
						<div className="flex items-center mt-6 gap-4 md:justify-start justify-center">
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
					<img
						src="./images/download-app-iphone.webp"
						className="realtive md:w-1/2 w-[90%] max-w-[370px] h-auto md:mt-[45px] mt-6 md:mr-2"
						fetchPriority="high"
						alt=""
					/>
				</div>
			</div>
		</Section>
	);
};

export default DownloadApp;
