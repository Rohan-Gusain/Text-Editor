import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


export default function Footer() {
  return (
    <Router>
      <div className="footer">
        <a href="https://www.linkedin.com/in/rohan-gusain-006378219" target="_blank" rel="noreferrer">
          <img className="Linkdln" style={{ width: "55px", height: "55px", padding: "11px" }} src="../linkdln.png" alt="linkdln" />
        </a>
        <a href="https://github.com/Rohan-Gusain" target="_blank" rel="noreferrer">
          <img className="GitHub" style={{ width: "80px", height: "55px", padding: "11px" }} src="../GitHub_logo.png" alt="linkdln" />
        </a>
        <a href="https://www.codechef.com/users/rohangusain007" target="_blank" rel="noreferrer">
          <img className="Linkdln" style={{ width: "55px", height: "55px", padding: "11px" }} src="../codechef.png" alt="linkdln" />
        </a>
      </div>
    </Router>
  );
}

