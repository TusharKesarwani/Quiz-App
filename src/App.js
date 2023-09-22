import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";

import { initialState, reducer, Provider } from "./state";

import { RootLayout } from "./layouts";
import { HomePage, QuizPage, ResultPage, RulesPage, PageNotFound } from "./pages";

import "./App.css";

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Provider value={{ state, dispatch }}>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<HomePage />} />
					<Route path="quiz" element={<QuizPage />} />
					<Route path="result" element={<ResultPage />} />
					<Route path="rules" element={<RulesPage />} />
				</Route>

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Provider>
	);
};

export default App;
