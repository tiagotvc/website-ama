import styled, { css } from 'styled-components';
import { fadeInFromNone } from '../../../Buttons/Animations/animations';


export const Container = styled.div`
    ${() => css`
        display:block;
        align-items: center;
        justify-content: center;
    `}   
`

export const Menus = styled.div`
    ${({isActive}) => css`
        display: block;
        width: 100%;
        align-items: center;
        justify-content: center;


        .label {
            display: block;
            color: #555555;
            margin-bottom: 6px;
        }

        .input {
            padding: 13px;
            width:250px;;
            text-align: center;
            border: 2px solid #dddddd;
            border-radius: 5px;
            letter-spacing: 1px;
            word-spacing: 3px;
            outline: none;
            font-size: 16px;
            color: #555555;
        }


        .title-new-menu {
                background: linear-gradient(
                126deg,rgba(2,0,36,1) 0%,rgba(123,90,231,1) 0%,rgba(88,54,206,1) 100% );
                text-align: center;
                color:white;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                height: 70px;
                font-size: 20px;
                font-weight:bold;
                align-items: center;
                justify-content: center;
                padding:20px;

            }

            .flex-div {
                display: ${isActive? 'flex':'none'};
                align-items: center;
                justify-content: center;
                height:200px;
                opacity: ${isActive? 1:0};
                transition: all 800ms ease-in-out;
                animation: ${fadeInFromNone} 0.5s ease-out;

                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

                .divisors {
                    padding-left:15px;
                }
            }  
        }

        .
    `}
    

`
