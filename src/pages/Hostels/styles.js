import styled from 'styled-components/native';

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.30,
  shadowRadius: 4.65,
  elevation: 4,
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f2f2f2;
`;

export const Footer = styled.View`
  padding: 0 20px;
  border-top-width: 1;
  border-color: #CED0CE;
`

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})``

export const CityContainer = styled.View`
  height: 40px;
  background: #FFF;
  align-items: center;
  justify-content: center;

  ${shadow}

`;

export const CityText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;
