import React, { useCallback, useState } from "react";
import uuid from "react-native-uuid";

import {
  SafeAreaView,
  Container,
  Title,
  FlatList,
  MusicContainer,
  MusicContentTitle,
} from "./styles";

interface MusicProps {
  id: string;
  title: string;
  isDone: boolean;
}

export const SetList: React.FC = () => {
  const [musics, setMusics] = useState([
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
    setMusics((items) =>
      items.map((item) => ({
        ...item,
        isDone: music.id === item.id ? !item.isDone : item.isDone,
      }))
    );
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <Title>Liberty MC </Title>
        <FlatList
          data={musics}
          renderItem={({ item }: any) => (
            <MusicContainer
              key={item.id}
              isDone={item.isDone}
              onPress={() => handleClickMusic(item)}
            >
              <MusicContentTitle isDone={item.isDone}>
                {item.title}
              </MusicContentTitle>
            </MusicContainer>
          )}
          keyExtractor={(item: any) => item.id}
        />
      </Container>
    </SafeAreaView>
  );
};
