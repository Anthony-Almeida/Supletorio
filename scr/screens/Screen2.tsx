import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { InputComponents } from '../components/InputComponents';
import { styles } from '../Theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

interface Form {
    nombre: string;
    correo: string;
    comentarios: string;
}
interface Props extends StackScreenProps<any, any> { };

export const Screen2 = ({ navigation }: Props) => {

    const [form, setForm] = useState<Form>({
        nombre: '',
        correo: '',
        comentarios: '',
    });

    const [resultado, setResultado] = useState<number>(0);

    const handleSetValues = (name: string, value: string) => {
        setForm({ ...form, [name]: value })
        console.log(name);
        console.log(value);
    }
    const handleSignUp = () => {
        //Validar que los campos se encuentren llenos
        if (!form.nombre || !form.correo || !form.comentarios) {
            //Mensaje de aviso
            Alert.alert(
                "Error",
                "Por favor, completar todos los campos!"
            );
            return;
        }
        console.log(form);
    }


    return (
        <View style={styles.contenedor}>
            <Text style={styles.textBien}>Formulario</Text>
            <View style={styles.etiqueta}>
                <InputComponents placeholder='nombre' handleSetValues={handleSetValues} name='nombre' />
                <InputComponents placeholder='correo' handleSetValues={handleSetValues} name='correo' />
                <InputComponents placeholder='comentario' handleSetValues={handleSetValues} name='comentario' />
            </View>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Screen3')}>
            <Text style={styles.textb}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}