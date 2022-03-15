import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import FloatingLabelInput from "./src/index";

export default function App() {
  const [inputValueName, setInputValueName] = useState<string>("");
  const [inputValueLastname, setInputValueLastname] = useState<string>("");
  const [inputValuePhone, setInputValuePhone] = useState<string>(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently w"
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FloatingLabelInput
          onChangeText={(text) => setInputValueName(text)}
          value={inputValueName}
          label={
            <Text>
              Nom <Text style={styles.asteriskContainer}>*</Text>
            </Text>
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <FloatingLabelInput
          onChangeText={(text) => setInputValueLastname(text)}
          value={inputValueLastname}
          label={
            <Text>
              Prénom <Text style={styles.asteriskContainer}>*</Text>
            </Text>
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <FloatingLabelInput
          onChangeText={(text) => setInputValuePhone(text)}
          value={inputValuePhone}
          multiline={true}
          numberOfLines={4}
          label={
            <Text>
              Téléphone multiligne dsfsfdssfdssdfsdfds{" "}
              <Text style={styles.asteriskContainer}>*</Text>
            </Text>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  asteriskContainer: {
    color: "red",
  },
  inputContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
