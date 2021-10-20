import styled, { css } from 'styled-components';
import { Container as Logo } from '../LogoLink/styles';


export const Grid = styled.div`
    width: 100%;
    display:block;
`
export const Container = styled.div`
    ${({ theme }) => css`
        z-index:999;
        height:80px;
        width: 100%;
        border-bottom: ${theme.colors.blueColor};
        display:flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.blueColor};
    
        & ${Logo}{
           
        }

    `}
    
`;

export const Container2 = styled.div`
    ${({ theme }) => css`
        width:100%;
        border-bottom: ${theme.colors.blueColor};
        display:flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.blueColor};
        height:30px;
        position: relative;
       
        
       
        & ${Logo}{
           
        }

    `}
    
`;

export const SubNav = styled.div`
    ${({ theme}) => css`
        display:flex;
        align-items: center;
        justify-content:center;
        background: ${theme.colors.blueColor};
        width:100%;
        height:50px;
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
            
            .whatsappIcon {
                width:25px;
                height:25px;
                color:white;
                
                
            }
            > nav {
                display: flex;
            
                > ul {
                    display:flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    list-style: none;
                    padding: 0;
                    justify-content: center;
                    align-items: center;

                    > li {
                        padding: 5px;
                        list-style: none;
                        text-align: center;
                        color: white;
                        font-size: 14px;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                                     
                    }
                }
        `   }
    `
;

