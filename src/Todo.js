 import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";


function Todo({todo}){
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={}>
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    todo:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
});


export default Todo;