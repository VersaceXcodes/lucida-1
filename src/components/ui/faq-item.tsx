import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BodyMdParagraph } from "./typography";
import { useTranslation } from "react-i18next";

const FaqItem = ({
	title,
	content,
}: {
	title: string;
	content: React.ReactNode;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const { i18n } = useTranslation();

	return (
		<div
			className={cn(
				"w-full px-7 py-6 rounded-xl bg-white border-[0.5px] border-faqborderClose transition-colors duration-200 ease-in-out",
				{
					"border-faqborderOpen": isOpen,
					"text-right": i18n.language === "ar",
				}
			)}
			style={{
				boxShadow:
					"0 -0.5px 0 0 rgba(0, 0, 0, 0.12) inset, 0 1px 2px -0.5px rgba(0, 0, 0, 0.08)",
			}}>
			{/* Title */}
			<div
				onClick={() => setIsOpen(!isOpen)}
				className="grid grid-cols-[1fr_24px] gap-[14px] cursor-pointer">
				<BodyMdParagraph className="text-primary font-medium">
					{title}
				</BodyMdParagraph>
				<motion.svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					animate={{ rotate: isOpen ? 45 : 0 }}
					transition={{ duration: 0.25 }}>
					<path
						d="M11.1667 11.1667V6.16675H12.8334V11.1667H17.8334V12.8334H12.8334V17.8334H11.1667V12.8334H6.16675V11.1667H11.1667Z"
						fill="#0A0A0A"
						fillOpacity="0.45"
					/>
				</motion.svg>
			</div>

			{/* Animated Answer */}
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="content"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="overflow-hidden">
						<div className="mt-[14px] grid grid-cols-[1fr_24px] gap-[14px]">
							<BodyMdParagraph>{content}</BodyMdParagraph>
							<div></div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FaqItem;
