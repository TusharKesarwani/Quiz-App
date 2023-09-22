import React, { useState, useContext } from "react";

import { context } from "../../state";

import "./quiz.css";

const Quiz = ({ currentQuiz }) => {
	const { state, dispatch } = useContext(context);
	const [reRender, setReRender] = useState(true);

	const onSelectOption = option => {
		dispatch({ type: "UPDATE_QUIZ_OPTION", payload: { currentQuiz, option } });
		setReRender(!reRender);
	};

	return (
		<div className="quiz">
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
								<div key={index} className={`Quiz-Options ${option === state.quizes[currentQuiz].answer ? "active" : ""}`}>
									<button className="button" onClick={() => onSelectOption(option)}>
										{option}
									</button>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default Quiz;
