import P from 'prop-types';
import React , {useEffect, useState } from 'react';
import { NavLinks } from '../NavLinks';
import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { ExtensibleDropDown } from '../DropDowns/ExtensibleDropDown';
import { HomeMenu } from './pages/home.menu';
import { ShopMenu } from './pages/shop.menu';

export const Menu = () => {
    // hooks 
    const [ menu, setMenu ] = useState('inicio');

    // useEffect that controls the change of Url
    useEffect(() => {  
        async function changedUrl(){
            if(window.location.href.includes('shop')) {
                setMenu('shop');
            }
            else {
                setMenu('home');
            }
        }
        changedUrl();
        
    },[window.location.reload,window.location.href]);


    return (
        <>
        <Styled.Grid >
            <Styled.Container background={menu} >
                            {menu === 'inicio'?
                                <HomeMenu/>
                            :
                            menu === 'shop'?
                                <ShopMenu />
                            :
                                <HomeMenu/>
                            }
                </Styled.Container>
                <Styled.Container2 menu={menu}>
                    <Styled.SubNav background={menu}> 
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
    text: P.string.isRequired,
    background: P.string.isRequired,
    menu: P.string.isRequired
};