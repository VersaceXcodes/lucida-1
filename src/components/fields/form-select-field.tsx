import Label from "./label";
import type { SelectProps } from "./select";
import Select from "./select";

interface FormSelectFieldProps extends SelectProps {
	label?: string;
}

const FormSelectField = ({ label, ...props }: FormSelectFieldProps) => {
	return (
		<div className="w-full flex flex-col gap-2">
			{label && <Label>{label}</Label>}
			<Select {...props} />
		</div>
	);
};

export default FormSelectField;
