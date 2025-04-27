import { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import GoalInput from "@components/GoalInput";
import GoalItem from "@components/GoalItem";

const generateRandomKey = () => Math.random().toString(36).substr(2, 9);

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goalText) => {
    setGoals((prevGoals) => [
      { text: goalText, key: generateRandomKey() },
      ...prevGoals,
    ]);
  };

  const deleteGoal = (key) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.key !== key));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem
              text={item.text}
              onDeleteItem={deleteGoal.bind(this, item.key)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
