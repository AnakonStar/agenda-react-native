import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Contacts, UseContact } from "models/contacts";
import { Home, AddContact, ContactOpen } from "./screens/_router";
import { RouteProp } from "@react-navigation/native";

type StackNavigation = {
    Home: undefined;
    AddContact: undefined;
    ContactOpen: UseContact
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>
export type StackRoute = RouteProp<StackNavigation>

// Navigator
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="AddContact"
                component={AddContact}
            />
            <Stack.Screen
                name="ContactOpen"
                component={ContactOpen}
            />
        </Stack.Navigator>
    )
}