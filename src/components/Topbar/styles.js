import styled from 'styled-components/native';

const style = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.30,
  shadowRadius: 4.65,
  elevation: 8,
}

export const Container = styled.View`
  padding: 20px;
  align-items: center;
  background: #fa7346;

  ${style}
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #FFF;
`;
