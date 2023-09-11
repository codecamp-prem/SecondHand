import React, { useState } from "react";
import { View } from "react-native";
//import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

function AppNativePicker({ selectOptions }) {
  const [selectedOption, setSelectedOption] = useState(selectOptions[0].value);
  return (
    <View>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
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
export default AppNativePicker;
