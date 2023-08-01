import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding: 40px 16px;
  background: #35363a;
`;

export const Container = styled.View`
  width: 100%;
`;

export const MenuItemsContainer = styled.View`
  margin-top: 40px;
  width: 100%;
`;

export const MenuItemContainer = styled.View`
  margin: 8px 0;
  width: 100%;
  border: 1px solid #555555;
  border-radius: 6px;
  padding: 8px 16px;
`;

export const MenuItemButton = styled.TouchableOpacity`
  width: 100%;
`;

export const MenuItemButtonText = styled.Text`
  color: #ffffff;
  font-size: 24px;
`;
