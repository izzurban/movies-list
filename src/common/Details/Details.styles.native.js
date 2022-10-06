import styled from "styled-components/native";

export const FavouriteIcon = styled.View`
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const View = styled.View`
flex:1;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: ${(props) => {return `${props.windowWidth < 500? '100%' : '70%' }`}};
margin: 0;
flex-wrap: wrap;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: ${(props) => {return `${props.windowWidth > 500? 'space-between' : 'center' }`}};
  align-items: center;
  width: 100%;
  margin: 0;
  flex-wrap: wrap;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const Poster = styled.Image`
  align-self: center;
  justify-content: center;
  width: ${(props) => {return `${props.windowWidth < 500? props.windowWidth/1.5 : props.windowHeight/2.1 }px`}};
  height: ${(props) => { return `${props.windowWidth < 500? props.windowWidth : props.windowHeight/1.5}px` }};
  margin: 5px;
  border: 1px solid #fff;
`;

export const ContainerTransparent = styled.View`
  flex: 1;
  width:  100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 0px;
`;

export const ModalView = styled.View`
  flex: 1;
  margin: 30px;
  background-color: #fafafa;
  border-radius: 15px;
  padding: 15px;
  align-items: center;
  elevation: 5;
  shadow-opacity: 0.25;
  shadow-color: #000;
  shadow-offset: 0 2px;
  flex-wrap: wrap;
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
  margin: 0 6px 2px;
  text-align: center;
`;
