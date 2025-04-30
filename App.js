import { useState } from "react";
import { View, FlatList, StyleSheet, Button, StatusBar } from "react-native";
import GoalInput from "@components/GoalInput";
import GoalItem from "@components/GoalItem";

const generateRandomKey = () => Math.random().toString(36).substr(2, 9);

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };

  const endAddGoalHandler = () => {
    setIsModalVisible(false);
  };

  const addGoal = (goalText) => {
    setGoals((prevGoals) => [
      { text: goalText, key: generateRandomKey() },
      ...prevGoals,
    ]);
    endAddGoalHandler();
  };

  const deleteGoal = (key) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.key !== key));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add New Goal"
            color="#a065ec"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          onAddGoal={addGoal}
          visible={isModalVisible}
          onCancel={endAddGoalHandler}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
