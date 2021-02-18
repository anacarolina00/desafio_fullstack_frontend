import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './pages/login';
import Cliente from './pages/cliente';
import Pessoa from './pages/pessoa';
import formCliente from './pages/formCliente';
import formPessoa from './pages/formPessoa';



const Routes = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cliente" component={Cliente} />
        <Route exact path="/pessoa" component={Pessoa} />
        <Route exact path="/formpessoa" component={formPessoa} />
        <Route exact path="/formcliente" component={formCliente} />
    </Switch>
    </BrowserRouter>
);


export default Routes;


