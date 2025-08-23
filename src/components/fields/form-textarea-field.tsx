import type { TextareaHTMLAttributes } from "react";
import Textarea from "./textarea";

interface FormTextareaFieldProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	variant?: "default" | "outlined";
}

const FormTextareaField = ({
	label,
	variant = "default",
	...props
}: FormTextareaFieldProps) => {
	return (
		<div className="flex flex-col gap-2 w-full">
			{label && <label className="text-sm font-medium">{label}</label>}
			{variant === "default" && <Textarea {...props} />}
		</div>
	);
};

export default FormTextareaField;
