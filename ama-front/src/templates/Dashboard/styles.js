import styled, { css } from 'styled-components';


export const Container = styled.div`
    background: #f5f6fa;
	height: 100%;
	transition: all 0.5s ease;
    width: 100%;
    position: absolute;

`

export const TopNav = styled.div`
    ${({isShow}) => css`
        width: ${isShow?"calc(100% - 225px) ": "100%"};
        margin-left:${isShow? "225px" : 0};
        transition: all 0.5s ease;
        background: #fff;
        height: 50px;
        border: 1px solid #f5f6fa;
        display: flex;
        align-items: center;
        padding: 0 30px;
        position:fixed;
        z-index:4;


        .img-brain {
            right:400px;
            position: absolute;
            

            > img {
                width: 40px;
                border-radius:80%;
            }
        }

        .created_by {
            right:20px;
            position: absolute;

            > span {
                color:rgba(88,54,206,1);
                opacity:30%;
                font-weight: bold;
                font-size: 14px;
            }

            .name {
                color:red;
            }
        }
        .hamburguer a {
            font-size: 24px;
            color: black;
        }

        .hamburguer a:hover {
            color: #cbaede;
        }
    `}
   
`
