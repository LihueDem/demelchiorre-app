import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import gmail from "../img/gmail.svg";
import github from "../img/github.svg";
import celular from "../img/celular.svg";
export default function Footer() {
  return (
    <>      
      <footer class="footer">
        <div class="footer-section">
          <h2>Redes Sociales</h2>
          <ul class="social-links">
            <li>
            <Link to="https://github.com/LihueDem"><img src={github} alt="logo" /></Link>
            </li>
            <li>
              <Link to="/"><img src={gmail} alt="logo" /></Link>
            </li>
            <li>
            <Link to="/"><img src={celular} alt="logo" /></Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
