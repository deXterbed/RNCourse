import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GoalItem = ({ text, onDeleteItem, id }) => (
  <View style={styles.goalItemContainer}>
    <Text style={styles.goalItem}>{text}</Text>
    <Pressable
      onPress={onDeleteItem}
      style={styles.deleteButton}
      android_ripple={{ color: "#fff3" }}
    >
      <Ionicons name="trash" size={22} color="white" />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goalItem: {
    color: "#fff",
    fontSize: 16,
  },
  deleteButton: {
    padding: 8,
    borderRadius: 16,
  },
});

export default GoalItem;
