import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { context } from "../../state";

import "./homePage.css";

const HomePage = () => {
	const { state, dispatch } = useContext(context);

	const navigate = useNavigate();

	const onFormSubmit = e => {
		e.preventDefault();
		if (state.user.name !== "" && state.user.email !== "") {
			navigate("/rules");
		}
	};

	return (
		<div className="home-page">
			<div className="home-container">
				<div className="home-header">
					<h2>Welcome to Quiz App</h2>
				</div>
				<div className="home-main">
					<form onSubmit={onFormSubmit}>
						<label>
							<h3>Enter your name:</h3>
							<input type="text" name="name" value={state.user.name} onChange={e => dispatch({ type: "SET_NAME", payload: e.target.value })} />
						</label>
						<label>
							<h3>Enter your email:</h3>
							<input type="email" name="email" value={state.user.email} onChange={e => dispatch({ type: "SET_EMAIL", payload: e.target.value })} />
						</label>
						<hr/>
						<button type="submit" disabled={state.user.name === "" || state.user.email === ""}>Continue</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
