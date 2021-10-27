import styled from "styled-components";


export const Container = styled.div`
    height:500px;
    width:900px;
    position: relative;
    margin-top:50px;
    z-index:999;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    display: flex;
    font-size: 40px;
    
`

export const Content = styled.div`
    display:flex;
    width:85%;
    height:90%;
    z-index:999;

    .images {
        width:100%;
        height:100%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
       

        .current_image {
            width: 100%;
            height: 100%;
            object-fit:fill; 
            
        }
    
        .informations {
            background:black;
            position:absolute;
            opacity:0.2;
            width:85%;
            height:12%;
            bottom:24px;
           
        }

        .text_informations {
            bottom:24px;
            text-align:center;
            align-items: center;
            justify-content: center;
            display: flex;
            color:white;
            position:absolute;
            width:85%;
            height:10%;
        }

        .next_button {
            bottom:24px;
            position: absolute;
            color:#764abc;
            width:15%;
            height:10%;
           
            
           

            .next {
                cursor:pointer;
                border:1px solid white;
                border-radius: 50%;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                margin-left:700px;
                
                

            }
        }

        .previous_button {
            bottom:24px;
            position: absolute;
            color:#764abc;
            width:10%;
            height:10%;
            
          

            .previous {
                cursor:pointer;
                border:1px solid white;
                border-radius: 50%;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                
                

            }
        }

    }
`

export const ContainerDots = styled.div`
    height:90%;
    width: 10%;
    z-index:999;
    display:block;
    align-items: center;
    justify-content: center;
    margin-top:10%;

    .active_puzzle{
        width: 70px;
        height: 70px;
        transform: rotate(15deg);
        color:snow;
    }

    .puzzle {
        width: 70px;
        height: 70px;
        transform: rotate(15deg);
        color:#4B0082;
    }
  


    `