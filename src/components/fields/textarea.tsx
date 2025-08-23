import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

const Textarea = ({
	className,
	...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<textarea
			className={cn(
				"py-2.5 px-3 bg-[rgba(10,_10,_10,_0.04)] rounded-lg text-sm leading-5 placeholder:text-secondary/45 focus:outline-violet-60 w-full",
				className
			)}
			{...props}
		/>
	);
};

export default Textarea;
