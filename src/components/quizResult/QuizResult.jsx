import React, { useContext } from "react";

import { context } from "../../state";

import "./quizResult.css";

const QuizResult = ({ currentQuiz }) => {
	const { state } = useContext(context);
	// console.log(state.quizes[currentQuiz].correct_answer);
	return (
		<div className="quiz-result">
			{state.quizes[currentQuiz] && (
				<>
					<div>
						<div className="Quiz-Question">
							<h3>
								{currentQuiz + 1}. {state.quizes[currentQuiz].question}
							</h3>
						</div>
						{state.quizes[currentQuiz].options.map((option, index) => {
							return (
								<div key={index} className={`Quiz-Options ${option === state.quizes[currentQuiz].answer ? "active" : ""} ${option === state.quizes[currentQuiz].correct_answer ? "correct" : ""}`}>
									<button className="button">{option}</button>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default QuizResult;
