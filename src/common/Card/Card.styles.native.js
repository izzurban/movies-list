import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  display: flex;
  width:  ${(props) => {return `${props.children.props.windowWidth > 500? 110 : props.children.props.windowWidth / 3 - 15}px`}} ;
  height: ${(props) => {return `${props.children.props.windowWidth > 500? 160 : props.children.props.windowWidth / 2 - 15}px`}};
  flex-direction: row;
  align-items: center;
  background-color: #333;
  margin: 3px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const Poster = styled.Image`
  flex:1;
  align-self: center;
  height: 100%;
  margin: 0;
  border: 2px solid #000;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  elevation: 5;
  shadow-opacity: 0.25;
  shadow-radius: 4;
  shadow-color: #000;
  shadow-offset: 0 2px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #2196F3;
  border-radius: 20px;
  padding: 10px;
  elevation: 2;
`;

export const ButtonOpen = styled.TouchableOpacity`
  background-color: #F194FF;
`;

export const ButtonClose = styled.TouchableOpacity`
`;

export const TextStyle = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;
