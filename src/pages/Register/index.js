import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";

import api from "./../../services/api";

import "./styles.scss";

import logoImg from "./../../assets/logo.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(ev) {
    ev.preventDefault();

    const data = {
      name,
      email,
      whatsapp: whatsapp.replace(/\D/g, ""),
      city,
      uf,
    };

    try {
      const response = await api.post("ongs", data);

      toast.info(`Seu ID de acesso: ${response.data.id}`);

      setTimeout(() => {
        history.push("/");
      }, 5000);
    } catch (err) {
      toast.error("Erro no cadastro, tente novamente");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casoss da sua ONG.
          </p>

          <Link to="/" className="link">
            <FaArrowLeft size="16" color="#e02041" />
            Voltar para o login
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputMask
            placeholder="WhatsApp"
            mask="(99) 99999-9999"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              value={uf}
              maxLength={2}
              onChange={(e) => setUf(e.target.value)}
              style={{ width: 80 }}
            />
          </div>

          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
