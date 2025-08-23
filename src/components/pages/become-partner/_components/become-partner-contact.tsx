import FormTextField from "@/components/fields/form-text-field";
import FormTextareaField from "@/components/fields/form-textarea-field";
import Section from "@/components/ui/section";
import {
	BodyMdParagraph,
	CodeMdParagraph,
	HeadingSm,
} from "@/components/ui/typography";

const BecomePartnerContact = () => {
	return (
		<Section className="bg-violet-5 px-6">
			<div className="max-w-[540px] flex flex-col md:gap-24 gap-12 mx-auto">
				<div className="flex flex-col gap-4 text-center items-center">
					<CodeMdParagraph>CONTACT US</CodeMdParagraph>
					<HeadingSm>
						Feel free to reach out to us anytime, we’d love to hear from you!
					</HeadingSm>
					<BodyMdParagraph>
						Discover quick and comprehensive answers to common questions about
						our platform, services, and features.
					</BodyMdParagraph>
				</div>
				<form className="flex flex-col">
					<div className="grid sm:grid-cols-2 gap-x-4 sm:gap-y-10 gap-y-8">
						<FormTextField
							label="Full name"
							type="text"
							placeholder="John Doe"
							className="bg-white border border-[rgba(10,_10,_10,_0.16)] h-10"
						/>
						<FormTextField
							label="Email"
							type="email"
							placeholder="john@doe.com"
							className="bg-white border border-[rgba(10,_10,_10,_0.16)] h-10"
						/>
						<FormTextField
							label="Natinonality"
							type="text"
							placeholder="Uzbek"
							className="bg-white border border-[rgba(10,_10,_10,_0.16)] h-10"
						/>
						<FormTextField
							label="Date of birth"
							type="date"
							placeholder="dd / mm / yyyy"
							className="bg-white border border-[rgba(10,_10,_10,_0.16)] h-10"
						/>
						<FormTextField
							label="Phone number"
							type="phone"
							placeholder="+1"
							className="bg-white border border-[rgba(10,_10,_10,_0.16)] h-10"
						/>
						<FormTextField
							label="Gender"
							type="text"
							placeholder="Male"
							className="bg-white border border-[rgba(10,_10,_10,_0.16)] h-10"
						/>
						<FormTextareaField
							label="Address"
							rows={4}
							placeholder="Type your address"
							containerClassName="sm:col-span-2"
							className="bg-white border border-[rgba(10,_10,_10,_0.16)] w-full"
						/>
					</div>
					<button
						type="submit"
						className="bg-primary text-white py-2.5 rounded-lg px-3 cursor-pointer mt-4 text-sm leading-5">
						Submit
					</button>
				</form>
			</div>
		</Section>
	);
};

export default BecomePartnerContact;
