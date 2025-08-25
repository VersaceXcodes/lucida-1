import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isLangOpen, setIsLangOpen] = React.useState(false);
	const { t, i18n } = useTranslation();

	const languages = [
		{ code: "en", name: "English", flag: "🇺🇸" },
		{ code: "ar", name: "العربية", flag: "🇸🇦" },
	];

	const currentLanguage =
		languages.find((lang) => lang.code === i18n.language) || languages[0];

	const changeLanguage = (langCode: string) => {
		i18n.changeLanguage(langCode);
		setIsLangOpen(false);
	};

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
				{/* Language Dropdown */}
				<div className="relative">
					<button
						onClick={() => setIsLangOpen(!isLangOpen)}
						className="gap-1.5 flex items-center py-[6.5px] px-4 border rounded-lg border-faqborderClose transition-colors hover:border-secondary duration-300">
						<Globe className="w-4 h-4 text-secondary/70" />

						<span className="text-sm">{currentLanguage.name}</span>
						<ChevronDown
							className={`w-4 h-4 text-secondary/70 transition-transform duration-200 ${
								isLangOpen ? "rotate-180" : ""
							}`}
						/>
					</button>

					<AnimatePresence>
						{isLangOpen && (
							<motion.div
								initial={{ opacity: 0, y: -8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}
								transition={{ duration: 0.2, ease: "easeInOut" }}
								className="absolute top-full mt-2 right-0 bg-white border border-faqborderClose rounded-lg shadow-lg min-w-[120px] z-30">
								{languages.map((lang) => (
									<button
										key={lang.code}
										onClick={() => changeLanguage(lang.code)}
										className={`w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
											currentLanguage.code === lang.code ? "bg-gray-50" : ""
										}`}>
										<span className="text-sm text-secondary/70">
											{lang.name}
										</span>
									</button>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<Link
					to={"/features"}
					className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
					{t("layout.header.features")}
				</Link>
				<Link
					to={"/careers"}
					className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
					{t("layout.header.careers")}
				</Link>
				<div className="h-6 w-[1px] bg-faqborderClose max-md:hidden"></div>
				<Link
					to={"/contact"}
					className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
					{t("layout.header.getSupport")}
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
							fillOpacity="0.45"
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
							fillOpacity="0.45"
						/>
					</svg>
					<div className="h-6 w-[1px] bg-faqborderClose"></div>
					<span>{t("layout.header.download")}</span>
				</a>
			</div>
			<div className="md:hidden flex items-center gap-3">
				{/* Mobile Language Dropdown */}
				<div className="relative">
					<button
						onClick={() => setIsLangOpen(!isLangOpen)}
						className="gap-1.5 flex items-center py-[6.5px] px-4 border rounded-lg border-faqborderClose transition-colors hover:border-secondary duration-300">
						<Globe className="w-4 h-4 text-secondary/70" />
						
						<span className="text-sm">
							{currentLanguage.name}
						</span>
						<ChevronDown
							className={`w-4 h-4 text-secondary/70 transition-transform duration-200 ${
								isLangOpen ? "rotate-180" : ""
							}`}
						/>
					</button>

					<AnimatePresence>
						{isLangOpen && (
							<motion.div
								initial={{ opacity: 0, y: -8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}
								transition={{ duration: 0.2, ease: "easeInOut" }}
								className="absolute top-full mt-2 right-0 bg-white border border-faqborderClose rounded-lg shadow-lg min-w-[120px] z-30">
								{languages.map((lang) => (
									<button
										key={lang.code}
										onClick={() => {
											changeLanguage(lang.code);
											setIsMenuOpen(false);
										}}
										className={`w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
											currentLanguage.code === lang.code ? "bg-gray-50" : ""
										}`}>
										
										<span className="text-sm text-secondary/70">
											{lang.name}
										</span>
									</button>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="block md:hidden text-secondary/70">
					{isMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}{" "}
				</button>
			</div>
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
							{t("layout.header.features")}
						</Link>
						<Link
							to={"/careers"}
							onClick={() => setIsMenuOpen(false)}
							className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
							{t("layout.header.careers")}
						</Link>
						<div className="h-6 w-[1px] bg-faqborderClose max-md:hidden"></div>
						<Link
							to={"/contact"}
							onClick={() => setIsMenuOpen(false)}
							className="py-1.5 px-3 text-secondary/70 transition-colors duration-300 hover:text-secondary">
							{t("layout.header.getSupport")}
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
									fillOpacity="0.45"
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
									fillOpacity="0.45"
								/>
							</svg>
							<div className="h-6 w-[1px] bg-faqborderClose"></div>
							<span>{t("layout.header.download")}</span>
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Header;
