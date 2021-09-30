import styled, { css } from 'styled-components';

const textColored = (textColor) => css`
  color: ${textColor};
`;

export const Container = styled.div`
  ${({ theme, textColor}) => css`
    font-size: ${theme.font.sizes.small};
    ${textColored(textColor)};
  `}
`;