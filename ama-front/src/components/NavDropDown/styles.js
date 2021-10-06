import styled, { css } from 'styled-components';


export const Container = styled.nav`
    ${({ theme }) => css`
        display: block;
        text-decoration: none;
        font-size: ${theme.font.sizes.small};
        padding: ${theme.spacings.small};
        color: white;
        position: relative;
        cursor:pointer;
        z-index:20;


    `}
`;

