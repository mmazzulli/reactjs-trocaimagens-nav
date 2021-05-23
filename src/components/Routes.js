import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from '../Pages/Home'
import SobreMim from '../Pages/SobreMim'
import Portfolio from '../Pages/Portfolio'
import Contatos from '../Pages/Contatos'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/SobreMim" component={SobreMim}/>
                <Route path="/Portfolio" component={Portfolio}/>
                <Route path="/Contatos" component={Contatos}/> 
            </Switch>
        </BrowserRouter>
    )
}