import React, { useContext } from "react";
import { context } from "../../state";

import "./navigation.css";

const Navigation = ({ currentQuiz, changeQuiz }) => {
	const { state } = useContext(context);

	return (
		<div className="navigation">
			<div className="navigation-container">
				{state.quizes.map((quiz, index) => {
					return (
						<button key={index} className={`navigation-cell ${currentQuiz === index ? "active" : ""} ${quiz.isVisited === true ? "visited" : ""} ${quiz.isAttempted === true ? "attempted" : ""}`} onClick={() => changeQuiz(index)}>
							{index + 1}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Navigation;
