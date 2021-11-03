import styled from "styled-components";

export const Showcase = styled.div`
    display:block;

    .name {
            margin-top:100px;
            font-size: 20px;
        }
    
    
    `

export const Container = styled.div`
    display:flex;
    width: 100%;

        

        .next {
            cursor:pointer;  
            color:#764abc;
            height: 52px;
            width: 52px;
            margin-top:65px;
        }

        .previous {
            cursor:pointer;
            color:#764abc;
            height: 52px;
            width: 52px;
            margin-top:65px;
        }

`
export const Carousel = styled.div`
    display:flex;
    overflow-x: hidden;
    scroll-behavior:smooth;
    max-width: 80%;

    .item {
        background-color: white;
        margin:60px;
        padding:10px;
        width: 200px;
        border:1px solid black;
        flex:none;
        position:relative;
        border-radius:2px;

        .badge {
            width: 120px;
            height: 150px;
            overflow: hidden;
            position: absolute;
            top: -7px;
            right: -7px;

            .badge_content {
                left: -25px;
                top: 30px;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                position: absolute;
                display: block;
                width: 205px;
                padding: 2px 0;
                background-color: orange;
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.192);
                color: white;
                text-shadow: 0 1px 1px rgba(0,0,0,.2);
                text-transform: uppercase;
                text-align: center;
                border: 2px dotted white;
                outline : 5px solid  orange;
                justify-content: center;
            }
        }

        .badge::before {
            top: 0;
            left: 10px;
            border-top-color: transparent;
            border-right-color: transparent;
            position: absolute;
            z-index: -1;
            content: '';
            display: block;
            border: 5px solid #f19066;
            box-sizing: content-box;
        }

        .badge::after {
            bottom: 38px;
            right: 0;
            border-top-color: transparent;
            border-right-color: transparent;
            position: absolute;
            z-index: -1;
            content: '';
            display: block;
            border: 5px solid #f19066;
        }
    
        
        .image {

            > img {
                width: 100%;
                height: 150px;
                object-fit: cover;
            }  
        }

        .info {
            
            
            .prices {
                width: 70px;
                height: 20px;
                background: #764abc;
                color: white;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                text-align: center;
                display: flex;
                border-radius: 5px;
                margin-left:115px;
                margin-top:15px;
              
            }
        }
    }

    // 1440px desktop resolution
    @media screen and (max-width:1440px){
        max-width: 89%;
    }

    // 1024px desktop resolution
    @media screen and (max-width:1024px){
        max-width: 84%;
    }
    // *Tablet resolution
    @media screen and (max-width:768px){
        max-width: 89%;

        .item {
            margin:28px;
        }
    }
 
`
