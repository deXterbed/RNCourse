import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteItem }) => (
  <View style={styles.goalItemContainer}>
    <Pressable
      onPress={onDeleteItem}
      android_ripple={{ color: "#dddddd" }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalItem}>{text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItem: {
    color: "#fff",
    padding: 8,
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
