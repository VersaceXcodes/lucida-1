import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	return (
		<div className="w-full flex justify-between items-center md:px-11 px-6 py-7 bg-white relative z-20">
			<Link
				to={"/"}
				aria-label="Lucida">
				<img
					src="./images/logo.svg"
					className="h-12 w-12"
					style={{
						filter: `
      drop-shadow(0 3.141px 7.828px rgba(79, 80, 96, 0.16))
      drop-shadow(0 1.146px 2.857px rgba(79, 80, 96, 0.23))
      drop-shadow(0 0.557px 1.387px rgba(79, 80, 96, 0.28))
      drop-shadow(0 0.273px 0.68px rgba(79, 80, 96, 0.35))
      drop-shadow(0 0.108px 0.269px rgba(79, 80, 96, 0.51))
    `,
					}}
					alt="Lucida"
				/>
			</Link>
			<div className="items-center gap-2 relative  flex-row md:flex hidden">
				<Link
					to={"/features"}
					className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
					Features
				</Link>
				<Link
					to={"/careers"}
					className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
					Careers
				</Link>
				<div className="h-6 w-[1px] bg-faqborderClose max-md:hidden"></div>
				<Link
					to={"/contact"}
					className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
					Get support
				</Link>
				<a
					href="/"
					className="gap-1.5 flex items-center py-[6.5px] px-4 border rounded-lg border-faqborderClose transition-colors hover:border-secondary duration-300">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.7821 4.81465C7.1981 4.81465 6.29409 4.15065 5.34209 4.17465C4.08609 4.19065 2.93409 4.90265 2.28609 6.03065C0.982089 8.29467 1.95009 11.6387 3.22209 13.4787C3.84609 14.3747 4.58209 15.3827 5.55809 15.3507C6.49409 15.3107 6.8461 14.7427 7.9821 14.7427C9.1101 14.7427 9.4301 15.3507 10.4221 15.3267C11.4301 15.3107 12.0701 14.4147 12.6861 13.5107C13.3981 12.4707 13.6941 11.4627 13.7101 11.4067C13.6861 11.3987 11.7501 10.6547 11.7261 8.41467C11.7101 6.54265 13.2541 5.64665 13.3261 5.60665C12.4461 4.31865 11.0941 4.17465 10.6221 4.14265C9.3901 4.04665 8.3581 4.81465 7.7821 4.81465ZM9.8621 2.92665C10.3821 2.30265 10.7261 1.43065 10.6301 0.56665C9.8861 0.59865 8.9901 1.06265 8.4541 1.68665C7.9741 2.23865 7.5581 3.12665 7.6701 3.97465C8.4941 4.03865 9.3421 3.55065 9.8621 2.92665Z"
							fill="#0A0A0A"
							fill-opacity="0.45"
						/>
					</svg>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.40632 1.20923L9.19517 7.99992L2.40705 14.7909C2.27834 14.7365 2.16561 14.6413 2.0902 14.5111C2.03144 14.4095 2.00049 14.2943 2.00049 14.177V1.82294C2.00049 1.54732 2.16776 1.31076 2.40632 1.20923ZM9.6665 8.47126L11.2012 10.0059L3.90982 14.2279L9.6665 8.47126ZM11.7992 6.33923L13.6706 7.42306C13.9892 7.60752 14.098 8.01539 13.9135 8.33399C13.8552 8.43479 13.7714 8.51859 13.6706 8.57692L11.7985 9.66059L10.1378 7.99992L11.7992 6.33923ZM3.90982 1.7719L11.2018 5.99323L9.6665 7.52859L3.90982 1.7719Z"
							fill="#0A0A0A"
							fill-opacity="0.45"
						/>
					</svg>
					<div className="h-6 w-[1px] bg-faqborderClose"></div>
					<span>Download</span>
				</a>
			</div>
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="block md:hidden text-secondary/70">
				{isMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}{" "}
			</button>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="md:hidden flex items-center  gap-6 fixed max-md:h-[calc(100%-104px)] top-[104px] left-0 right-0 max-md:px-6 bg-white flex-col md:flex-row w-full py-10 max-md:border-b border-b-faqborderOpen z-20">
						<Link
							onClick={() => setIsMenuOpen(false)}
							to={"/features"}
							className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
							Features
						</Link>
						<Link
							to={"/careers"}
							onClick={() => setIsMenuOpen(false)}
							className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
							Careers
						</Link>
						<div className="h-6 w-[1px] bg-faqborderClose max-md:hidden"></div>
						<Link
							to={"/contact"}
							onClick={() => setIsMenuOpen(false)}
							className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
							Get support
						</Link>
						<a
							href="/"
							onClick={() => setIsMenuOpen(false)}
							className="gap-1.5 flex items-center py-[6.5px] px-4 border rounded-lg border-faqborderClose transition-colors hover:border-secondary duration-300">
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.7821 4.81465C7.1981 4.81465 6.29409 4.15065 5.34209 4.17465C4.08609 4.19065 2.93409 4.90265 2.28609 6.03065C0.982089 8.29467 1.95009 11.6387 3.22209 13.4787C3.84609 14.3747 4.58209 15.3827 5.55809 15.3507C6.49409 15.3107 6.8461 14.7427 7.9821 14.7427C9.1101 14.7427 9.4301 15.3507 10.4221 15.3267C11.4301 15.3107 12.0701 14.4147 12.6861 13.5107C13.3981 12.4707 13.6941 11.4627 13.7101 11.4067C13.6861 11.3987 11.7501 10.6547 11.7261 8.41467C11.7101 6.54265 13.2541 5.64665 13.3261 5.60665C12.4461 4.31865 11.0941 4.17465 10.6221 4.14265C9.3901 4.04665 8.3581 4.81465 7.7821 4.81465ZM9.8621 2.92665C10.3821 2.30265 10.7261 1.43065 10.6301 0.56665C9.8861 0.59865 8.9901 1.06265 8.4541 1.68665C7.9741 2.23865 7.5581 3.12665 7.6701 3.97465C8.4941 4.03865 9.3421 3.55065 9.8621 2.92665Z"
									fill="#0A0A0A"
									fill-opacity="0.45"
								/>
							</svg>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M2.40632 1.20923L9.19517 7.99992L2.40705 14.7909C2.27834 14.7365 2.16561 14.6413 2.0902 14.5111C2.03144 14.4095 2.00049 14.2943 2.00049 14.177V1.82294C2.00049 1.54732 2.16776 1.31076 2.40632 1.20923ZM9.6665 8.47126L11.2012 10.0059L3.90982 14.2279L9.6665 8.47126ZM11.7992 6.33923L13.6706 7.42306C13.9892 7.60752 14.098 8.01539 13.9135 8.33399C13.8552 8.43479 13.7714 8.51859 13.6706 8.57692L11.7985 9.66059L10.1378 7.99992L11.7992 6.33923ZM3.90982 1.7719L11.2018 5.99323L9.6665 7.52859L3.90982 1.7719Z"
									fill="#0A0A0A"
									fill-opacity="0.45"
								/>
							</svg>
							<div className="h-6 w-[1px] bg-faqborderClose"></div>
							<span>Download</span>
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Header;
