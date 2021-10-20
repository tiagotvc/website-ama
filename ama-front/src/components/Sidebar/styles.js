import styled , {css} from 'styled-components';
import avatar from './tiago.jpeg'
import autism from './autism.jpg'


export const Container = styled.div`
    ${({show, theme}) => css`
    background: ${theme.colors.blueColor};
	position: fixed;
	top: 0;
	left: ${show? 0: "-225px"};
	width: 225px;
	height: 100%;
	padding: 30px 0;
	transition: all 0.5s ease;
  

    .total-container-profile-picture {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        display: flex;
        background-image: url(${autism});
        background-size: cover;
        border-radius:80%;
        height: 185px;
        width: 185px;
        margin: 0 0px 0 20px;

    .container-profile-picture {
        display: flex;
        background: #313142;
        border-radius:80%;
        height: 160px;
        width: 150px;
        margin: 6px 0px 0 17px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        .profile-picture {
            display:flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 1px 0px 0px white;
            border-radius: 50%;
            height: 130px;
            width: 130px;
            margin: 12px 0px 0 11px;
            
        .profile-picture-background {
            height: 92%;
            width: 92%;
            background-image:url(${avatar});
            background-size:cover;
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }
        }   
    }
    

    }

    
    .user-informations {
        display: block;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin:0 0px 0 40px;
        color:white;
    }

    .sidebar_ul {
        list-style: none; 
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 10px;

    }

    
    `} 
`
export const ScheduleLi = styled.li`
    ${({isActive}) => css`
        background: #313142;
        margin-bottom: 10px;
        border-radius: 3px;
        padding: 12px 25px;
        text-transform: uppercase;
        font-weight: 500;
        position: relative;
        overflow: hidden;
        width: ${isActive?"226px":"200px"};
        letter-spacing: 2px;
        transition: all 0.4s ease;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        > div {
            display: block;
            color: ${isActive?"white":"#abaacd"};
            font-size: 14px;
            cursor: pointer;
            text-align: center;
            padding:10px;  
            position:relative;
            font-weight: bold;

            &:hover {
                color: white;
            }
        }

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: ${isActive?"100%":"30px"};
            height: 100%;
            background: #5437b7;
            background: linear-gradient(
                126deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(123, 90, 231, 1) 0%,
                rgba(88, 54, 206, 1) 100%
            );
            border-radius: 5px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            transition: all 0.4s ease;
        }

`}`