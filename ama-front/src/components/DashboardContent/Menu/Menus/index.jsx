
import * as Styled from './styles';
import React, { useState } from  'react';
import { DropdownSelect } from '../../../DropDowns/DropdownSelect';
import P from 'prop-types';



export const Menus = () => {

    const [newMenu, setActiveNewMenu] = useState(false);

    const clickMenu = () => setActiveNewMenu(!newMenu);

    return (
    <Styled.Container >
        <Styled.Menus onClick={() => clickMenu()} isActive={newMenu}>
            <div className="title-new-menu"><span>Criar um novo Menu</span></div>
              <div className="flex-div">
                    <div className="divisors">
                        <label className="label">Nome do Menu:</label>
                        <input type="text" className="input" placeholder="Nome do Menu"/>
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="divisors">
                    <label className="label">Escolha o Icone:</label> 
                    
                    <DropdownSelect/>
                    </div>
                </div>
        </Styled.Menus>
        
        
        
    </Styled.Container>
  );
};

Menus.propTypes = {
    isActive: P.bool.isRequired,
  
}