import styled, { css } from 'styled-components';
//import logoAma from './ecommerce.jpg';

export const Container = styled.nav`
    ${() => css`
        display:flex;
        vertical-align: top;
        margin-top: 22px;

        .icons {
            width:20px;
                height:20px;
                color:white;
                margin-bottom:2px;
        }
        

        > ul {
            display:flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    list-style: none;
                    padding: 0;
                    justify-content: center;
                    align-items: center;


            > li:first-child {
                margin-left: 0;
            }

            > li {
                padding: 15px;
                        list-style: none;
                        text-align: center;
                        color: white;
                        font-size: 14px;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        position:relative;
                       

                > a {
                    color:White;
                font-size:15px;
                font-weight:100;
                padding:5px;

                }
            }
        }
        `}
 `;


export const SubNav = styled.div`
    ${({isActive}) =>  css`
            background: #f7f7f7;
            border-radius: 5px;
            box-shadow: 0 10px 8px 0 rgba(0,0,0,0.2);
            display:${isActive? 'grid' : 'none'};
            grid-template-columns: repeat(3,1fr);
            left: -120px;
            position: absolute;
            width:758px;
            top:100%;
            padding:3px;
            margin: 0 auto;

            &::after {
                bottom:100%;
                left:140px;
                content:'';
                height: 0;
                width: 0;
                position:absolute;
                pointer-events:none;
                border:solid transparent;
                border-color:rgba(252,252,252,0);
                border-bottom-color:#f7f7f7;
                border-width:20px;
                border-radius:2px;
                margin-left:-20px;
            }
 `}
 `;

export const Grid = styled.div`
    ${({ background }) => css`
            background: radial-gradient(${background});
            border-radius:3px;
            display: flex;
            flex:0 1 auto;
            flex-direction: column;
            font-size:14px;
            justify-content:center;
            margin: 4px 4px;
            padding: 24px 14px 14px 96px;
            position: relative;
            transition: .2s all ease-in-out;
            cursor: pointer;

            > h4 {
                color:black;
                font-size: 14px;
                font-weight: 100;
            }

            &:hover {
                box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
                transform: scale(1.01);
             

                > h4 {
                    color:white;
                }
            }
    `}

`;


 export const Pictures = styled.div`
        ${({ imgUrl, border }) => css`
            height: 75px;
            width: 75px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 14px;
            border-radius:50%;
            border:1px solid ${border};
            background-image:url(${imgUrl});
            background-size: cover;

            `
        }
    `;

