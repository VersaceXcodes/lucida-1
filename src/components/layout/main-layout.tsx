import Footer from "./footer";
import { Outlet } from "react-router";

const MainLayout = () => {
	return (
		<main className="w-full">
			<Outlet />
			<Footer />
		</main>
	);
};

export default MainLayout;
