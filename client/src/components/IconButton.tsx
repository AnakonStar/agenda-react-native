import * as React from 'react';

import global from '@/styles/global';

import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type IconFunction = {
    onPress?: () => void,
    icon: keyof typeof Ionicons.glyphMap
}

export default function IconButton(functions: IconFunction) {
    return (
        <TouchableOpacity style={global.iconButton} onPress={functions.onPress} activeOpacity={0.8}>
            <Ionicons name={functions.icon} size={30} color={'#FFF'} />
        </TouchableOpacity>
    )
}