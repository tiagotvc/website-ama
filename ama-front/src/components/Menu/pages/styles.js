import styled , { css } from "styled-components";


export const Container = styled.div`
    display:flex;
    `
export const HomeUl = styled.ul`
    ${() => css`
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        justify-content: center;
        align-items: center;

        > li {
            padding: 5px;
            list-style: none;
            text-align: center;
            color: white;
            font-size: 14px;
            justify-content: center;
            align-items: center;
            display: flex;

            .whatsappIcon {
                width:25px;
                height:25px;
                color:white;
            }
        }
    `
}`

export const Shop = styled.div`
    ${() => css`
        display:flex;
        list-style: none;
        padding: 0;
        width: 100%;
        justify-content: space-between;
    `
}`

export const Menu = styled.div`
    ${() => css`
        display:flex;
        align-items: center;
        justify-content: space-between;

        > ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            list-style:none;
            
            > li {
                margin:10px;
                color:white;
            }
        }
    `
}`

export const Logo = styled.div`
    display:block;
    justify-content: center;
    align-items: center;

    > ul {
        margin:20px;
        list-style:none;
        
        > li:first-child {
            color: white;
            font-size: 28px;
            text-transform: uppercase;
            font-weight: 100;
            letter-spacing:0mm;
            
        }

        > li:last-child {
            color: orange;
            font-weight: bold;
            letter-spacing: 2px;
            font-size: 26px;
            background: linear-gradient(to right, #ff7f50 10%, #ffa500 100%);
            -webkit-background-clip: text;
	        -webkit-text-fill-color: transparent;
            font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

            .text {
                
            }
            
        }
    }

    
   
`