import React from 'react';
import * as Styled from './styles'
import { GrButton } from '../../Buttons/GradientAnimatedButton/index';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md'
import { useHistory } from "react-router-dom";


export const HomeMenu = () => {

    // history variables
    let history = useHistory();

     // button shopping function
    function handleShop(){
        history.push("/shop");
    }

    return (
    <Styled.Container>
        <nav>
            <Styled.HomeUl>
                <li>
                    <RiWhatsappFill className="whatsappIcon" />
                    <span>(51) 99345-3333</span>
                </li>
                <li>
                    <MdEmail className="whatsappIcon" />
                    <span>amanh@gmail.com</span>
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
                    >
                    </GrButton>
                </li>
                <li onClick = {()=> handleShop()}>
                    <GrButton 
                        text = "Loja"
                        colorOne = "#ff1493"
                        colorTwo = "#ffb6c1"
                        colorThree = "#ffe4e1"
                        colorFour = "#ff1493"
                        width = "100px"
                        height = "30px"
                        link="/shop"
                    ></GrButton>
                </li>
            </Styled.HomeUl>
        </nav>
    </Styled.Container>
        
    )
}