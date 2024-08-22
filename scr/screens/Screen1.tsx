import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { IMAGEN_FONDO } from '../common/constTheme.'

interface Props extends StackScreenProps<any, any> { };

export const Screen1 = ({ navigation }: Props) => {
    return (
        <View style={styles.contenedor}>
            <StatusBar />
            <Image style={styles.fondoInicio} source={{ uri: IMAGEN_FONDO }} />
            <View style={styles.contenedorInicio}>
                <Text style={styles.textBien}>Bienvenido</Text>
            </View>
            <View style={styles.contenedorAcceder}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Screen2')}>
                    <Text style={styles.textb}>Acceder</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}