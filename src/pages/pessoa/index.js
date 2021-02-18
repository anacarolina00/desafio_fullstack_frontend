import React from 'react'
import "./styles.css";

export default function Pessoa () {
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
              <i class="bx bx-book-content"></i>{" "}
              <span>Clientes Cadastrados</span>
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
            <td class="ind">Telefone&nbsp;</td>
            <td class="ind">Email&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;Adalfredo Gomides Sousa</td>
            <td>&nbsp;35219760215</td>
            <td>&nbsp;gomides@sousa.com</td>
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


          <tr>
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
