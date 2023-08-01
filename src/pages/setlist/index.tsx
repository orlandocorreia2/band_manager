import React, { useCallback, useRef, useState } from "react";
import uuid from "react-native-uuid";
import DraggableFlatList, {
  OpacityDecorator,
  ScaleDecorator,
  ShadowDecorator,
} from "react-native-draggable-flatlist";
import Animated from "react-native-reanimated";

import {
  SafeAreaView,
  Container,
  Title,
  MusicContainer,
  MusicContentTitle,
} from "./styles";

interface MusicProps {
  id: string;
  title: string;
  isDone: boolean;
}

export const SetList: React.FC = () => {
  const ref = useRef(null);
  const [data, setData] = useState([
    { id: uuid.v4().toString(), title: "End of the Beginning", isDone: false },
    { id: uuid.v4().toString(), title: "Electric Funeral", isDone: false },
    { id: uuid.v4().toString(), title: "Warning", isDone: false },
    { id: uuid.v4().toString(), title: "Children of the Sea", isDone: false },
    { id: uuid.v4().toString(), title: "Wheels of Confusion", isDone: false },
    { id: uuid.v4().toString(), title: "Snowblind", isDone: false },
    { id: uuid.v4().toString(), title: "Fairies Wear Boots", isDone: false },
    { id: uuid.v4().toString(), title: "Mr. Crowley", isDone: false },
    { id: uuid.v4().toString(), title: "War Pigs", isDone: false },
    { id: uuid.v4().toString(), title: "Stargazer", isDone: false },
    { id: uuid.v4().toString(), title: "Into The Void", isDone: false },
    { id: uuid.v4().toString(), title: "Under the Sun", isDone: false },
    { id: uuid.v4().toString(), title: "Holy Diver", isDone: false },
    { id: uuid.v4().toString(), title: "Iron Man", isDone: false },
    { id: uuid.v4().toString(), title: "Sweet Leaf", isDone: false },
    { id: uuid.v4().toString(), title: "N.I.B", isDone: false },
    { id: uuid.v4().toString(), title: "Heaven and Hell", isDone: false },
    { id: uuid.v4().toString(), title: "Paranoid", isDone: false },
    { id: uuid.v4().toString(), title: "Children of the Grave", isDone: false },
  ]);

  const handleClickMusic = useCallback((music: MusicProps) => {
    setData((items) => {
      const response: MusicProps[] = [];
      items.map((item) => {
        response.push({
          ...item,
          isDone: music.id === item.id ? !item.isDone : item.isDone,
        });
      });
      response.sort(function (a, b) {
        return a.isDone < b.isDone ? -1 : a.isDone > b.isDone ? 1 : 0;
      });
      return response;
    });
  }, []);

  const renderItem = useCallback(({ item, drag }: any) => {
    return (
      <ScaleDecorator>
        <OpacityDecorator activeOpacity={0.5}>
          <ShadowDecorator>
            <MusicContainer
              onLongPress={drag}
              activeOpacity={1}
              isDone={item.isDone}
              onPress={() => handleClickMusic(item)}
            >
              <Animated.View>
                <MusicContentTitle isDone={item.isDone}>
                  {item.title}
                </MusicContentTitle>
              </Animated.View>
            </MusicContainer>
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    );
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <Title>Liberty MC</Title>
        <DraggableFlatList
          ref={ref}
          data={data}
          keyExtractor={(item: any) => item.id}
          onDragEnd={({ data }) => setData(data)}
          renderItem={renderItem}
        ></DraggableFlatList>
      </Container>
    </SafeAreaView>
  );
};
