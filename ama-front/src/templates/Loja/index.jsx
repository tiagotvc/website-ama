import * as Styled from './styles';
import React  from 'react';
import Slider from '../../components/Slider';
//import P from 'prop-types';

import links from '../../components/NavLinks/mock'

import { Menu } from '../../components/Menu';
import ShowCase from '../../components/Showcase';

export default function Loja () {

    return (
        <>
        <Styled.Wrapper>
            <Menu  links={links}
                text = 'Conteúdo'
                logoData={{srcImg:'assets/images/menor.png', link:'', text:'Amigos dos Autistas',size:'xlarge'}} 
            />
        </Styled.Wrapper>
        <Styled.Content>
            <div className="slider">
                <Slider/>
            </div>
            <Styled.News>
                <div><ShowCase/></div>
            </Styled.News>
            <Styled.Popular>
               <div className="heading">
                   <h1>Popular</h1>
               </div>

            </Styled.Popular>
            
        </Styled.Content>
        </>
         )
    }

/* DashboardContent.propTypes = {
    isShow: P.bool.isRequired,
} */