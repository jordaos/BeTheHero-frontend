import React from "react";
import { FaSignOutAlt, FaTrash } from "react-icons/fa";

import "./styles.scss";

import logoImg from "./../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem-vinda, APAD</span>

        <Link to="/incidents/new" className="btn">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FaSignOutAlt size="18" color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FaTrash size="20" color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
