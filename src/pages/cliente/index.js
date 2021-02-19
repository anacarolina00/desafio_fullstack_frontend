import React, { useState, useEffect } from "react";
import './styles.css';
import api from "../../services/api"

export default function Clientes() {

  const [clientes, setClientes]= useState([])

  useEffect(()=>{
    async function handleLoad(event) {
    const response = await api.get("/cadcli");
    setClientes(response.data);
    }
    handleLoad()
  })
  

    return (
      <>
        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li>
              <button class="nav" type="button">
                <i class="bx bx-home"></i>
                <span>Cadastrar Cliente </span>
              </button>
            </li>

            <li>
              <button class="nav" type="button">
                <i class="bx bx-file-blank"></i>
                <span>Cadastrar Pessoa</span>
              </button>
            </li>

            <li>
              <button class="nav" type="button">
                <i class="bx bx-book-content"></i>
                <span>Pessoa Relacionada</span>
              </button>
            </li>

            <li>
              <button class="nav">
                <i class="bx bx-server"></i>
                <span>Desconectar</span>
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
              <td class="ind">Cidade</td>
              <td class="ind">Estado</td>
            </tr>

            {clientes.map(
              (clientes) =>(
                <tr>
                <td> {clientes.nome_cli}</td>
                <td> {clientes.tel_cli}</td>
                <td> {clientes.email}</td>
                <td> {clientes.cidade}</td>
                <td> {clientes.estado}</td>
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