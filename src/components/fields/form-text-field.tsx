import type { InputHTMLAttributes } from "react";
import Input from "./input";

interface FormTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	variant?: "default" | "outlined";
}

const FormTextField = ({
	label,
	variant = "default",
	...props
}: FormTextFieldProps) => {
	return (
		<div className="flex flex-col gap-2 w-full">
			{label && <label className="text-sm font-medium">{label}</label>}
			{variant === "default" && <Input {...props} />}
		</div>
	);
};

export default FormTextField;
