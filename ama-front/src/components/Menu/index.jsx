import P from 'prop-types';
import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { NavLinks } from '../NavLinks';
import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { DropDown } from '../DropDown';

export const Menu = ({ links = [], logoData, text }) => {
    console.log(text)
    return (
        <Styled.Container>
            <SectionContainer>
                <Styled.MenuContainer>
                    <LogoLink {...logoData}/>
                    <DropDown text={text} />
                    <NavLinks links={links} />
                </Styled.MenuContainer>
            </SectionContainer>
        </Styled.Container>
    );
};

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.prototype).isRequired,
    text: P.string.isRequired
};