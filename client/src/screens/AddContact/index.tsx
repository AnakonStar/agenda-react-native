import * as React from 'react';
import { Alert, Text, View } from 'react-native';

import styles from './styles';
import global from '@/styles/global';
import { ButtonStylized, InputStylized } from '@/components/_router';
import { Ionicons } from '@expo/vector-icons';
import { primaryColor } from '@/styles/variables';
import { useNavigation } from '@react-navigation/native';
import { addContato } from '@/components/BdFunction';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export default function AddContact() {
    const navigation = useNavigation()

    const [name, setName] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const [tel, setTel] = React.useState<string>('')

    //Estudar melhor esta função

    const emailValidation = (email: string): boolean => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    //

    const handleAddContact = () => {
        if (name === '' || email === '' || tel === '' || tel.length < 11 || !emailValidation(email)) {
            Alert.alert('Aviso', 'Insira os dados corretamente')
        } else {
            addContato(name, email, tel)
            setName('')
            setEmail('')
            setTel('')
            showMessage({
                message: 'Contato adicionado com sucesso',
                type: 'info',
                icon: 'info',
                backgroundColor: primaryColor,
            })
        }

    }

    return (
        <>
            <View style={styles.container}>
                <FlashMessage position={'bottom'} />
                <Ionicons onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 10, left: 10 }} name='arrow-back' size={35} color={primaryColor} />
                <Text style={styles.title}>
                    Adicionar um novo contato
                </Text>
                <InputStylized onChangeText={(t: string) => setName(t)} value={name} plcHolder='Nome' clearInput={() => setName('')} icon='person' />
                <InputStylized onChangeText={(t: string) => setEmail(t)} value={email} plcHolder='Email' clearInput={() => setEmail('')} icon='mail' />
                <InputStylized onChangeText={(t: string) => setTel(t)} value={tel} plcHolder='Telefone' clearInput={() => setTel('')} maxLength={11} keyboardType='phone-pad' icon='call' />
                <ButtonStylized plcHolder='Adicionar contato' onPress={handleAddContact} />
            </View>
        </>
    )
}