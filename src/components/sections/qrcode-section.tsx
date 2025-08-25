import { cn } from "@/lib/utils";
import Section from "../ui/section";
import { HeadingMd, BodyMdParagraph } from "../ui/typography";
import { useTranslation } from "react-i18next";


const QRCodeSection = () => {
	const {i18n, t} = useTranslation()
	return (
		<div className="w-full bg-neutral-5">
			<Section className="px-6 overflow-hidden bg-white md:rounded-b-[60px] rounded-4xl border-b border-b-neutral-10">
				<div className={cn("w-full flex flex-col text-center items-center max-w-[480px] mx-auto", {
					"text-right": i18n.language === "ar",
				})}>
					<HeadingMd className="mb-[18px]">{t("home.qr.title")}</HeadingMd>
					<BodyMdParagraph className="max-w-[540px] w-full">
						{t("home.qr.content")}
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
