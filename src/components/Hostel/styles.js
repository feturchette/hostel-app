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
  margin: 15px 30px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  min-height: 300px;

  ${style}
`;

export const Banner = styled.Image`
  width: 300px;
  height: 150px;
  border-radius: 4px;
`;

export const Info = styled.View`
  margin: 0px 30px 10px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const Value = styled.Text`
  font-weight: bold;
  margin-left: 30px;
  font-size: 18px;
  color: #333;
`;

export const SmallText = styled.Text`
  margin-top: 4px;
  font-size: 13px;
  color: #999;
  text-align: justify;
`;

export const Rate = styled.Text`
  font-weight: bold;
  color: #FFF;
  font-size: 18px;
  height: 30px;
  max-width: 45px;
  padding: 5px 5px;
  background: #fa7346;
  border-radius: 4px;
  line-height: 20px;
`

export const New = styled.Text`
  position: absolute;
  top: 0;
  left: 0;

  font-weight: bold;
  color: #FFF;
  font-size: 16px;
  height: 30px;
  max-width: 45px;
  padding: 5px 5px;
  background: #fa7346;
  border-radius: 4px;
  line-height: 20px;
`

export const Featured = styled.Text`
  position: absolute;
  top: -10px;
  right: -6px;

  font-weight: bold;
  color: #FFF;
  font-size: 14px;
  height: 30px;
  max-width: 90px;
  padding: 5px 5px;
  background: #e62364;
  border-radius: 4px;
  line-height: 20px;
`

export const SameLine = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
