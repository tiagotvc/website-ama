
import * as Styled from './styles';
import P from 'prop-types';
import React, { useState }from  'react';

export const Sidebar = ({isShow}) => {

    const [activeUl, setActiveUl] = useState(0);

    const onClick = (id) => {
        setActiveUl(id);
    }

    const mock = [
        {
            name:"Usuários",
            id:1
        },
        {
            name:"Menus",
            id:2
        },
        {
            name:"Cursos",
            id:3
        },
        {
            name:"Loja",
            id:4
        },

    ]
    
    return (
    <Styled.Container show={isShow}>
        <div className="total-container-profile-picture"> 
            <div className="container-profile-picture">
                <div className="profile-picture">
                    <div className="profile-picture-background">
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className="user-informations">
            <h3>Tiago Carvalho</h3>
            <p>Desenvolvimento</p>    
        </div>
        <ul className="sidebar_ul">
            {mock.map((data) => (
                <Styled.ScheduleLi key={data.id} onClick={() => onClick(data.id)} isActive={activeUl === data.id? true: false}>
                    <div >{data.name}</div>
                </Styled.ScheduleLi> 
            ))}
        </ul>
    </Styled.Container>
  );
};

Sidebar.propTypes = {
    isShow: P.bool.isRequired,
}
