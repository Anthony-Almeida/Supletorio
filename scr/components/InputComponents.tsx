import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from '../Theme/appTheme';

interface Props {
    placeholder: string;
    handleSetValues: (name: string, value: string) => void;
    name: string;
    
}


export const InputComponents = ({ placeholder, handleSetValues, name }: Props) => {

    return (
        <View style={styles.cajaPrincipal}>
            <TextInput
                placeholder={placeholder}
                keyboardType='number-pad'
                onChangeText={(value) => handleSetValues(name, value)}
                style={styles.inputNum}
            />
        </View>
    )
}