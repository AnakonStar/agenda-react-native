import { StyleSheet } from "react-native";

import { bgColor, contactTextColor, primaryColor } from "@/styles/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
    },

    userContainer: {
        padding: 10,
        backgroundColor: primaryColor,
        flexDirection: 'row',
        alignItems: 'center'
    },

    userPhoto: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#FFF'
    },

    userTxt: {
        color: '#FFF',
        paddingLeft: 10,
        fontSize: 22
    },

    warningTxt: {
        fontSize: 18,
        color: contactTextColor,
        textAlign: 'center',
        paddingTop: 15
    }
});

export default styles;