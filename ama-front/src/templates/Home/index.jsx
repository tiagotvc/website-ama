import * as Styled from './styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React , {useEffect, useState} from 'react';
/* import { LogoLink
 } from '../../components/LogoLink'; */
 import links from '../../components/NavLinks/mock'

import { Menu } from '../../components/Menu';

//layouts
import Dashboard from '../Dashboard';

let currentUrl = window.location.href;



export default function Home () {
    //hooks
    const [hideNavbar, setHidden] = useState(false);


    /*Removes the navigation bar when is at dashboard
    cause dashboard have his own navbar
    */
    useEffect(() => {    
        if(currentUrl.includes('dashboard')){
            console.log("entrou aqui")
            setHidden(true);
        }
        else {
            setHidden(false);
        }
    },[currentUrl]);


    
    return (
        <div className="App">
        
            <Router>
                <Styled.Wrapper background="blue" wasIsDash={hideNavbar}>
                    <Menu links={links}
                        text = 'Conteúdo'
                        logoData={{srcImg:'assets/images/menor.png', link:'', text:'Amigos dos Autistas',size:'xlarge'}} />
                </Styled.Wrapper>

                <Switch>
                    <Route path="/dashboard" exact component={Dashboard} />
                </Switch>
            </Router>


        </div>
    );
}





