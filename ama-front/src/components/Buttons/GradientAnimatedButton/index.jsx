import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

let defaultOne = "black";
let defaultTwo = "gray";
let defaultThree = "black";
let defaultFour = "black";
let defaultWidth = "150px";
let defaultHeight = "30px";
let defaultText = "button";

export const GrButton = (
        {
            colorOne = defaultOne,
            colorTwo = defaultTwo,
            colorThree = defaultThree,
            colorFour = defaultFour,
            width = defaultWidth,
            height = defaultHeight,
            text = defaultText,
            link = ""

        }) => {

    return (
        <Styled.GrButtonStyle 
            colorOne = {colorOne}
            colorTwo = {colorTwo}
            colorThree = {colorThree}
            colorFour = {colorFour}
            width = {width}
            height = {height}
            to = {link}
        >
            <span>{text}</span>        
        </Styled.GrButtonStyle>  
    );
};

GrButton.propTypes = {
    text: P.string.isRequired,
    colorOne: P.string.isRequired,
    colorTwo: P.string.isRequired,
    colorThree: P.string.isRequired,
    colorFour: P.string.isRequired,
    width: P.string,
    height: P.string,
    link: P.string,
};