import styled, { css } from 'styled-components';


export const Wrapper = styled.div`
    ${({isShow}) => css`
        width: ${isShow?"calc(100% - 225px) ": "100%"};
        margin-left: ${isShow?"225px": 0 };
        transition: all 0.5s ease;
        display:block;
        align-items: center;
        justify-content: center;
        padding: 50px;

        .tabs {
            margin:30px;
            z-index:1!important;
            position:relative;
            margin-top:50px;
            
            
            > ul {
                width:100%;
                height: 45px;
                display: flex;
                list-style: none;
                
            }

        }
    
        .content {
            z-index:2;
            position: relative;
            margin:20px;
            margin-top:-15px;
            background: #fff;
            padding: 50px;
            line-height: 28px;
            border:1px solid lightgray;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
         
        }
    `}   
`

export const TabList = styled.li`
    ${({isActive}) => css`
        width: 25%;
        height: ${isActive?"105px" : "65px"};
        padding: 0 20px;
        text-align: center;
        background:${isActive?"#5437b7" : "#dbe3eb"};
        background:${isActive?"linear-gradient(126deg,rgba(2, 0, 36, 1) 0%,rgba(123, 90, 231, 1) 0%,rgba(88, 54, 206, 1) 100% )" :"#dbe3eb"};
        cursor: pointer;
        text-transform: uppercase;
        color:${isActive?"white" : "#5437b7"};
        font-size: 14px;
        letter-spacing: 2px;
        transition: all 0.3s ease;
        border-left: 1px solid white;
        border-radius:10px 10px 0px 0px;
        font-weight:${isActive?"bold" : "100"};
        margin-top: ${isActive?"-20px" : "0"};

    `}
`