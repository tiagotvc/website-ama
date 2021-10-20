import P from 'prop-types';
import React from 'react';
import { NavLinks } from '../NavLinks';
import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { GrButton } from '../Buttons/GradientAnimatedButton/index';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md'

import { ExtensibleDropDown } from '../DropDowns/ExtensibleDropDown';




export const Menu = () => {

    return (
        <>
        <Styled.Grid>
        <Styled.Container>
            <Styled.SupNav>
                {/* <LogoLink {...logoData}/> */}
                    <nav>
                       <ul>
                            <li>
                            <RiWhatsappFill className="whatsappIcon" />
                                <span className="pink-span">(51) 99345-3333</span>
                            </li>
                            <li>
                            <MdEmail className="whatsappIcon" />
                                <span className="pink-span">amanh@gmail.com</span>
                            </li>
                            <li onClick = {() => console.log("oi")}>
                                <GrButton 
                                    text = "Cursos"
                                    colorOne = "#FFA63D"
                                    colorTwo = "#FF3D77"
                                    colorThree = "#FFA63D"
                                    colorFour = "#FF3D77"
                                    width = "100px"
                                    height = "30px"
                                ></GrButton>
                            </li>
                            <li onClick = {() => console.log("oi")}>
                                <GrButton 
                                    text = "Loja"
                                    colorOne = "#ff1493"
                                    colorTwo = "#ffb6c1"
                                    colorThree = "#ffe4e1"
                                    colorFour = "#ff1493"
                                    width = "100px"
                                    height = "30px"
                                ></GrButton>
                            </li>
                       </ul>
                    </nav>
            </Styled.SupNav>
            </Styled.Container>
                <Styled.Container2>
                    <Styled.SubNav>
                            <ExtensibleDropDown />
                    </Styled.SubNav>
                </Styled.Container2>
            </Styled.Grid>
             
                   
        
        </>
    
        
    );
};

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.prototype).isRequired,
    text: P.string.isRequired
};