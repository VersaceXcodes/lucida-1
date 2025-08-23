import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface SelectProps {
	value?: string;
	onChange?: (value: string) => void;
	options?: { label: string; value: string }[];
}

const Select = ({ value, onChange, options }: SelectProps) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	// outside click handler
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(e.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleSelect = (val: string) => {
		if (onChange) onChange(val);
		setIsOpen(false);
	};

	return (
		<div
			ref={wrapperRef}
			className="w-full relative">
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				type="button"
				className={cn(
					"py-2.5 px-3 bg-[rgba(10,_10,_10,_0.04)] rounded-lg text-sm leading-5 w-full flex items-center cursor-pointer",
					{ "outline-2 outline-violet-60": isOpen }
				)}>
				<span className="text-secondary/45 flex-1 truncate text-left">
					{options?.find((opt) => opt.value === value)?.label || "Select"}
				</span>
				<ChevronDown
					className={cn(
						"size-[14px] text-secondary/45 shrink-0 transition-transform",
						{ "rotate-180": isOpen }
					)}
				/>
			</button>

			{/* Animated dropdown */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="absolute top-full left-0 w-full mt-1 bg-white max-h-[150px] overflow-y-auto border rounded-lg border-secondary/10 p-3 shadow-lg">
						{options && options.length > 0 ? (
							options.map((opt) => (
								<button
									key={opt.value}
									onClick={() => handleSelect(opt.value)}
									type="button"
									className={cn(
										"py-2 px-3 text-sm hover:bg-violet-5 rounded-md grid grid-cols-[1fr_14px] w-full text-left",
										{ "bg-violet-5": opt.value === value }
									)}>
									<span>{opt.label}</span>
									<span>
										{opt.value === value && (
											<Check className="size-[14px] text-violet-60" />
										)}
									</span>
								</button>
							))
						) : (
							<div className="text-sm flex items-center justify-center py-10 px-3">
								No options
							</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Select;
