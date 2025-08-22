import { cn } from "@/lib/utils";
import  { type HTMLAttributes } from "react";

const Section = ({
	children,
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => {
	return (
		<section
			className={cn("md:py-24 py-12 w-full", className)}
			{...props}>
			{children}
		</section>
	);
};

export default Section;
