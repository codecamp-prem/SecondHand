import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
//import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

//import defaultStyles from "../config/styles";

function AppNativePicker({ selectOptions, onSelectItem }) {
  const [selectedOption, setSelectedOption] = useState(selectOptions[0].value);
  return (
    // <View style={styles.container}>
    <View>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedOption(itemValue);
          onSelectItem(itemValue);
        }}
      >
        {selectOptions.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
        {/* <Picker.Item label="Java" value="java" /> */}
      </Picker>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: defaultStyles.colors.light,
//     borderRadius: 25,
//     flexDirection: "row",
//     width: "100%",
//     padding: 15,
//     marginVertical: 10,
//   },
// });
export default AppNativePicker;
