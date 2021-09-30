import styled, { css } from 'styled-components';


export const Container = styled.a`
    ${({ theme }) => css`
        display: block;
        text-decoration: none;
        font-size: ${theme.font.sizes.small};
        padding: ${theme.spacings.small};
        color: black;
        position: relative;
        cursor:pointer;

       
    `}
`;

export const SubDropDown = styled.div`
    ${({ show }) => css`
        display:${show ? 'flex' :'none'};
        color:white;
        background:blue;
        position: absolute;
        
    > ul {
        list-style: none;  
        
    }
    > ul > li > a {
        text-decoration: none;
        color:black;

        &:hover {
            color:white;
        }
    }

   
    `}
`;

