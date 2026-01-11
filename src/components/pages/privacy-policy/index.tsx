import Header from "@/components/layout/header";
import Section from "@/components/ui/section";
import { BodyMdParagraph, HeadingMd, HeadingSm } from "@/components/ui/typography";

const PrivacyPolicyPage = () => {
	return (
		<>
			<Header />
			<Section className="px-6">
				<div className="max-w-[800px] mx-auto">
					<div className="text-center mb-12">
						<HeadingMd>Privacy Policy</HeadingMd>
						<BodyMdParagraph className="mt-4 text-primary/70">
							Effective Date: 25 June 2025
						</BodyMdParagraph>
						<BodyMdParagraph className="text-primary/70">
							Website: www.lucidaapp.com
						</BodyMdParagraph>
					</div>

					<div className="flex flex-col gap-8 text-primary/80">
						<div>
							<BodyMdParagraph>
								We are committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application to book home services and connect with service providers.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">1. Data Controller</HeadingSm>
							<BodyMdParagraph className="mb-2">
								Lucida is the data controller responsible for your personal data.
							</BodyMdParagraph>
							<BodyMdParagraph>
								Contact: info@lucidaapp.com
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">2. Personal Data We Collect</HeadingSm>
							<BodyMdParagraph className="mb-2">We may collect and process the following personal data:</BodyMdParagraph>
							<ul className="list-disc list-inside space-y-1 text-sm leading-6">
								<li>Name, phone number, and email address</li>
								<li>Location data (to enable service delivery)</li>
								<li>Booking history and service preferences</li>
								<li>Payment information (processed securely via third-party providers)</li>
							</ul>
						</div>

						<div>
							<HeadingSm className="mb-3">3. Legal Basis for Processing</HeadingSm>
							<BodyMdParagraph className="mb-2">We process your personal data based on:</BodyMdParagraph>
							<ul className="list-disc list-inside space-y-1 text-sm leading-6">
								<li>Contract – to provide the services you request</li>
								<li>Legitimate interest – to improve our services</li>
								<li>Consent – for marketing communications</li>
								<li>Legal obligation – when required by law</li>
							</ul>
						</div>

						<div>
							<HeadingSm className="mb-3">4. How We Use Your Data</HeadingSm>
							<BodyMdParagraph className="mb-2">We use your data to:</BodyMdParagraph>
							<ul className="list-disc list-inside space-y-1 text-sm leading-6 mb-4">
								<li>Provide and manage bookings</li>
								<li>Connect you with service providers</li>
								<li>Communicate with you about your account and bookings</li>
								<li>Improve our services and app functionality</li>
								<li>Send optional marketing messages (only with your consent)</li>
							</ul>
							<BodyMdParagraph className="mb-2 font-medium">Use of Location Data:</BodyMdParagraph>
							<BodyMdParagraph className="mb-4">
								Location data is used only while you interact with the app to connect you with nearby service providers, help you set and verify your service address, estimate travel and arrival windows, and guide service delivery to your address. We do not collect or track location in the background.
							</BodyMdParagraph>
							<BodyMdParagraph className="mb-2 font-medium">Use of Notifications:</BodyMdParagraph>
							<BodyMdParagraph>
								Notifications are used to deliver booking updates and reminders only; we do not send marketing messages.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">5. Data Sharing</HeadingSm>
							<BodyMdParagraph className="mb-2">We share your data only with:</BodyMdParagraph>
							<ul className="list-disc list-inside space-y-1 text-sm leading-6 mb-3">
								<li>Service providers (to fulfil bookings)</li>
								<li>Payment processors (for secure transactions)</li>
								<li>IT and hosting providers (for app functionality)</li>
							</ul>
							<BodyMdParagraph>
								All third parties are GDPR-compliant and process data based on our instructions.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">6. Data Retention</HeadingSm>
							<BodyMdParagraph>
								We retain your data only as long as necessary to provide our services or comply with legal obligations. You may request deletion at any time.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">7. Your Rights Under GDPR</HeadingSm>
							<BodyMdParagraph className="mb-2">You have the right to:</BodyMdParagraph>
							<ul className="list-disc list-inside space-y-1 text-sm leading-6 mb-3">
								<li>Access your personal data</li>
								<li>Correct inaccurate data</li>
								<li>Request deletion of your data</li>
								<li>Object to or restrict processing</li>
								<li>Withdraw consent at any time</li>
								<li>Data portability</li>
							</ul>
							<BodyMdParagraph>
								To exercise any of these rights, contact us at: info@lucidaapp.com
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">8. Data Security</HeadingSm>
							<BodyMdParagraph>
								We take appropriate technical and organizational measures to protect your data. However, no system is 100% secure.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">9. Changes to This Policy</HeadingSm>
							<BodyMdParagraph>
								We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or by email.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">10. Contact and Complaints</HeadingSm>
							<BodyMdParagraph className="mb-3">
								If you have questions or complaints, contact us at: info@lucidaapp.com
							</BodyMdParagraph>
							<BodyMdParagraph>
								You also have the right to lodge a complaint with your local Data Protection Authority.
							</BodyMdParagraph>
						</div>

						<div className="border-t border-primary/10 pt-8 mt-4">
							<BodyMdParagraph className="text-center text-primary/60">
								For questions about this Privacy Policy, contact us at: info@lucidaapp.com
							</BodyMdParagraph>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
};

export default PrivacyPolicyPage;
