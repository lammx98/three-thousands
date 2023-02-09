import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeView from './HomeView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoteView from './NoteView';

const Stack = createNativeStackNavigator();

function MainView(props: any) {
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeView} />
                <Stack.Screen name="Note" component={NoteView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainView;