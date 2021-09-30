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
        display:'flex';
        color:white;
        background:blue;
        position: absolute;
        visibility: ${ show ? 'visible' : 'hidden' };
        opacity: ${ show ? 1 : 0 };
        transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
        align-items: center;
        justify-content: center;
        left: 0;
        right: 0;
        top:6vh;


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

