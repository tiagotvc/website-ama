import styled, { css } from 'styled-components';
import { Container as Logo } from '../LogoLink/styles';



export const Grid = styled.div`
    width: 100%;
    display:block;
`
export const Container = styled.div`
    ${({ theme, background }) => css`
        z-index:999;
        height:80px;
        width: 100%;
        border-bottom: ${theme.colors.blueColor};
        display:flex;
        align-items: center;
        justify-content: center;
        background: ${background === 'shop'? '#764abc': theme.colors.blueColor};
        -webkit-transition: all  1000ms linear;
        -ms-transition: all linear;
        transition: all 1000ms linear;
    
        & ${Logo}{
           
        }

    `}
    
`;

export const Container2 = styled.div`
    ${({ theme, menu }) => css`
        width:100%;
        border-bottom: ${theme.colors.blueColor};
        display:${menu === 'shop'? 'none': 'flex'};
        align-items: center;
        justify-content: center;
        background: ${theme.colors.blueColor};
        height:30px;
        position: relative;
        transition: opacity 1s ease-out;

        & ${Logo}{
           
        }

    `}
    
`;

export const SubNav = styled.div`
    ${({ theme, background}) => css`
        display:flex;
        align-items: center;
        justify-content:center;
        background: ${background == 'shop'? '#764abc': theme.colors.blueColor};
        width:100%;
        height:50px;
        -webkit-transition: all  1000ms linear;
        -ms-transition: all linear;
        transition: all 1000ms linear;
    `}
`;


export const MenuContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        flex-flow: row wrap;
      

    @media ${theme.media.lteMedium} {
        display: block;
        text-align: center;
        padding: ${theme.spacings.xxlarge} 0;
    }
    `}
`;


export const SupNav = styled.div`
        ${() => css`
            display:flex;
            

            .pink-span {
                color:White;
                font-size:15px;
                font-weight:100;
                padding:5px;
                
            }
            
            > nav {
                display: flex;
            
                }
        `   }
    `
;

