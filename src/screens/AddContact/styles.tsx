import { StyleSheet } from "react-native";

import { bgColor, textColor } from "@/styles/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
        padding: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        color: textColor,
        paddingBottom: 20
    }
});

export default styles;