import { TextComponent } from '.';
import React from 'react';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Esse é o componente de texto do Tiago versão 1.0.
    Contém apenas responsividade e opção de troca de cor
    Esse é o componente de texto do Tiago versão 1.0.
    Contém apenas responsividade e opção de troca de cor.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};