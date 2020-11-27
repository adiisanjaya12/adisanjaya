import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors } from '../../../utils';

const Input = ({placeholder, ...rest}) => {
    return ( 
    <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        placeholderTextColor={Colors.default}
        {...rest}
        />
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.default ,
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal:13,
        fontSize: 10,
        color: colors.default,
    },
});
