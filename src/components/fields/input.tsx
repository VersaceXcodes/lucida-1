import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

const Input = ({
	className,
	...props
}: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			className={cn(
				"py-2.5 px-3 bg-[rgba(10,_10,_10,_0.04)] rounded-lg text-sm leading-5 placeholder:text-secondary/45 focus:outline-violet-60 w-full",
				className
			)}
			{...props}
		/>
	);
};

export default Input;
