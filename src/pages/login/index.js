import React, { useState } from "react";
import "./styles.css";
import avatar from "../../assets/img/avatar.jpg";
import api from "../../services/api"


export default function Login({history}) {
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/login", {email, senha});
      if (response.data.length == 0) {
        alert("Usuário e/ou senhas inválidos");
        return;
      }  
  
  const user = JSON.stringify({ email, senha });
  localStorage.setItem("user", user);
    history.push("/cliente");
  

  }


  return (
    <body>
        <div class="container">
          <div class="card card-container">
            <img id="profile-img" class="profile-img-card" src={avatar} alt="texto" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin" onSubmit={handleSubmit}>
              <span id="reauth-email" class="reauth-email"></span>
              <label class="control-label" for="f2"> Email: </label>
              <input type="text" id="email" class="form-control" 
              placeholder="exemplo@exemplo.com" required autoFocus onChange={event => setEmail(event.target.value)}/>
              <label class="control-label" for="f2"> Senha: </label>
              <input type="password" id="senha" class="form-control" placeholder="Senha" 
              required  onChange={event => setSenha(event.target.value)}/>
              <div id="remember" class="checkbox" />
              <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit"> Entrar </button>
            </form>
          </div>
        </div>
    </body>
  );
}
