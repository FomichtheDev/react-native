import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";


function TodoAdd({ onSubmit }){
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value);
            setValue('');
        }
        else{
            //error
            Alert.alert('Тудушка пустая!')
        }

    };

    return(
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Введите тудушку'
                autoCorrect={false}
                autoCapitilize='none'
            />
            <Button style={styles.add} title='Add' onPress={pressHandler} />
        </View>
    )

}


export default TodoAdd;

const styles = StyleSheet.create({
   wrapper:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 15

   },
    input:{
       width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }

});