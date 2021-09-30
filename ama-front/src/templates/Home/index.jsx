import * as Styled from './styles'
;
import React from 'react';
/* import { LogoLink
 } from '../../components/LogoLink'; */
 import links from '../../components/NavLinks/mock'

import { Menu } from '../../components/Menu';



export default function Home () {
    
    return (
        <div className="App">
            <Styled.Wrapper background="blue">
                <Menu links={links}
                      text = 'DropDown'
                      logoData={{srcImg:'', link:'', text:'Amigos dos Autistas',size:'large'}} />
            </Styled.Wrapper>
        </div>
    );
}





