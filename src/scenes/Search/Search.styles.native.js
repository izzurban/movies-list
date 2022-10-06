import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding: 10px 0px 20px;
`;

export const Icon = styled.TouchableOpacity`
  border-radius: 20px;
  poition: absolute;
  left: -25px;
  top: 10px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 17px;
  margin: 0 6px 15px;
  text-align: center;
`;

export const ViewTextImput = styled.View`
flex-direction: row;
background-color: #fff;
justify-content: center;
align-self: center;  
margin-vertical: 10px;
width: 95%;
height: 50px;
position: absolute;
bottom: 0px;
elevation: 10;
shadow-opacity: 0.25;
shadow-color: #000;
shadow-offset: 0 2px;
border-radius: 5px;
`;

export const TextInput = styled.TextInput`
border-radius: 10px;
padding: 12px 25px 12px;
align-items: center;
width: 95%;
font-size: 17px;
`;

export const LoadingContainer = styled.View`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
flex-direction: column;
align-items: center;
`;