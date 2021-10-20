
import React from 'react';

import * as Styled from './styles';


export const DashAccordion = () => {

    /* async function handleChangeActive(title) {

        if(active === "" || active === null || active === undefined) {

            setActive(title);

        }else {

           setActive("");

        }
    } */

    return (
        <Styled.Container>
            <Styled.AccordionHeader>
               <span>Adicionar um novo Menu</span>
                 
                    <span /* onClick={() => handleChangeActive(title)} */>X</span>
                
            </Styled.AccordionHeader>
            <Styled.AccordionContent>
            
            </Styled.AccordionContent>
        </Styled.Container>
    )
}