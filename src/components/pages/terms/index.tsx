import Header from "@/components/layout/header";
import Section from "@/components/ui/section";
import { BodyMdParagraph, HeadingMd, HeadingSm } from "@/components/ui/typography";

const TermsPage = () => {
	return (
		<>
			<Header />
			<Section className="px-6">
				<div className="max-w-[800px] mx-auto">
					<div className="text-center mb-12">
						<HeadingMd>Terms and Conditions</HeadingMd>
						<BodyMdParagraph className="mt-4 text-primary/70">
							Effective Date: 01/07/2025
						</BodyMdParagraph>
						<BodyMdParagraph className="text-primary/70">
							Website: www.lucidaapp.com
						</BodyMdParagraph>
					</div>

					<div className="flex flex-col gap-8 text-primary/80">
						<div>
							<HeadingSm className="mb-3">Welcome to Lucida</HeadingSm>
							<BodyMdParagraph>
								Welcome to Lucida ("we," "our," "us"). These Terms and Conditions ("Terms") govern your access to and use of the Lucida mobile application and related services (collectively, the "Platform"). By accessing or using Lucida, you agree to be bound by these Terms. If you do not agree, please do not use our Platform.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">1. Overview</HeadingSm>
							<BodyMdParagraph>
								Lucida is a digital platform that connects customers ("Users," "you") with independent service providers ("Service Providers") who offer various home services ("Services"). Lucida does not directly provide any services but acts solely as an intermediary facilitating bookings between Users and Service Providers.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">2. Eligibility</HeadingSm>
							<BodyMdParagraph>
								You must be at least 18 years old to use the Platform. By registering, you represent and warrant that you have the legal capacity to enter into this agreement.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">3. Account Registration</HeadingSm>
							<BodyMdParagraph>
								To use certain features, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">4. Nature of Services</HeadingSm>
							<BodyMdParagraph>
								Lucida is not a service provider, employer, or agent of the Service Providers. All Services are performed by independent contractors who are not employed by Lucida. Lucida does not control, monitor, or guarantee the quality, safety, suitability, or legality of any Services provided.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">5. Bookings and Payments</HeadingSm>
							<BodyMdParagraph>
								Bookings are made through the Lucida app and confirmed once the Service Provider accepts. Payments are processed securely through the Platform or paid directly to Service provider by the User. Service fees, taxes, and applicable charges will be displayed before booking confirmation. Cancellations and refunds (if applicable) are subject to Lucida's Cancellation and Refund Policy.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">6. User Responsibilities</HeadingSm>
							<BodyMdParagraph className="mb-2">You agree to:</BodyMdParagraph>
							<ul className="list-disc list-inside space-y-1 text-sm leading-6">
								<li>Provide accurate details for bookings (location, timing, service requirements, etc.).</li>
								<li>Ensure a safe and suitable environment for Service Providers to perform their work.</li>
								<li>Treat all Service Providers with respect and comply with all applicable laws.</li>
							</ul>
						</div>

						<div>
							<HeadingSm className="mb-3">7. Service Provider Responsibilities</HeadingSm>
							<BodyMdParagraph className="mb-2">Service Providers are solely responsible for:</BodyMdParagraph>
							<ul className="list-disc list-inside space-y-1 text-sm leading-6">
								<li>The performance, quality, and completion of the Services they offer.</li>
								<li>Providing Services in compliance with applicable laws and professional standards.</li>
								<li>Holding any required licenses, permits, or insurance necessary to perform their Services.</li>
							</ul>
						</div>

						<div>
							<HeadingSm className="mb-3">8. Disclaimer and Limitation of Liability</HeadingSm>
							<BodyMdParagraph className="mb-3">
								Lucida acts only as a facilitator between Users and Service Providers. Lucida does not guarantee the performance, quality, reliability, timeliness, or outcome of any Services booked through the Platform.
							</BodyMdParagraph>
							<BodyMdParagraph className="mb-2">Lucida is not liable for:</BodyMdParagraph>
							<ul className="list-disc list-inside space-y-1 text-sm leading-6 mb-3">
								<li>Any damage to property or personal belongings arising from a Service;</li>
								<li>Any bodily injury, loss, or death caused during or after service delivery;</li>
								<li>Any misconduct, negligence, or omission by a Service Provider;</li>
								<li>Any dispute between a User and a Service Provider.</li>
							</ul>
							<BodyMdParagraph className="mb-3">
								Users are encouraged to verify Service Providers' credentials and exercise caution during interactions.
							</BodyMdParagraph>
							<BodyMdParagraph>
								To the fullest extent permitted by law, Lucida disclaims all warranties, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall Lucida, its affiliates, directors, or employees be liable for any indirect, incidental, consequential, or punitive damages, even if advised of the possibility of such damages.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">9. Indemnification</HeadingSm>
							<BodyMdParagraph>
								You agree to indemnify, defend, and hold harmless Lucida and its affiliates, directors, employees, and agents from and against any claims, damages, liabilities, losses, or expenses (including legal fees) arising from: Your use of the Platform; Your breach of these Terms; or Any dispute or interaction with a Service Provider.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">10. Intellectual Property</HeadingSm>
							<BodyMdParagraph>
								All content, design, trademarks, and materials on the Platform are owned or licensed by Lucida. You may not copy, modify, distribute, or use them for commercial purposes without written consent.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">11. Termination</HeadingSm>
							<BodyMdParagraph>
								Lucida may suspend or terminate your account at any time if you violate these Terms, misuse the Platform, or engage in fraudulent activities. You may also delete your account at any time via the app.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">12. Governing Law</HeadingSm>
							<BodyMdParagraph>
								These Terms shall be governed by and construed in accordance with the laws of Libya.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">13. Amendments</HeadingSm>
							<BodyMdParagraph>
								Lucida reserves the right to update or modify these Terms at any time. Changes will be effective upon posting on the Platform. Continued use of the Platform constitutes acceptance of the revised Terms.
							</BodyMdParagraph>
						</div>

						<div>
							<HeadingSm className="mb-3">14. Electronic Approval of the Contract and Terms & Conditions</HeadingSm>
							<BodyMdParagraph className="mb-3">
								In accordance with the provisions of Federal Law No. (6) of 2022 concerning Electronic Transactions in the State, the Second Party (Service Requester/User) acknowledges and agrees that they are not permitted to use the Lucida Application or submit any service requests through the platform unless they complete the following electronic approval procedures:
							</BodyMdParagraph>
							<BodyMdParagraph className="mb-2 font-medium">Approval of the Terms & Conditions and Privacy Policy:</BodyMdParagraph>
							<BodyMdParagraph className="mb-3">
								By clicking on the option "I agree to the Terms & Conditions and Privacy Policy" displayed within the application, which includes all rights and obligations related to the use of the platform and its services.
							</BodyMdParagraph>
							<BodyMdParagraph className="mb-2 font-medium">Approval of the Service Provision Contract:</BodyMdParagraph>
							<BodyMdParagraph className="mb-3">
								Upon registration in the application, by clicking on the option "I agree to the Service Provision Contract." This action constitutes an explicit and final acceptance by the Second Party of all the terms and obligations contained in the contract, which is considered an integral part of this agreement.
							</BodyMdParagraph>
							<BodyMdParagraph>
								Completion by the Second Party of the "I agree to the Service Provision Contract" option is deemed a valid and legally binding electronic acceptance, producing all its legal effects in accordance with Article (45) and subsequent articles of Law No. (6) of 2022 on Electronic Transactions, which permits the conclusion of electronic contracts and recognizes the expression of consent through electronic means. No service requests shall be accepted without completing these procedures, and such acceptance shall be considered a legally enforceable electronic signature binding on all parties.
							</BodyMdParagraph>
						</div>

						<div className="border-t border-primary/10 pt-8 mt-4">
							<BodyMdParagraph className="text-center text-primary/60">
								For questions about these Terms, contact us at: info@lucidaapp.com
							</BodyMdParagraph>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
};

export default TermsPage;
