import { Route, Routes } from "react-router";
import HomePage from "./components/pages/home";
import MainLayout from "./components/layout/main-layout";

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
			</Route>
		</Routes>
	);
};

export default App;
