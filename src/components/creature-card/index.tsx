import React from 'react';
import {ButtonsContainer, CardContainer, CardImage, Title} from './styles';
import {StatsButton} from '../stats-button';
import {useNavigation} from '@react-navigation/native';
import {CreatureCardProps} from './props';

const CreatureCard: React.FC<CreatureCardProps> = ({imageUrl}) => {
  const navigation = useNavigation();

  const handleStatsClick = (stats: string) => {
    console.log('Touched at stats: ', stats);
    navigation.navigate('Result');
  };

  return (
    <CardContainer>
      <CardImage source={{uri: imageUrl}} resizeMode="contain" />
      <Title title="Nome da criatura" />
      <ButtonsContainer>
        <StatsButton
          stats="HP"
          handleClick={() => handleStatsClick('HP')}
          value={100}
        />
        <StatsButton
          stats="XP"
          handleClick={() => handleStatsClick('XP')}
          value={100}
        />
        <StatsButton
          stats="Charm"
          handleClick={() => handleStatsClick('Charm')}
          value={100}
        />
        <StatsButton
          stats="Difficulty"
          handleClick={() => handleStatsClick('Difficulty')}
          value={100}
        />
      </ButtonsContainer>
    </CardContainer>
  );
};

export default CreatureCard;
