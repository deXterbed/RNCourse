import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText.trim()) {
      onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("@assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});

export default GoalInput;
