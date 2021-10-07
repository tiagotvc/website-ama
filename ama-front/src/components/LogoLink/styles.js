
import styled, { css } from 'styled-components';


const imgSize = {
    small: (theme) => css`
        > img {max-height: ${theme.images.small};}
    `,
    medium: (theme) => css`
        > img {max-height: ${theme.images.medium};}
    `,
    large: (theme) => css`
        > img {max-height: ${theme.images.large};
               transform: rotate(-20deg);
               border-radius:20px;
               }
    `,
    xlarge: (theme) => css`
        > img { 
                max-height: ${theme.images.xlarge};
                border-radius:20px;
               
               
            }
    `,
    huge: (theme) => css`
        > img { max-height: ${theme.images.huge};
                transform: rotate(-20deg);
                border-radius:10px;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;}
    `,
    xhuge: (theme) => css`
        > img {max-height: ${theme.images.xhuge};}
    `,
  };



export const Link = styled.div`
    ${({size,theme}) => css`
        text-decoration:none;  
        color:inherit;
        ${imgSize[size](theme)};
        z-index:20;
     
        
             
    `}
`;

export const Container = styled.div`
  ${() => css`
      width: 150px;
      height: 150px;
      background:white;
      border-radius: 20px;
      background-image:url('assets/images/menor.png');
      padding:5px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;}
      transform:rotate(-20deg);
      margin-top:17px;
   
    
    
  
`}
`;