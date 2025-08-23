import { BodyMdParagraph } from "@/components/ui/typography";
import { ChevronDown } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OpenRoleItemProps {
	role: string;
	type: string;
	category: string;
	location: string;
	content: React.ReactNode;
}

const OpenRoleItem = ({
	role,
	type,
	category,
	location,
	content,
}: OpenRoleItemProps) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="flex flex-col gap-5 py-5 border-b border-b-neutral-10 last:border-b-transparent">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex justify-between items-center gap-6 cursor-pointer">
				<BodyMdParagraph>
					{role} - {type}
				</BodyMdParagraph>
				<BodyMdParagraph className="max-md:hidden">{category}</BodyMdParagraph>
				<BodyMdParagraph className="max-md:hidden">{location}</BodyMdParagraph>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3 }}
					className="flex-shrink-0">
					<ChevronDown className="size-6 text-secondary/45" />
				</motion.div>
			</button>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="content"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="overflow-hidden w-full">
						{content}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default OpenRoleItem;
