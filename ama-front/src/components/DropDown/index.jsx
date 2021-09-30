import P from 'prop-types';
import React, { useState } from 'react';
import { Heading } from '../Heading';
import * as Styled from './styles';


export const DropDown = ({ text }) => {

    // eslint-disable-next-line no-unused-vars
    const [handlerShow, setHandler] = useState(false);

    return (
        <Styled.Container>
           <span onMouseEnter={() => setHandler(true)} onMouseLeave={() => setHandler(false) }>{text}</span>
           <Styled.SubDropDown show={handlerShow}>
               <ul>
                <Heading size='small'>Autismo</Heading>
                   <li><a href='%%'>1. Primeiro</a></li>
                   <li>2. Segundo</li>
                   <li>3. Terceiro</li>
                   <li>4. Quarto</li>
               </ul>
               <ul>
               <Heading size='small'>Autismo</Heading>
                   <li>1. Primeiro</li>
                   <li>2. Segundo</li>
                   <li>3. Terceiro</li>
                   <li>4. Quarto</li>
               </ul>
               <ul>
                <Heading size='small'>Autismo</Heading>
                   <li>1. Primeiro</li>
                   <li>2. Segundo</li>
                   <li>3. Terceiro</li>
                   <li>4. Quarto</li>
               </ul>
               <ul>
               <Heading size='small'>Autismo</Heading>
                   <li>1. Primeiro</li>
                   <li>2. Segundo</li>
                   <li>3. Terceiro</li>
                   <li>4. Quarto</li>
               </ul>
               
               
            </Styled.SubDropDown>
        </Styled.Container>
    );
};

DropDown.propTypes = {
    text: P.string.isRequired, 
}