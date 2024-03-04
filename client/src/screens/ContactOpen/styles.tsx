import { StyleSheet } from "react-native";

import { bgColor, primaryColor, textColor } from "@/styles/variables";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: bgColor,
        justifyContent: 'space-between'
    },

    container: {
        flex: 1,
        padding: '5%'
    },

    contactData: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        gap: 10
    },

    contactDataTxt: {
        fontSize: 23,
        color: textColor,
        flex: 1
    },

    contactContainer: {
        padding: 11,
        width: '100%',
        backgroundColor: primaryColor,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    contactContainerName: {
        color: '#FFF',
        fontSize: 22,
        flex: 1,
    },

    contactContainerPhoto: {
        width: 55,
        height: 55,
        borderRadius: 100,
        backgroundColor: '#FFF'
    },

    iconContainer: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'flex-end',
        padding: 20
    },

    iconButton: {
        padding: 20,
        backgroundColor: primaryColor,
        borderRadius: 100,
        elevation: 5
    },
});

export default styles;