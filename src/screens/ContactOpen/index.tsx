import * as React from 'react';
import { Alert, Keyboard, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import global from '@/styles/global';
import { Ionicons } from '@expo/vector-icons';
import { primaryColor, textColor } from '@/styles/variables';

import { StackRoute, StackTypes } from '@/routes';
import { useNavigation, useRoute } from '@react-navigation/native';
import InputStylized from '@/components/InputStylized';
import ButtonStylized from '@/components/ButtonStylized';
import { deleteContato, editContato } from '@/components/BdFunction';

import FlashMessage, { showMessage } from 'react-native-flash-message';

export default function ContactOpen() {
    const navigation = useNavigation<StackTypes>()
    const route = useRoute<StackRoute>();

    const nome = route.params?.nome;
    const email = route.params?.email;
    const telefone = route.params?.telefone;
    const id = route.params?.id;

    const [isToEdit, setIsToEdit] = React.useState<boolean>(false);

    const [isKeyboardVisible, setKeyboardVisible] = React.useState<boolean>(false);

    const [newName, setNewName] = React.useState<string>(nome);
    const [newEmail, setNewEmail] = React.useState<string>(email);
    const [newTel, setNewTel] = React.useState<string>(telefone);

    //Estudar melhor estas funções

    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const emailValidation = (email: string): boolean => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    //

    function handleEdit() {
        if (newName === '' || newEmail === '' || newTel === '' || newTel.length < 11 || !emailValidation(newEmail)) {
            Alert.alert('Aviso', 'Insira os dados corretamente')
        } else {
            editContato(newName, newEmail, newTel, id)
            showMessage({
                message: 'Contato alterado com sucesso',
                type: 'info',
                icon: 'info',
                backgroundColor: primaryColor,
            })
            setIsToEdit(false)
        }
    }

    function handleEditBtn() {
        setIsToEdit(!isToEdit)
        if (isToEdit === true) {
            setIsToEdit(false)
            setNewEmail(email)
            setNewName(nome)
            setNewTel(telefone)
        }
    }

    function handleDelete() {
        Alert.alert('Aviso', 'Deseja mesmo excluir este contato?', [
            {
                text: 'Sim',
                onPress: () => deleteContato(id).then(() => {
                    navigation.navigate('Home')
                    Alert.alert('Aviso', 'Contato excluído com sucesso')
                })
            },
            {
                text: 'Não'
            }
        ])
    }

    return (
        <View style={styles.mainContainer}>
            <FlashMessage position={'bottom'} />
            <View style={global.headerContainer}>
                <Ionicons onPress={() => navigation.goBack()} name='arrow-back' size={33} color={'#FFF'} />
                {!isToEdit && <View style={global.headerContainerPhoto} />}
                <Text style={global.headerContainerName} ellipsizeMode='tail' numberOfLines={1}>
                    {isToEdit ? 'Editar contato' : newName}
                </Text>
            </View>
            <View style={styles.container}>
                {
                    isToEdit
                        ?
                        <>
                            <InputStylized plcHolder='Nome' icon='person' clearInput={() => setNewName('')} value={newName} onChangeText={(t: string) => setNewName(t)} />
                            <InputStylized plcHolder='Email' icon='mail' clearInput={() => setNewEmail('')} value={newEmail} onChangeText={(t: string) => setNewEmail(t)} />
                            <InputStylized plcHolder='Telefone' icon='call' clearInput={() => setNewTel('')} value={newTel} onChangeText={(t: string) => setNewTel(t)} maxLength={11} keyboardType='phone-pad' />
                            <ButtonStylized plcHolder='Editar' onPress={handleEdit} />
                        </>
                        :
                        <>
                            <Text style={{ fontSize: 20 }}>
                                Informações para contato
                            </Text>
                            <View style={styles.contactData}>
                                <Ionicons name='mail' size={33} color={textColor} />
                                <Text style={styles.contactDataTxt}>
                                    {newEmail}
                                </Text>
                            </View>
                            <View style={styles.contactData}>
                                <Ionicons name='call' size={33} color={textColor} />
                                <Text style={styles.contactDataTxt}>
                                    {newTel}
                                </Text>
                            </View>
                        </>
                }

            </View>
            {!isKeyboardVisible &&
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.8} onPress={handleDelete}>
                        <Ionicons name='trash' size={30} color={'#FFF'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.8} onPress={handleEditBtn}>
                        <Ionicons name={isToEdit ? 'close' : 'pencil'} size={30} color={'#FFF'} />
                    </TouchableOpacity>
                </View>
            }
        </View >
    )
}