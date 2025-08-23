import { Route, Routes } from "react-router";
import HomePage from "./components/pages/home";
import MainLayout from "./components/layout/main-layout";
import CareersPage from "./components/pages/careers";

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<MainLayout />}>
				<Route
					index
					element={<HomePage />}
				/>
				<Route
					path="careers"
					element={<CareersPage />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
