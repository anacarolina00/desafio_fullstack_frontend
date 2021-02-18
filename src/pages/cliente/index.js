import React, { useEffect } from "react";
import './styles.css';
import api from "../../services/api"

export default function Cliente() {
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

  }, [])




  return (
    <>
      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li>
            <button class="nav" type="button">
              <i class="bx bx-home"></i>Cadastrar Cliente <span></span>
            </button>
          </li>

          <li>
            <button class="nav" type="button">
              <i class="bx bx-file-blank"></i> <span>Cadastrar Pessoa</span>
            </button>
          </li>
          <li>
            <button class="nav" type="button">
              <i class="bx bx-book-content"></i> <span>Pessoa Relacionada</span>
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
            <td class="ind">&nbsp;Nome</td>
            <td class="ind">&nbsp;Telefone</td>
            <td class="ind">&nbsp;Email</td>
            <td class="ind">Cidade&nbsp;</td>
            <td class="ind">Estado&nbsp;</td>
          </tr>

          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
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

          
        </tbody>
      </table>
    </>
  );
}