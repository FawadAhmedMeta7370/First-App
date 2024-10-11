
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [coursegoals, setcoursegoals] = useState([])
  const [index, setindex] = useState(1)

  function startGoalHandler() {
    console.log('PPPPPressed!!!!!');
    setModalIsVisible(true)
  }

  function endGoalHandler() {
    setModalIsVisible(false)
  }

  function addgoalhandler(entergoal) {
    setcoursegoals((currentcoursegoals) => [
      ...currentcoursegoals,
      { text: entergoal, id: Math.random().toString(), n: index },
    ])
    endGoalHandler();
  }

  function deleteGoalHandler(id) {
    console.log("deleted!");
    setcoursegoals(currentcoursegoals => {
      return currentcoursegoals.filter((goals) => goals.id !== id)
    })
  }

  return (
    <View style={styles.appcontainer} >

      <View style={styles.Button}>
        <Button
          color='#FF2341'
          title='Add New Goal'
          onPress={startGoalHandler}
        />
      </View>

      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addgoalhandler}
        onCancel={endGoalHandler} />

      <View style={styles.goals}>
        <FlatList
          data={coursegoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                index={itemData.index + 1}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 15,
    flexDirection: 'column',
    backgroundColor: '#E5E5E5'
  },
  goals: {
    justifyContent: 'space-around',
    paddingBottom: 100,
    padding: 10
  },
  Button: {
    marginTop: '25%'
  }
});

export default App;