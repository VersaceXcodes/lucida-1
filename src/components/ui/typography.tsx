import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export const HeadingMd = ({
	children,
	className,
	...props
}: HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h2
			className={cn(
				"md:text-[40px] md:leading-[48px] text-4xl font-semibold",
				className
			)}
			{...props}>
			{children}
		</h2>
	);
};

export const BodyMdParagraph = ({
	children,
	className,
	...props
}: HTMLAttributes<HTMLParagraphElement>) => {
	return (
		<p
			className={cn(
				" text-secondary/70 leading-6 tracking-[-0.16px]",
				className
			)}
			{...props}>
			{children}
		</p>
	);
};

export const BodyLgParagraph = ({
	children,
	className,
	...props
}: HTMLAttributes<HTMLParagraphElement>) => {
	return (
		<p
			className={cn(
				"text-[18px] text-primary leading-7 tracking-[-0.18px]",
				className
			)}
			{...props}>
			{children}
		</p>
	);
};

export const CodeMdParagraph = ({
	children,
	className,
	...props
}: HTMLAttributes<HTMLParagraphElement>) => {
	return (
		<p
			className={cn(
				"text-sm leading-[18px] text-violet-60 font-jetbrains",
				className
			)}
			{...props}>
			{children}
		</p>
	);
};
