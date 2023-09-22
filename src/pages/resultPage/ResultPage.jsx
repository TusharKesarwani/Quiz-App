import React, { useContext, useState, useEffect } from "react";
import { context } from "../../state";

import { QuizResult, Navigation } from "../../components";

import "./resultPage.css";

const ResultPage = () => {
	const { state } = useContext(context);

	const [score, setScore] = useState(0);
	const [currentQuiz, setCurrentQuiz] = useState(0);

	const calculateScore = () => {
		return state.quizes.reduce((result, quiz) => {
			return result + (quiz.answer === quiz.correct_answer);
		}, 0);
	};

	const changeQuiz = id => {
		setCurrentQuiz(id);
	};

	useEffect(() => {
		setScore(calculateScore());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="result-page">
			<div className="left-panel">
				<div className="left-container">
					<div className="quiz-header">
						<div>
							<span className="bold">Name: </span> <span>{state.user.name}</span>
						</div>
						<div>
							<span className="bold">Email: </span> <span>{state.user.email}</span>
						</div>
						<div>
						<span className="quiz-score bold">Score: </span><span>{score}</span>
						</div>
					</div>
					<div className="quiz-container">
						<QuizResult currentQuiz={currentQuiz} />
					</div>
					<div className="quiz-footer">
						<button onClick={() => changeQuiz(currentQuiz - 1)} disabled={currentQuiz === 0}>
							{"<"} Prev
						</button>
						<button onClick={() => changeQuiz(currentQuiz + 1)} disabled={currentQuiz === 14}>
							Next {">"}
						</button>
					</div>
				</div>
			</div>
			<div className="right-panel">
				<Navigation currentQuiz={currentQuiz} changeQuiz={changeQuiz} />
			</div>
		</div>
	);
};

export default ResultPage;
