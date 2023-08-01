import { css } from "styled-components";
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

interface MusicItemProps {
  isDone: boolean;
}

export const MusicContainer = styled.TouchableOpacity<MusicItemProps>`
  background: rgba(32, 33, 36, 1);
  ${({ isDone }) =>
    isDone &&
    css`
      background: rgba(32, 33, 36, 0.5);
    `}
  width: 100%;
  padding: 16px;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 12px;
`;

export const MusicContentTitle = styled.Text<MusicItemProps>`
  font-size: 32px;
  color: ${({ isDone }) => (isDone ? "#555555" : "#cccccc")};
  font-weight: bold;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;
