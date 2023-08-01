import React, { useCallback } from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

import {
  SafeAreaView,
  Container,
  MenuItemsContainer,
  MenuItemContainer,
  MenuItemButton,
  MenuItemButtonText,
} from "./styles";

export const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const handleMenu = useCallback(
    (page: string) => {
      navigation.navigate(page);
    },
    [navigation]
  );

  return (
    <SafeAreaView>
      <Container>
        <MenuItemsContainer>
          <MenuItemContainer>
            <MenuItemButton onPress={() => handleMenu("ScheduleShow")}>
              <MenuItemButtonText>AGENDA</MenuItemButtonText>
            </MenuItemButton>
          </MenuItemContainer>
          <MenuItemContainer>
            <MenuItemButton onPress={() => handleMenu("SetList")}>
              <MenuItemButtonText>SET LIST</MenuItemButtonText>
            </MenuItemButton>
          </MenuItemContainer>
        </MenuItemsContainer>
      </Container>
    </SafeAreaView>
  );
};
