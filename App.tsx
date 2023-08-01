import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { DrawerContent } from "./src/components/DrawerContent";
import { useKeepAwake } from "expo-keep-awake";
import { ScheduleShow } from "./src/pages/ScheduleShow";
import { SetList } from "./src/pages/setlist";

const Drawer = createDrawerNavigator();

export default function App() {
  useKeepAwake();
  return (
    <>
      <StatusBar backgroundColor="#35363a" />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
          }}
          drawerContent={(props: any) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="ScheduleShow" component={ScheduleShow} />
          <Drawer.Screen name="SetList" component={SetList} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
