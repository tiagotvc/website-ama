import styled, { css } from 'styled-components';
import * as Animation from '../Animations/animations';


export const GrButtonStyle = styled.button`
    ${({ colorOne, colorTwo, colorThree, colorFour, width, height}) => css`
        width:${width};
        height:${height};
        color:white;
        background:linear-gradient(-45deg, ${colorOne}, ${colorTwo}, ${colorThree}, ${colorFour});
        font-size:14px;
        font-weight:bold;        
        animation: ${Animation.gradient} 2.5s ease infinite;
        background-size: 600%;
        border-radius: 10px;
        border: 1px solid white;
        cursor:pointer;

        &:hover {
            border: 2px solid white;
        }
    `}
    
`;

                            