import * as React from 'react';
import { View, Text, FlatList } from 'react-native';

import global from '@/styles/global';
import styles from './styles';
import { ContactItem, IconButton } from '@/components/_router';
import { Feather } from '@expo/vector-icons';
import { elColor } from '@/styles/variables';
import { ButtonStylized } from '@/components/_router';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackTypes } from '@/routes';
import { Contacts } from "models/contacts";
import { fetchContatos } from '@/components/BdFunction';

export default function Home() {
    const navigation = useNavigation<StackTypes>();
    const isFocused = useIsFocused();
    const [contacts, setContacts] = React.useState<Contacts[]>([])

    React.useEffect(() => {
        fetchContatos(setContacts)
    }, [isFocused])

    return (
        <View style={styles.container}>
            <View style={global.headerContainer}>
                <View style={global.headerContainerPhoto} />
                <Text style={global.headerContainerName}>
                    Username
                </Text>
            </View>
            {
                contacts.length
                    ?
                    <>
                        <IconButton icon='add' onPress={() => navigation.navigate('AddContact')} />
                        <FlatList
                            data={contacts}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <ContactItem id={item.id.toString()} nome={item.nome} email={item.email} telefone={item.telefone} />
                            )} />
                    </>
                    :
                    <View style={{ flex: 1, padding: '5%', alignItems: 'center', justifyContent: 'center', gap: 15 }}>
                        <Feather name='user-plus' size={150} color={elColor} />
                        <Text style={styles.warningTxt}>
                            Não há contatos para mostrar, tente adicionar um!
                        </Text>
                        <ButtonStylized plcHolder='Adicionar contato' onPress={() => navigation.navigate('AddContact')} />
                    </View>
            }

        </View>

    )
}

// type userType = {
//     name: string,
//     age: number,
//     email: string
// }

// const [user, setUser] = React.useState<userType>({
//     name: 'John',
//     age: 30,
//     email: 'john@example.com'
// });

// const [history, setHistory] = React.useState<userType[]>([]);

// const handleChangeName = () => {
//     const newName = 'Teste'
//     if (newName) {
//         const newUser = { ...user, name: newName };
//         setUser(newUser);
//         // Salvando o estado anterior no histórico
//         setHistory(prevHistory => [...prevHistory, user]);
//     }
// };

// const handleUndo = () => {
//     if (history.length > 0) {
//         const previousUser = history[history.length - 1];
//         setUser(previousUser);
//         // Removendo o estado revertido do histórico
//         setHistory(prevHistory => prevHistory.slice(0, -1));
//     }
// };

// <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>User Info</Text>
//             <Text>Name: {user.name}</Text>
//             <Text>Age: {user.age}</Text>
//             <Text>Email: {user.email}</Text>
//             <Button title="Change Name" onPress={handleChangeName} />
//             <Button title="Undo" onPress={handleUndo} />
//         </View>