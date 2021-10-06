import React from 'react';
import * as Styles from './styles'
import * as Icons from "react-icons/fa";
import Typical from 'reac-typical';



export default function OurTeam() {
    return (
        <Styles.Container>
            <Styles.Parent>
                <Styles.Details>
                    <Styles.Colz>
                        <a href='#'>
                            <Icons.FaTwitterSquare />
                        </a>
                        <a href='#'>
                            <Icons.FaFacebookSquare />
                        </a>
                        <a href='#'>
                            <Icons.FaInstagramSquare />
                        </a>
                    </Styles.Colz>
                    <Styles.DetailsName>
                        <span> 
                            Olá eu sou a
                            <span>
                                Viviam
                            </span>
                        </span>
                    </Styles.DetailsName>
                    <Styles.DetailsRole>
                        <span> 
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Mãe de Autista",
                                        2000,
                                        "Pedagoga",
                                        2000,
                                        "Atual Presidente da Ama NH",
                                        2000,
                                    ]}
                                   />
                            </h1>
                            <span>
                                Focada em alavancar a causa dos autistas
                            </span>
                        </span>
                    </Styles.DetailsRole>
                    
                </Styles.Details>
            </Styles.Parent>
        </Styles.Container>
    )
}