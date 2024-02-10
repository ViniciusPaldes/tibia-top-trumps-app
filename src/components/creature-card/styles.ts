import {Card} from 'react-native-paper';
import styled from 'styled-components/native';

// Styled components
export const CardContainer = styled(Card)`
  margin: 10px;
  width: auto;
  flex-grow: 1;
  elevation: 4;
`;

export const CardImage = styled(Card.Cover)`
  height: 30%;
`;

export const ButtonsContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;

export const Title = styled(Card.Title)`
`;
