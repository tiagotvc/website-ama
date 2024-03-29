
import * as Styled from './styles';
import P from 'prop-types';
import React , {useState} from  'react';
import { TiHome } from 'react-icons/ti'
import { MdBrightnessAuto } from 'react-icons/md'
import { GiThreeFriends } from 'react-icons/gi'
import { GiLifeSupport } from 'react-icons/gi'



export const DropDowns = () => {
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    const mock = [
        {
            hoverColor:'#00bfff',
            imgUrl:'assets/images/ecommerce.jpg',
            border:'orange',
            name:'Loja da Ama',
            id:1,
            background:'#fbc1cc, #fa99b2'
        },
        {
            hoverColor:'red',
            imgUrl:'assets/images/ecommerce.jpg',
            border:'orange',
            name:'Ama Academy',
            id:2,
            background:'#76b2fe, #b69efe'
        },
        {
            hoverColor:'pink',
            imgUrl:'assets/images/ecommerce.jpg',
            border:'orange',
            name:'Menos informações',
            id:3,
            background:'#60efbc, #58d5c9'
        },
        {
            hoverColor:'gray',
            imgUrl:'assets/images/ecommerce.jpg',
            border:'orange',
            name:'Menos informações',
            id:3,
            background:'#60efbc, #58d5c9'
        }
    ]

    return (
    <Styled.Container>
        <ul>
            <li><TiHome className="icons"/><a  onMouseEnter={onClick}>Ama +</a>
                <Styled.SubNav isActive={isActive}>
                    {mock.map((mocks) => (
                        <Styled.Grid key={mocks.id} hoverColor={mocks.hoverColor} background={mocks.background}>
                                <Styled.Pictures imgUrl={mocks.imgUrl} 
                                                  border={mocks.border} 
                                >
                                </Styled.Pictures>
                                <h4>{mocks.name}</h4>
                        </Styled.Grid>  
                        ))}
                </Styled.SubNav>
            </li>
            <li><MdBrightnessAuto className="icons"/><a  onMouseEnter={onClick}>Autismo</a></li>
            <li><GiThreeFriends className="icons"/><a  onMouseEnter={onClick}>Voce e a Ama</a></li>
            <li><GiLifeSupport className="icons"/><a  onMouseEnter={onClick}>Contato</a></li>
            
        </ul>
    </Styled.Container>
  );
};

DropDowns.propTypes = {
    isActive: P.bool,
};

