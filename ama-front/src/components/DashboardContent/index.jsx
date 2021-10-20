
import * as Styled from './styles';
import P from 'prop-types';
import React, {useState} from  'react';
import { Menus } from './Menu/Menus';


export const DashboardContent = ({isShow}) => {

    const [activeLi, setActive] = useState(0);

    const onClick = (id) => {
        setActive(id);
    }

    const mock = [
        {
            id:1,
            name:"Menus",
        },
        {
            id:2,
            name:"Páginas"
        },
        {
            id:3,
            name:"Sub Páginas"
        },
        {
            id:4,
            name:"Icones"
        },
    ]

    return (
        <>
    <Styled.Wrapper isShow={isShow}>
        <div className="tabs">
            <ul>
                {mock.map((menu) => (
                    <Styled.TabList key={menu.id} onClick={() => onClick(menu.id)} isActive={activeLi===menu.id?true:false}>
                        <p>{menu.name}</p>
                    </Styled.TabList>
                ))}
            </ul>
        </div>
        <div className="content">
            {activeLi == 1?
            <Menus/>
             
            :
            <div>
            </div>}
        </div>
    </Styled.Wrapper>

    </>
  );
};


DashboardContent.propTypes = {
    isShow: P.bool.isRequired,
    isActive:P.bool.isRequired,
}