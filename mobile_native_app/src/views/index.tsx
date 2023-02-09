import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeView from './HomeView';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import NoteView from './NoteView';
import { Text } from 'native-base';
import GameView from './GameView';

const Stack = createNativeStackNavigator();

function MainView(props: any) {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeView} options={{
                    headerTitle: "Trang chủ",
                    headerTitleAlign: 'center'
                }} />
                <Stack.Screen name="Note" component={NoteView} options={{
                    headerTitle: "Note từ mới",
                    headerTitleAlign: 'center'
                }} />
                <Stack.Screen name="Game" component={GameView} options={{
                    headerTitle: "Game",
                    headerTitleAlign: 'center'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainView;