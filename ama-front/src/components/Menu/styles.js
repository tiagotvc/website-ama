import styled, { css } from 'styled-components';
import { Container as Logo } from '../LogoLink/styles';

export const Container = styled.div`
    ${({ theme }) => css`
        position:fixed;
        z-index:999;
        top:0;
        left: 0;
        right: 0;
        bottom:0;
        width: 100%;
        border-bottom: ${theme.colors.blueColor};
        display:flex;

        & ${Logo}{
            margin-left:410px;
        }

        @media ${theme.media.lteMediumx} {
            
            height: 12vh;
            & ${Logo}{
                margin-left:310px;
                margin-top:-10px;
               
            }
        }
        
    `}
    
`;

export const SubNav = styled.div`
    ${({ theme}) => css`
        display:flex;
        align-items: center;
        justify-content:center;
        position:absolute;
        height:7vh;
        background: ${theme.colors.blueColor};
        width:100%;
        top:100%;
        z-index:-1;

        


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
        ${({theme}) => css`
            display:flex;
            width:100%;
            background: ${theme.colors.blueColor};

           > nav {
               display:flex;
          
              
           }
         
         
           
            
    `}
`;

