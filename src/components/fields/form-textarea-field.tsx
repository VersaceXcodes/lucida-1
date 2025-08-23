import type { TextareaHTMLAttributes } from "react";
import Textarea from "./textarea";
import { cn } from "@/lib/utils";

interface FormTextareaFieldProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	variant?: "default" | "outlined";
	containerClassName?: string;
}

const FormTextareaField = ({
	label,
	variant = "default",
	containerClassName,
	...props
}: FormTextareaFieldProps) => {
	return (
		<div className={cn("flex flex-col gap-2 w-full", containerClassName)}>
			{label && <label className="text-sm font-medium">{label}</label>}
			{variant === "default" && <Textarea {...props} />}
		</div>
	);
};

export default FormTextareaField;
