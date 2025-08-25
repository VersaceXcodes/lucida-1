import { useEffect } from "react";
import Footer from "./footer";
import { Outlet } from "react-router";

import Lenis from "@studio-freight/lenis";

const MainLayout = () => {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2, // scrolling duration
			easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out
			smoothWheel: true,
			// set true if you want touch smooth
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);
	return (
		<main className="w-full">
			<Outlet />
			<Footer />
		</main>
	);
};

export default MainLayout;
