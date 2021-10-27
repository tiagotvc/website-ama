import * as Styled from './styles';
import React  from 'react';

/* import { LogoLink
 } from '../../components/LogoLink'; */
 import links from '../../components/NavLinks/mock'

import { Menu } from '../../components/Menu';


export default function Home () {
    
    return (
        <div className="App">
                <Styled.Wrapper>
                    <Menu  links={links}
                        text = 'Conteúdo'
                        logoData={{srcImg:'assets/images/menor.png', link:'', text:'Amigos dos Autistas',size:'xlarge'}} />
                </Styled.Wrapper>
        </div>
    );
}





