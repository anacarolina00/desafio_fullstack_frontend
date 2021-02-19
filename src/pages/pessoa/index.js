import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "../../services/api";

export default function Pessoas () {

    const [ pessoas, setPessoas ] = useState([]);

    useEffect(() => {
      async function handleLoad(event) {
        const response = await api.get("/cadpes");
        setPessoas(response.data);
      }
      handleLoad();
    });

  return (
    <>
      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li>
            <button class="nav" type="button">
              <i class="bx bx-home"></i><span>Cadastrar Cliente</span>
            </button>
          </li>

          <li>
            <button class="nav" type="button">
              <i class="bx bx-file-blank"></i> <span>Cadastrar Pessoa</span>
            </button>
          </li>
          <li>
            <button class="nav" type="button">
              <i class="bx bx-book-content"></i><span>Clientes Cadastrados</span>
            </button>
          </li>
          <li>
            <button class="nav">
              <i class="bx bx-server"></i> <span>Desconectar</span>
            </button>
          </li>
        </ul>
      </nav>

      <table class="table">
        <tbody>
          <tr>
            <td class="ind">Nome</td>
            <td class="ind">Telefone</td>
            <td class="ind">Email</td>
          </tr>

          {pessoas.map((pessoas) => (
            <tr>
              <td>{pessoas.nome_pes}</td>
              <td>{pessoas.tel_pes}</td>
              <td>{pessoas.email}</td>
              <td>
                <button type="submit" class="btn">
                  Editar
                </button>
              </td>
              <td>
                <button type="button" class="btn">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
