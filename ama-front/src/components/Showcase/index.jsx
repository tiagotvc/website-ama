import React , {useRef} from 'react';
import * as Styled from './styles';
import camiseta from './camiseta.jpg'
import caneca from './caneca.jpg';
import camisa_mae from './camiseta_mae.jpg';
import colar from  './colar.jpg'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

export default function ShowCase(){
    const carousel = useRef(null);

    let data = [
        { id: 1, image: camiseta},
        { id: 2, image: caneca},
        { id: 3, image: camisa_mae},
        { id: 4, image: colar},
        { id: 5, image: camiseta},
        { id: 6, image: camisa_mae},
        { id: 7, image: camiseta},
        { id: 8, image: camiseta},
        { id: 9, image: camiseta},
        { id: 10, image: camiseta},
        { id: 11, image: camiseta},
        { id: 12, image: camiseta},
        { id: 13, image: camiseta},
        { id: 14, image: camiseta},

    ]

    const handlerLeftClick = (e) =>  {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handlerRightClick = (e) =>  {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };


    return (
        <>
        <Styled.Showcase>
            <div className="name"><span>Lançamentos</span></div>
            <Styled.Container>
                
                <IoMdArrowDropleft className="previous"onClick={handlerLeftClick}/>
                    <Styled.Carousel ref={carousel}>
                        {data.map((card) => (
                            <div className="item" key={card.id}>
                                <div className="badge">
                                    <span className="badge_content">Camisetas</span>
                                </div>
                                <div className="image">
                                        <img src={card.image} alt="shoe"/>
                                </div>
                                <div className="info">
                                    <div className="product_name">
                                        <span>Camiseta nova</span>
                                    </div>
                                    <div className="prices">
                                        <span className="price">R$ 10,00</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Styled.Carousel>
                <IoMdArrowDropright className="next" onClick={handlerRightClick}/>
            </Styled.Container>
        </Styled.Showcase>
        
            
        </>
    )
}