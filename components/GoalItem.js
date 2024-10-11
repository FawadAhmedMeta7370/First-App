import { View, Text, StyleSheet, Pressable } from "react-native";
import { color } from "react-native-elements/dist/helpers";

function GoalItem(props) {

    function check() {
        if (props.index % 2 === 0) {
            return { backgroundColor: 'black', color: 'white', borderRadius: 7.5}
        }
        else {
            return { backgroundColor: 'white', color: 'black', borderRadius: 7.5}
        }
    }

    return (
        <View style={styles.goalitems}>
            <Pressable android_ripple={{ color: 'grey' }} onPress={() => props.onDeleteItem(props.id)}>
                <View backgroundColor={check(props.index)}>
                        <Text style={[styles.goalText , backgroundColor=(check(props.index)) ]}>
                            {props.index} . {props.text}
                        </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalitems: {
        backgroundColor: '#FACAFF',
        borderRadius: 7.5,
        borderWidth: 1,
        margin: 8
    },
    goalText: {
        padding: 8
    }
})