import type React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
	return <label className="text-sm leading-5 font-medium">{children}</label>;
};

export default Label;
