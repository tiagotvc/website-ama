import React , { useState } from 'react'
import * as Styled from './styles'
import avatar from './img1.jpg';
import avatar2 from './img2.jpg';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaPuzzlePiece } from 'react-icons/fa';

export default function Slider() {

    const [ current, setCurrent ] = useState(0);

    const images = [
        { id:0, img:avatar },
        { id:1, img:avatar2 },
        { id:2, img:avatar },
        { id:3, img:avatar2 }
    ]

    let max = images.length;

    const next = () => {
        if(current < max -1){
            setCurrent(current + 1);
        }
        else {
            console.log("ja esta no ultimo")
        }
    }

    const previous = () => {
        if(current > 0){
            setCurrent(current -1);
        }
        else {
            console.log("ja esta no primeiro")
        }
        
    }

    return (
        <Styled.Container>
            <Styled.Content>
                <div className="images">
                    <img className="current_image" src={images[current].img} alt="current"/>
                    <div className="informations"/>
                    <div className="text_informations">
                        <p>Palestras da Ama</p>
                    </div>
                    <div className="next_button" ><FaArrowAltCircleRight onClick={() => next()}className="next"/></div>
                    <div className="previous_button" ><FaArrowAltCircleLeft onClick={() => previous()}className="previous"/></div>
                </div>
            </Styled.Content>
            <Styled.ContainerDots>
                {images.map((img) => (
                    <FaPuzzlePiece key={img.id} className={img.id == current?'active_puzzle':'puzzle'} />
                ))}
            </Styled.ContainerDots>
            
        </Styled.Container>
    )
}