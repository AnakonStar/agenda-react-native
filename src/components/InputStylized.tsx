import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import global from '@/styles/global';

import { textColor } from '@/styles/variables';

type InputFunction = {
    onChangeText: any,
    icon?: keyof typeof Ionicons.glyphMap,
    plcHolder: string,
    value: string,
    multiline?: boolean,
    editable?: boolean,
    label?: string,
    isPassword?: boolean,
    clearInput?: () => void,
    maxLength?: number,
    keyboardType?: any
}

export default function InputStylized(InputFunctions: InputFunction) {
    const { onChangeText, icon, plcHolder, value, multiline, editable, label, isPassword, clearInput, maxLength, keyboardType } = InputFunctions;

    const [hiddenPassword, setHiddenPassword] = React.useState(isPassword)

    React.useEffect(() => {
        setHiddenPassword(isPassword)
    }, [isPassword])

    var color = '#A6A6A6'

    return (
        <>
            {
                label
                &&
                <Text style={{ paddingLeft: 18, fontSize: 18, color: color }}>
                    {label}
                </Text>
            }
            <View style={[global.inputContainer, multiline && { flex: 1, borderRadius: 10 }]}>
                <TextInput
                    style={[global.input, multiline && { flex: 1, textAlignVertical: 'top', paddingTop: 10 }]}
                    editable={editable}
                    value={value}
                    placeholder={plcHolder}
                    placeholderTextColor={color}
                    onChangeText={onChangeText}
                    multiline={multiline}
                    secureTextEntry={hiddenPassword}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                />
                {
                    icon
                    &&
                    <>
                        {
                            isPassword
                                ?
                                <Ionicons name={hiddenPassword ? 'eye-off-outline' : 'eye-outline'} color={color} size={30} onPress={() => setHiddenPassword(!hiddenPassword)} />
                                :
                                <Ionicons name={value ? 'close' : icon} color={color} size={30} onPress={value ? clearInput : undefined} />
                        }
                    </>

                }
            </View>
        </>
    )
}