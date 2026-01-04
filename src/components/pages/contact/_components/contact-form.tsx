import FormSelectField from "@/components/fields/form-select-field";
import FormTextField from "@/components/fields/form-text-field";
import FormTextareaField from "@/components/fields/form-textarea-field";
import Section from "@/components/ui/section";
import {
	BodyMdParagraph,
	CodeMdParagraph,
	HeadingSm,
} from "@/components/ui/typography";
import { contactTopics } from "@/constants/form";

const ContactForm = () => {
	return (
		<Section className="px-6">
			<div className="max-w-[540px] flex flex-col md:gap-24 gap-12 mx-auto">
				<div className="flex flex-col gap-4 text-center items-center">
					<CodeMdParagraph>CONTACT US</CodeMdParagraph>
					<HeadingSm>
						We're here to help with your home service needs
					</HeadingSm>
					<BodyMdParagraph>
						Whether you need booking assistance, want to provide feedback,
						or are interested in becoming a service provider, reach out below.
					</BodyMdParagraph>
				</div>
				<form className="flex flex-col">
					<div className="flex flex-col sm:gap-10 gap-8">
						<div className="grid sm:grid-cols-2 sm:gap-4 gap-8">
							<FormTextField
								label="Full name"
								type="text"
								placeholder="John Doe"
							/>
							<FormTextField
								label="Email"
								type="email"
								placeholder="joh@doe.com"
							/>
						</div>
						<FormSelectField
							label="Topic"
							options={contactTopics}
						/>
						<FormTextareaField
							placeholder="Message..."
							label="Write your feedback"
                            rows={5}
						/>
					</div>
                    <button type="submit" className="bg-primary text-white py-2.5 rounded-lg px-3 cursor-pointer mt-4 text-sm leading-5">Submit</button>
				</form>
			</div>
		</Section>
	);
};

export default ContactForm;
