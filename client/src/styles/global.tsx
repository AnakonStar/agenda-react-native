import { StyleSheet, StatusBar } from "react-native";

import { bgColor, contactTextColor, elColor, plcHolderColor, primaryColor, textColor } from "./variables";

const global = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: bgColor,
        paddingTop: StatusBar.currentHeight
    },

    // ContactItem

    contactItem: {
        padding: 18,
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },

    contactItemTxt: {
        fontSize: 22,
        color: contactTextColor
    },

    //ButtonStylized

    button: {
        height: 46,
        width: '100%',
        backgroundColor: primaryColor,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 10
    },
    buttonTxt: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF'
    },

    //IconButton

    iconButton: {
        padding: 20,
        backgroundColor: primaryColor,
        borderRadius: 100,
        position: 'absolute',
        bottom: 50,
        right: 30,
        zIndex: 1
    },

    //InputStylized

    inputContainer: {
        height: 50,
        paddingHorizontal: 18,
        backgroundColor: elColor,
        borderRadius: 100,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

    input: {
        flex: 1,
        height: '100%',
        color: textColor,
        fontSize: 18
    },

    //User or Contact Header

    headerContainer: {
        paddingHorizontal: 11,
        height: 75,
        width: '100%',
        backgroundColor: primaryColor,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    headerContainerName: {
        color: '#FFF',
        fontSize: 22,
        flex: 1,
    },

    headerContainerPhoto: {
        width: 55,
        height: 55,
        borderRadius: 100,
        backgroundColor: '#FFF',
        elevation: 5
    },

});

export default global;