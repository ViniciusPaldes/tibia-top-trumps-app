import React from 'react';
import {Root, StatsLabel, Value} from './styles';
import {StatsButtonProps} from './props';

const StatsButton: React.FC<StatsButtonProps> = ({
  stats,
  value,
  handleClick,
}) => {
  return (
    <Root onPress={handleClick}>
      <StatsLabel>{stats}:</StatsLabel>
      <Value>{value}</Value>
    </Root>
  );
};

export {StatsButton};
