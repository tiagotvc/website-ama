import * as Styled from './styles';
import React , {useState} from 'react';
import { DashboardContent } from '../../components/DashboardContent'
import { Sidebar } from '../../components/Sidebar';
import P from 'prop-types';




export default function Dashboard () {

    const [show, setActive] = useState(false);

    const handlerClick = () => setActive(!show);
    
    return (
        <Styled.Container>
            <Sidebar isShow={show}></Sidebar>
            <Styled.TopNav isShow={show}>
                    <div className="hamburger">
                        <a onClick={() => handlerClick()}>click to hide or show</a>
                    </div>
                    <div className="created_by">
                        <span>Ama Brain versão 1.0</span>
                        <span> - Criado por : </span>
                        <span className="name"> Tiago V. M. Carvalho</span>
                    </div>
                </Styled.TopNav>
            <DashboardContent isShow={show} />
        </Styled.Container> 
    )
}

DashboardContent.propTypes = {
    isShow: P.bool.isRequired,
}