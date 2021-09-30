import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';

export const TextComponent = ({ children, textColor = 'blue' }) => {
  return <Styled.Container textColor={textColor} dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  textColor:P.node.isRequired,
};