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
                <i class="bx bx-home"></i>Cadastrar Pessoa <span></span>
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
<fieldset>

    <img id="profile-img" class="profile-img" src={avatar} alt="texto" />

    <div class="panel panel-primary">
    <div class="panel-heading"><h1>Cadastro de Cliente</h1></div>
    </div>

    <div class="form-group">
    <label class="col-md-2 control-label" for="Nome">Nome<h11>*</h11></label>  
    <div class="col-md-22">
    <input id="nomec" name="nomec" placeholder="" class="form-control-input-md" required type="text"/>
    </div>
    </div>

        <tr>
            <td class="tb">
                <div class="form-group">
                <label class="col-md-1 control-label" for="cnpj">CNPJ<h11>*</h11></label>  
                <div class="col-md-22">
                <input id="cnpj" name="cnpj" placeholder="Apenas números" class="form-control input-md" required type="text" maxlength="14" pattern="[0-9]+$" />
                </div>
                </div>
            </td>
            <td class="tb">
                <div class="form-group">
                <label class="col-md-1 control-label" for="Nome">Data da Fundação<h11>*</h11></label>  
                <div class="col-md-2">
                <input id="dtfun" name="dtfun" placeholder="AAAA/MM/DD" class="form-control input-md" required type="text" maxlength="10" onBlur="showhide()" />
                </div>
                </div>
            </td>
        </tr>

        <tr >
            <td class="tb">
                <div class="form-group"> 
                <label class="col-md-1 control-label" for="selectbasic">Tipo<h11>*</h11></label>
                <div class="col-md-2">
                    <select required id="tipo" name="tipo" class="form-control-type">
                    <option value="">Selecione...</option>
                    <option value="Regular">Regular</option>
                    <option value="Avulso">Avulso</option>
                    </select>
                </div>
                </div>
            </td>
            <td class="tb">
                <div class="form-group">
                <label class="col-md-1 control-label" for="prependedtext">Telefone<h11>*</h11></label>
                <div class="col-md-2.5">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                <input id="prependedtext" name="prependedtext" class="form-control" placeholder="XX XXXXX-XXXX" required type="text" maxlength="10" pattern="\[0-9]{2}\[0-9]{4,6}-[0-9]{3,4}$" />
                </div>
                </div>
                </div>
            </td>
        </tr>

    <div class="form-group">
    <label class="col-md-2 control-label" for="prependedtext">Email<h11>*</h11></label>
    <div class="col-md-2">
        <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input id="prependedtext" name="prependedtext" class="form-control-input-md" placeholder="email@email.com" required type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        </div>
    </div>
    </div>

    <label class="col-md-2 control-label" for="prependedtext"><h2>Endereço</h2></label>
    
    <div class="form-group">
    <label class="col-md-2 control-label" for="rua">Logradouro<h11>*</h11></label>
    <div class="col-md-22">
        <input id="rua" name="rua" class="form-control-input-md" placeholder="" required type="text" />
    </div>
    </div>

    <tr>
        <td class="tb">
            <div class="form-group">
            <label class="col-md-1 control-label" for="CEP">CEP<h11>*</h11></label>
            <div class="col-md-2">
                <input id="cep" name="cep" placeholder="Apenas números" class="form-control" required type="text" maxlength="8" pattern="[0-9]+$"/>
            </div>
            </div>
        </td>

        <td class="tb"> 
            <div class="form-group">
            <label class="col-md-2 control-label" for="numero">Número<h11>*</h11></label>
            <div class="col-md-8">
                <input id="numero" name="numero" class="form-control" placeholder="" required  type="text" />
            </div>
            </div>
        </td>
    </tr>


    <tr> 
        <td class="tb">
            <div class="form-group">
            <label class="col-md-2 control-label" for="bairro">Bairro<h11>*</h11></label>
            <div class="col-md-22">
                <input id="bairro" name="bairro" class="form-control" placeholder="" required type="text" />
            </div>
            </div>
        </td>
        <td class="tb">
            <div class="form-group">
            <label class="col-md-2 control-label" for="cidade">Cidade<h11>*</h11></label>
            <div class="col-md-22">
                <input id="cidade" name="cidade" class="form-control" placeholder="" required type="text" />
            </div>
            </div>
        </td>
    </tr>


    <tr>
        <td class="tb">
            <div class="form-group">
            <label class="col-md-1 control-label" for="selectbasic">Estado<h11>*</h11></label>
            <div class="col-md-2">
                <select required id="estado" name="estado" class="form-control-type">
                <option>Selecione...</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="ES">ES</option>
                <option value="DF">DF</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
                </select>
            </div>
            </div>
        </td>
        <td class="tb">
            <div class="form-group">
            <label class="col-md-1 control-label" for="pass">Senha<h11>*</h11></label>
            <div><h25>Senha númerica de 8 caracteres</h25></div>
            <div class="col-md_1">
                <input type="password" id="pass" name="password" minlength="8" required class="form-control input-md" />
            </div>
            </div>
        </td>
    </tr>

    <div class="form-group">
    <label class="col-md-2 control-label" for="Cadastrar"></label>
    <div class="col-md-0">
        <button id="Cadastrar" name="Cadastrar" class="btna" type="Submit"><b>Cadastrar</b></button>
    </div>
    </div>

</fieldset>
</form>

    </>
    );
}