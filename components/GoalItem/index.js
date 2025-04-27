import { View, Text, StyleSheet } from "react-native";

const GoalItem = ({ text }) => (
  <View style={styles.goalItemContainer}>
    <Text style={styles.goalItem}>{text}</Text>
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
  },
});

export default GoalItem;
