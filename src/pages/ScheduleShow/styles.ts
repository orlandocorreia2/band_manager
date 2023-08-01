import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  align-items: center;
  padding: 8px;
  background: #35363a;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-top: 40px;
  color: #cccccc;
  font-weight: bold;
  margin-bottom: 12px;
`;
