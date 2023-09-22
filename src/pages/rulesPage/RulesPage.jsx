import React from "react";
import { Link } from "react-router-dom";

import "./rulesPage.css";

const RulesPage = () => {
  return (
    <div className="Rules-Page">
      <div className="container">
        <div className="rules-header">
          <h2>Some Rules of this quiz</h2>
        </div>
        <div className="rules-main">
          <div>1. You will have only 30 minutes to complete this quiz.</div>
          <div>2. You can't select any option once time goes off.</div>
          <div>3. You can't exit from the quiz once started.</div>
        </div>
        <div className="rules-footer">
            <Link to="/quiz">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
