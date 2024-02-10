import React from 'react';
import CreatureCard from '../../components/creature-card';
import {Root} from './styles';

function DrawScreen() {
  return (
    <Root>
      <CreatureCard imageUrl="https://www.tibiawiki.com.br/images/e/e8/Abyssal_Calamary.gif" />
    </Root>
  );
}

export default DrawScreen;
