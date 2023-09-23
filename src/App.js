import React, { useReducer } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { initialState, reducer, Provider } from "./state";

import { RootLayout } from "./layouts";
import { HomePage, QuizPage, ResultPage, RulesPage, PageNotFound } from "./pages";

import "./App.css";

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const renderElement = (element, navigateTo) => {
		if (state.user.name !== "" && state.user.email !== "") {
			return element;
		}
		return <Navigate to={navigateTo} />
	}

	return (
		<Provider value={{ state, dispatch }}>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<HomePage />} />
					<Route path="rules" element={renderElement(<RulesPage />, "/")} />
					<Route path="quiz" element={renderElement(<QuizPage />, "/")} />
					<Route path="result" element={renderElement(<ResultPage />, "/")} />
				</Route>

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Provider>
	);
};

export default App;
