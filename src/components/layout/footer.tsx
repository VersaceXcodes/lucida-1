import { FOOTER_LINKS } from "@/constants/links";
import Logo from "./logo";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="bg-neutral-5 md:py-18 py-10 px-11 flex flex-col md:gap-[57px] gap-10 items-center">
			<Logo />
			<div className="flex items-center justify-center md:gap-10 gap-6 flex-wrap">
				{FOOTER_LINKS.map((footerItem) => (
					<Link
						key={footerItem.href}
						to={footerItem.href} className="text-sm text-secondary/70 transition-colors duration-200 ease-in-out hover:text-secondary">
						{footerItem.label}
					</Link>
				))}
			</div>
		</footer>
	);
};

export default Footer;
