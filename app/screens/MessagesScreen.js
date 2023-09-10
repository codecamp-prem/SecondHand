import React, { useState } from "react";
import { FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMsgs = [
  {
    id: 1,
    title: "T01",
    description: "D01",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T02",
    description: "D02",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [msgs, setMsgs] = useState(initialMsgs);
  const handleDelete = (message) => {
    setMsgs(msgs.filter((m) => m.id != message.id));
  };
  return (
    <Screen>
      <FlatList
        data={msgs}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => alert(item.title + " - " + item.description)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

export default MessagesScreen;
