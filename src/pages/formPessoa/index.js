import React from "react";
import "./styles.css";
import avatar from "../../assets/img/avatar.jpg";

export default function formCliente() {
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
                <i class="bx bx-file-blank"></i> <span>Pessoas Cadastradas</span>
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

<form class="form-horizontal">
<fieldset class="b">

    <img id="profile-img" class="profile-img" src={avatar} alt="texto" />

    <div class="panel panel-primary">
    <div class="panel-heading"><h1>Cadastro de Pessoa Relacionada</h1></div>
    </div>

    <div class="form-group">
    <label class="col-md-2 control-label" for="Nome">Nome<h11>*</h11></label>  
    <div class="col-md-22">
    <input id="nomep" name="nomep" placeholder="" class="form-control-input-md" required type="text"/>
    </div>
    </div>

        <tr>
            <td class="tba">
                <div class="form-group">
                <label class="col-md-1 control-label" for="cpf">CPF<h11>*</h11></label>  
                <div class="col-md-22">
                <input id="cpj" name="cpf" placeholder="Apenas números" class="form-control input-md" required type="text" maxlength="14" pattern="[0-9]+$" />
                </div>
                </div>
            </td>
            <td class="tba">
                <div class="form-group">
                <label class="col-md-1 control-label" for="Nome">Data de Nascimento<h11>*</h11></label>  
                <div class="col-md-2">
                <input id="dtnasc" name="dtnasc" placeholder="AAAA/MM/DD" class="form-control input-md" required type="text" maxlength="10" onBlur="showhide()" />
                </div>
                </div>
            </td>
        </tr>

    <div class="form-group">
    <label class="col-md-1 control-label" for="prependedtext">Telefone<h11>*</h11></label>
    <div class="col-md-2.5">
    <div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
        <input id="prependedtext" name="prependedtext" class="form-control" placeholder="XX XXXXX-XXXX" required type="text" maxlength="10" pattern="\[0-9]{2}\[0-9]{4,6}-[0-9]{3,4}$" />
    </div>
    </div>
    </div>

    <tr>
        <td class="tba">
            <div class="form-group">
            <label class="col-md-2 control-label" for="prependedtext">Email<h11>*</h11></label>
            <div class="col-md-2">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                <input id="prependedtext" name="prependedtext" class="form-control-input-md-b" placeholder="email@email.com" required type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                </div>
            </div>
            </div>
        </td>
    </tr>

    

    <div class="form-group">
    <label class="col-md-2 control-label" for="Cadastrar"></label>
    <div class="col-md-0">
        <button id="Cadastrar" name="Cadastrar" class="btnb" type="Submit"><b>Cadastrar</b></button>
    </div>
    </div>

</fieldset>
</form>

    </>
    );
}