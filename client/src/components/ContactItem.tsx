import * as React from 'react';

import { View, Text, Touchable, TouchableOpacity, TouchableHighlight } from 'react-native';

import global from '@/styles/global';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '@/routes';

export default function ContactItem(contact: { nome: string, email: string, telefone: string, id: string }) {
    const navigation = useNavigation<StackTypes>()

    // , { nome: contact.nome, email: contact.email, telefone: contact.telefone, id: contact.id }

    return (
        <TouchableHighlight style={global.contactItem} onPress={() => navigation.navigate('ContactOpen', { nome: contact.nome, email: contact.email, telefone: contact.telefone, id: contact.id })} underlayColor={'#DDD'}>
            <Text style={global.contactItemTxt}>
                {contact.nome}
            </Text>
        </TouchableHighlight>
    )
}