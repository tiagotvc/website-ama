import styled, {css} from 'styled-components';


export const Wrapper = styled.div`
    ${({ theme, wasIsDash }) => css`
        background: ${theme.colors.mainBg};
        visibility: ${wasIsDash? "hidden": "visible"};
        display: ${wasIsDash? "none": "flex"};
    `}
`;

