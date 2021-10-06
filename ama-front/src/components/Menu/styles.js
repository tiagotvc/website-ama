import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles'
import { Title as Heading } from '../Heading/styles'

export const Container = styled.div`
    ${({ theme }) => css`
        position:fixed;
        z-index:999;
        top:0;
        left: 0;
        right: 0;
        bottom:0;
        width: 100%;
        height: 16vh;
        border-bottom: ${theme.colors.mediumGray};
        background: ${theme.colors.blueColor};
        display:flex;
        justify-content: center;
        

     

        > ${SectionContainer} {
            padding-top: 0;
            padding-bottom: 0;
        }

        & ${Heading} {
            margin-top: 0;
            margin-bottom: 0;
        }

        @media ${theme.media.lteMedium} {
            height: 100vh;

            > ${SectionContainer} {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                height: 100vh;
                align-items: center;
            }

            & ${Heading} {
                padding-bottom: ${theme.spacings.large};
                display: flex;
                justify-content: center;
            }
        }
    `}
`;

export const SubNav = styled.div`
    ${({ theme }) => css`
        position:relative;
        z-index:;
        left: 0;
        right: 0;
        bottom:0;
        width: 100%;
        height: 6vh;
        border-bottom: ${theme.colors.mediumGray};
        background: ${theme.colors.blueColor};

     
        > ${SectionContainer} {
            padding-top: 0;
            padding-bottom: 0;
        }

        & ${Heading} {
            margin-top: 0;
            margin-bottom: 0;
        }

        @media ${theme.media.lteMedium} {
            height: 100vh;

            > ${SectionContainer} {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                height: 100vh;
                align-items: center;
            }

            & ${Heading} {
                padding-bottom: ${theme.spacings.large};
                display: flex;
                justify-content: center;
            }
        }
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

