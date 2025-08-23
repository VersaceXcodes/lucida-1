import Section from "@/components/ui/section";
import {
	BodyMdParagraph,
	BodySmParagraph,
	HeadingMd,
} from "@/components/ui/typography";

const PresentationTwo = () => {
	return (
		<Section className="px-6 relative">
			<img
				src="./images/presentation/bg-1.webp"
				className="h-full w-auto absolute top-0 left-1/2 -translate-x-1/2 max-md:hidden"
				alt=""
			/>
			<div className="md:grid md:grid-cols-2 md:gap-[102px] relative max-w-[1110px] w-full mx-auto flex flex-col items-center gap-12">
				<img
					src="./images/presentation/2.webp"
					className="w-full h-auto max-md:max-w-[540px]"
					loading="lazy"
					alt=""
				/>
				<div className="flex flex-col gap-8 h-full justify-between max-md:max-w-[540px]">
					<div>
						<HeadingMd className="block mb-[18px]">
							Best suggestion for an individual to use
						</HeadingMd>
						<BodyMdParagraph className="md:max-w-[480px]">
							Manage Your Entire Business Ecosystem from a Single Dashboard with
							Our Scalable, Cloud-Based SaaS Solution Tailored to Your Needs.
						</BodyMdParagraph>
					</div>
					<div className="grid grid-cols-2 sm:gap-x-7 gap-x-4 sm:gap-y-11 gap-y-6 h-max">
						{ITEMS.map((item) => (
							<div
								key={item.title}
								className="flex flex-col gap-2.5">
								<div className="grid sm:grid-cols-[20px_1fr] gap-2.5">
									{item.icon}
									<BodyMdParagraph className="font-semibold text-primary">
										{item.title}
									</BodyMdParagraph>
								</div>
								<BodySmParagraph>{item.content}</BodySmParagraph>
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};

const ITEMS = [
	{
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M9.99996 1.66669C14.6 1.66669 18.3333 5.40002 18.3333 10C18.3333 14.6 14.6 18.3334 9.99996 18.3334C5.39996 18.3334 1.66663 14.6 1.66663 10C1.66663 5.40002 5.39996 1.66669 9.99996 1.66669ZM9.99996 16.6667C13.6833 16.6667 16.6666 13.6834 16.6666 10C16.6666 6.31669 13.6833 3.33335 9.99996 3.33335C6.31663 3.33335 3.33329 6.31669 3.33329 10C3.33329 13.6834 6.31663 16.6667 9.99996 16.6667ZM12.9462 5.87523L14.1247 7.05375L9.99996 11.1785L8.82146 10L12.9462 5.87523Z"
					fill="#4F46E5"
				/>
			</svg>
		),
		title: "Real-Time Analytics",
		content: "Our platform offers robust analytics, real-time collaboration",
	},
	{
		icon: (
			<svg
				width="21"
				height="20"
				viewBox="0 0 21 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7.99992 10.4166L5.91659 12.5L7.99992 14.5833L10.0833 12.5L7.99992 10.4166ZM12.9999 2.08331C10.1436 2.08331 7.80362 4.29418 7.59794 7.098C4.79412 7.30369 2.58325 9.64365 2.58325 12.5C2.58325 15.4916 5.00838 17.9166 7.99992 17.9166C10.8563 17.9166 13.1963 15.7058 13.4019 12.902C16.2058 12.6963 18.4166 10.3563 18.4166 7.49998C18.4166 4.50844 15.9915 2.08331 12.9999 2.08331ZM13.2694 11.2405C12.7978 9.26048 11.2394 7.70202 9.25942 7.23052C9.39759 5.28522 11.0194 3.74998 12.9999 3.74998C15.071 3.74998 16.7499 5.42891 16.7499 7.49998C16.7499 9.48048 15.2147 11.1023 13.2694 11.2405ZM11.7499 12.5C11.7499 14.5711 10.071 16.25 7.99992 16.25C5.92885 16.25 4.24992 14.5711 4.24992 12.5C4.24992 10.4289 5.92885 8.74998 7.99992 8.74998C10.071 8.74998 11.7499 10.4289 11.7499 12.5ZM2.99992 5.83331C2.99992 3.99236 4.4923 2.49998 6.33325 2.49998H7.58325V4.16665H6.33325C5.41278 4.16665 4.66659 4.91284 4.66659 5.83331V7.08331H2.99992V5.83331ZM16.3333 14.1666V12.9166H17.9999V14.1666C17.9999 16.0076 16.5075 17.5 14.6666 17.5H13.4166V15.8333H14.6666C15.5871 15.8333 16.3333 15.0871 16.3333 14.1666Z"
					fill="#4F46E5"
				/>
			</svg>
		),
		title: "Integrations",
		content: "Our platform offers robust analytics, real-time collaboration",
	},
	{
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M9.99996 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39758 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39758 5.39758 1.66663 9.99996 1.66663ZM9.99996 3.33329C6.31806 3.33329 3.33329 6.31806 3.33329 9.99996C3.33329 13.6819 6.31806 16.6666 9.99996 16.6666C13.6819 16.6666 16.6666 13.6819 16.6666 9.99996C16.6666 6.31806 13.6819 3.33329 9.99996 3.33329ZM9.99996 4.16663C10.8483 4.16663 11.6543 4.34772 12.3815 4.67334L11.0795 5.97449C10.7351 5.88239 10.3733 5.83329 9.99996 5.83329C7.69878 5.83329 5.83329 7.69878 5.83329 9.99996C5.83329 11.1505 6.29966 12.1922 7.05368 12.9462L5.87517 14.1247L5.74533 13.9907C4.76627 12.9473 4.16663 11.5437 4.16663 9.99996C4.16663 6.7783 6.7783 4.16663 9.99996 4.16663ZM15.327 7.61923C15.6524 8.34621 15.8333 9.15196 15.8333 9.99996C15.8333 11.6108 15.1804 13.0691 14.1247 14.1247L12.9462 12.9462C13.7003 12.1922 14.1666 11.1505 14.1666 9.99996C14.1666 9.62663 14.1175 9.26479 14.0255 8.92046L15.327 7.61923ZM13.5355 5.28592L14.714 6.46443L11.6104 9.56913C11.647 9.70654 11.6666 9.85096 11.6666 9.99996C11.6666 10.9205 10.9205 11.6666 9.99996 11.6666C9.07946 11.6666 8.33329 10.9205 8.33329 9.99996C8.33329 9.07946 9.07946 8.33329 9.99996 8.33329C10.149 8.33329 10.2934 8.35288 10.4308 8.38954L13.5355 5.28592Z"
					fill="#4F46E5"
				/>
			</svg>
		),
		title: "Dashboards",
		content: "Our platform offers robust analytics, real-time collaboration",
	},
	{
		icon: (
			<svg
				width="21"
				height="20"
				viewBox="0 0 21 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M10.5001 3.33329C6.81818 3.33329 3.83341 6.31806 3.83341 9.99996H6.33341C7.25389 9.99996 8.00008 10.7461 8.00008 11.6666V15.8333C8.00008 16.7538 7.25389 17.5 6.33341 17.5H3.83341C2.91294 17.5 2.16675 16.7538 2.16675 15.8333V9.99996C2.16675 5.39758 5.89771 1.66663 10.5001 1.66663C15.1024 1.66663 18.8334 5.39758 18.8334 9.99996V15.8333C18.8334 16.7538 18.0872 17.5 17.1667 17.5H14.6667C13.7462 17.5 13.0001 16.7538 13.0001 15.8333V11.6666C13.0001 10.7461 13.7462 9.99996 14.6667 9.99996H17.1667C17.1667 6.31806 14.182 3.33329 10.5001 3.33329ZM3.83341 11.6666V15.8333H6.33341V11.6666H3.83341ZM14.6667 11.6666V15.8333H17.1667V11.6666H14.6667Z"
					fill="#4F46E5"
				/>
			</svg>
		),
		title: "Customer Service",
		content: "Our platform offers robust analytics, real-time collaboration",
	},
];

export default PresentationTwo;
