
import * as Styled from './styles';
import P from 'prop-types';
import React , {useState} from  'react';
import { TiHome } from 'react-icons/ti'
import { MdBrightnessAuto } from 'react-icons/md'
import { GiThreeFriends } from 'react-icons/gi'
import { GiLifeSupport } from 'react-icons/gi'


export const ExtensibleDropDown = () => {
   /*  const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive); */

    const [activeDropDown, setActiveDropdown] = useState(0);

    const onClick = (id) => {
        setActiveDropdown(id);
    }

    /* const [openedDropdown, setOpenedDropdown] = useState(null) ;

    dropdownClicked = openedDropdown => env => {
        setOpenedDropdown({openedDropdown})
    } */


    const handleSelect=(e)=>{
        console.log(e);
      }
      
    const menus = [
        {
            liName: 'Ama +',
            icon: <TiHome className="icons"/>,
            hoverColor:'gray',
            subMenus: [
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Redes Sociais',
                    id:1,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Nosso Time',
                    id:2,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Eventos',
                    id:3,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
            ],
            imgUrl:'assets/images/ecommerce.jpg',
            border:'orange',
            name:'Menos informações',
            id:1,
            background:'#60efbc, #58d5c9'   
        },
        {
            liName: 'Autismo',
            icon: <MdBrightnessAuto className="icons"/>,
            hoverColor:'gray',
            imgUrl:'assets/images/ecommerce.jpg',
            border:'orange',
            subMenus: [
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Redes Sociais',
                    id:1,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Nosso Time',
                    id:2,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Eventos',
                    id:3,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
            ],
            name:'Menos informações',
            id:2,
            background:'#60efbc, #58d5c9'   
        },
        {
            liName: 'Ama e você',
            icon: <GiThreeFriends className="icons"/>,
            hoverColor:'gray',
            imgUrl:'assets/images/ecommerce.jpg',
            border:'orange',
            subMenus: [
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Redes Sociais',
                    id:1,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Nosso Time',
                    id:2,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Eventos',
                    id:3,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
            ],
            name:'Menos informações',
            id:3,
            background:'#60efbc, #58d5c9'   
        },
        {
            liName: 'Contato',
            icon: <GiLifeSupport className="icons"/>,
            id:4,
            subMenus: [
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Redes Sociais',
                    id:1,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Nosso Time',
                    id:2,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
                {
                    imgUrl:'assets/images/ecommerce.jpg',
                    border:'orange',
                    name:'Eventos',
                    id:3,
                    background:'#60efbc, #58d5c9',
                    hoverColor:'gray',
                },
            ],
             
        }
    ]

    return (

       
        <>
    <Styled.Container>
        <ul>
            {menus.map((menu) => (
                <li key={menu.id}>{menu.icon}<a onSelect={handleSelect} onClick={() => onClick(menu.id)}>{menu.liName}</a>
                <Styled.SubNav isActive={activeDropDown == menu.id ? true : false}>
                    <ul>
                        {menu.subMenus.map((sub) => (
                            <Styled.Grid key={sub.id} hoverColor={sub.hoverColor} background={sub.background}>
                                <Styled.Pictures imgUrl={sub.imgUrl} 
                                                border={sub.border} 
                                >
                            </Styled.Pictures>
                            <h4>{sub.name}</h4>
                            </Styled.Grid> 
                        ))} 
                    </ul>
                </Styled.SubNav>
            </li>
            ))}
        </ul>
    </Styled.Container>
    </>
  );
};

ExtensibleDropDown.propTypes = {
    isActive: P.bool,
};

