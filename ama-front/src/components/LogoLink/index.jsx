import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import React from 'react';



export const LogoLink = ({ text, srcImg = '' , link , size = 'huge'}) => {
    return (
        <Heading size="small" uppercase>
            <Styled.Container 
                href={link} 
                size={size}
            >
                {srcImg ? <img src={srcImg} alt={text} />
                 : 
                 <span>{text}</span>}
            </Styled.Container>
        </Heading>
    );
};

LogoLink.propTypes = {
    text: P.string.isRequired,
    srcImg: P.string,
    link: P.string.isRequired,
    size: P.oneOf(['small', 'medium', 'large', 'xlarge', 'huge', 'xhuge']),
};