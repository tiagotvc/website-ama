import P from 'prop-types';
import React from 'react';
import { NavLinks } from '../NavLinks';
import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { DropDowns } from '../DropDowns';



export const Menu = ({  logoData }) => {
    return (
        <>
     
        <Styled.Container>
            <Styled.SupNav>
                <LogoLink {...logoData}/>
                    <nav>
                       <p>WhatsApp 999999999   </p>
                       <p>outro texto</p>
                    </nav>
            </Styled.SupNav>
            <Styled.SubNav>
                    <DropDowns />
            </Styled.SubNav>
                   
        </Styled.Container>
        </>
    
        
    );
};

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.prototype).isRequired,
    text: P.string.isRequired
};