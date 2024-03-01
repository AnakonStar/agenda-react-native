import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text, View, TouchableOpacity } from 'react-native';

import global from '@/styles/global';

import { plcHolderColor } from '@/styles/variables';

type ButtonFunctions = {
    flex?: boolean,
    plcHolder: string,
    onPress?: () => void,
    disabled?: boolean,
    onLongPress?: () => void,
    icon?: keyof typeof Ionicons.glyphMap
}

export default function ButtonStylized(ButtonFunctions: ButtonFunctions) {
    const { flex, plcHolder, onPress, disabled, onLongPress, icon } = ButtonFunctions;

    return (
        <TouchableOpacity onLongPress={onLongPress} style={[global.button, flex && { flex: 1 }]} activeOpacity={0.7} onPress={onPress} disabled={disabled}>
            <View style={global.buttonView}>
                <Text style={global.buttonTxt}>
                    {plcHolder}
                </Text>
                {
                    icon
                    &&
                    <Ionicons name={icon} size={30} color={'#FFF'} />
                }
            </View>
        </TouchableOpacity>
    )
}