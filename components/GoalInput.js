import { View, TextInput, Button, Modal, StyleSheet, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {

    const [entergoal, setenterdgoal] = useState('');

    function goalinputhandler(enteredgoal) {
        setenterdgoal(enteredgoal)
    }

    function addgoalhandler() {
        props.onAddGoal(entergoal);
        setenterdgoal('');
    }

    return (
        <Modal visible={props.visible} animationType="fade">          
        <View style={styles.textinput}>
                <Image style={styles.image} source={require('../images/goals.jpg')} />
                <TextInput
                    style={styles.input}
                    placeholder='Your course goal'
                    onChangeText={goalinputhandler}
                    value={entergoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color='#FF2341' title='Add Goal' onPress={addgoalhandler} />
                    </View>
                    <View style={styles.button}>
                        <Button color='#FF2341' title='Cancel' onPress={props.onCancel}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textinput: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#E5E5E5',
        height: 50,
        width: '75%',
        padding: 5,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 20
    },
    button: {
        width: '25%',
        marginHorizontal: 10
    },
    image: {
        width: 300,
        height: 300
    }
})

export default GoalInput