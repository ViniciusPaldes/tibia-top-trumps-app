import styled from 'styled-components/native';

export const Root = styled.TouchableOpacity`
  padding: 12px 16px;
  margin: 8px;
  background-color: #ffffff;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px; /* Corrected syntax for React Native */
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  elevation: 4; /* Android only */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StatsLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-right: 8px;
`;

export const Value = styled.Text`
  font-size: 15px;
  color: #666666;
  font-weight: normal;
`;
