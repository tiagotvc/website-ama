
import styled, { css } from 'styled-components';

const imgSize = {
    small: (theme) => css`
        > img {max-height: ${theme.images.small};}
    `,
    medium: (theme) => css`
        > img {max-height: ${theme.images.medium};}
    `,
    large: (theme) => css`
        > img {max-height: ${theme.images.large};}
    `,
    xlarge: (theme) => css`
        > img {max-height: ${theme.images.xlarge};}
    `,
    huge: (theme) => css`
        > img { max-height: ${theme.images.huge};}
    `,
    xhuge: (theme) => css`
        > img {max-height: ${theme.images.xhuge};}
    `,
  };



export const Container = styled.a`
    ${({size,theme}) => css`
        text-decoration:none;
        color:inherit;
        ${imgSize[size](theme)};
    `}
`;