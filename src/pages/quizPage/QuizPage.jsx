import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { context } from "../../state";
import { Quiz, Navigation } from "../../components";
import { Link } from "react-router-dom";

import "./quizPage.css";

const QuizPage = () => {
	const { state, dispatch } = useContext(context);

	const [timeLeft, setTimeLeft] = useState(1800);
	const [currentQuiz, setCurrentQuiz] = useState(0);

	const navigate = useNavigate();

	const getQuizes = async () => {
		const { data } = await axios.get("https://opentdb.com/api.php?amount=15");
		const { results } = data;
		dispatch({ type: "SET_QUIZES", payload: results });
	};

	const changeQuiz = id => {
		setCurrentQuiz(id);
		dispatch({ type: "UPDATE_QUIZ", payload: id });
	};

	useEffect(() => {
		getQuizes();
		setInterval(() => {
			setTimeLeft(prevState => prevState - 1);
		}, 1000);
		setTimeout(() => {
			navigate("/result", { replace: true });
		}, 1800 * 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="quiz-page">
			{state.quizes && state.quizes[currentQuiz] && (
				<>
					<div className="left">
						<div className="left-container">
							<div className="quiz-header">
								<h2>
									Time Left: {(timeLeft - (timeLeft % 60)) / 60} min {timeLeft % 60} sec
								</h2>
							</div>
							<div className="quiz-container">
								<Quiz currentQuiz={currentQuiz} />
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
					<div className="right">
						<div className="right-footer">
							<Link to="/result">Submit</Link>
						</div>
						<Navigation currentQuiz={currentQuiz} changeQuiz={changeQuiz} />
					</div>
				</>
			)}
		</div>
	);
};

export default QuizPage;
