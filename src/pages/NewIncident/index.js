import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./styles.scss";

import logoImg from "./../../assets/logo.svg";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreve o caso detalhadamente para encontrar um herói para resolver isso.
          </p>

          <Link to="/profile" className="link">
            <FaArrowLeft size="16" color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição"></textarea>
          <input placeholder="Valor em reais" />

          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
