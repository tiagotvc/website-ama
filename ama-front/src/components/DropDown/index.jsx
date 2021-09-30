import P from 'prop-types';
import React, { useState } from 'react';
import { Heading } from '../Heading';
import * as Styled from './styles';


export const DropDown = ({ text }) => {

  const [handlerShow, setHandler] = useState(false);
  const onClick = () => setHandler(!handlerShow);

    return (
      <>
        <Styled.Container>
           <span  onClick={onClick}>{text}</span>

        </Styled.Container>
         <Styled.SubDropDown  show={handlerShow}>
         <ul>
          <Heading size='small'>Autismo</Heading>
             <li><a href='%%'>1. Primeiro</a></li>
             <li>2. Segundo</li>
             <li>3. Terceiro</li>
             <li>4. Quarto</li>
         </ul>
      </Styled.SubDropDown>
      </>
    );
};

DropDown.propTypes = {
    text: P.string.isRequired,
}
