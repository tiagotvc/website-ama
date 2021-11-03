import styled, {css} from 'styled-components';


export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.mainBg};
        display: flex;
    `}
`;

export const Content = styled.div`
    display:block;
    align-items: center;
    justify-content: center;
    position:relative;
    background:#764abc;
    height:1500px;

    .slider {
        width: 100%;
        display:flex;
        align-items: center;
        justify-content: center;
       
    
        .slider_slider {
            background:white;
            border:1px solid blue;
            height:500px;
            width:900px;
            position: relative;
            margin-top:50px;
            z-index:999;
            text-align: center;
            justify-content: center;
            align-items: center;
            display: flex;
            font-size: 40px;
        }

    }
    `
export const News = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    margin-top:-50px;
    width: 100%;
    background:white;
	transform: skewY(4deg);
    position:relative;

    > div {
        margin: 0 auto ;
	    transform: skewY(-4deg);
        max-width: 75vw;
    }
    
    `

export const Popular = styled.div`
  
`

