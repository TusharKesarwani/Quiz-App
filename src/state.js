import { createContext } from "react";

const INITIAL_STATE = {
	user: {
		name: "",
		email: "",
	},
	quizes: [],
};

export const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_NAME":
			return { ...state, user: { ...state.user, name: payload } };

		case "SET_EMAIL":
			return { ...state, user: { ...state.user, email: payload } };

		case "SET_QUIZES":
			const quizes = payload.map((quiz, index) => {
				const options = [...quiz.incorrect_answers, quiz.correct_answer];
				if (index === 0) return { ...quiz, isVisited: true, isAttempted: false, options: options.sort((a, b) => 0.5 - Math.random()), answer: "" };
				return { ...quiz, isVisited: false, isAttempted: false, options: options.sort((a, b) => 0.5 - Math.random()), answer: "" };
			});
			return { ...state, quizes };

		case "UPDATE_QUIZ":
			state.quizes[payload].isVisited = true;
			return state;

		case "UPDATE_QUIZ_OPTION":
			if (state.quizes[payload.currentQuiz].answer === payload.option) {
				state.quizes[payload.currentQuiz].answer = "";
				state.quizes[payload.currentQuiz].isAttempted = false;
			} else {
				state.quizes[payload.currentQuiz].answer = payload.option;
				state.quizes[payload.currentQuiz].isAttempted = true;
			}
			return state;

		case "RESET_QUIZES":
			return { ...state, quizes: [] };

		default:
			return state;
	}
};

const StateContext = createContext({ state: INITIAL_STATE, dispatch: () => 0 });

export const context = StateContext;
export const Provider = StateContext.Provider;
export const initialState = INITIAL_STATE;
