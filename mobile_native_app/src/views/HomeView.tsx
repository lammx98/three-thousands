import React from 'react';
import { View } from 'react-native';
import { Badge, Box, Button, Center, Flex, HStack, Pressable, Spacer, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons'
import CPressable from '../components/Pressable';

function HomeView(props: any) {
    const navigation = useNavigation();
    const ToNoteView = () => {
        navigation.navigate('Note' as never)
    }
    const ToGameView = () => {
        navigation.navigate('Game' as never)
    }
    return (
        <View>
            <VStack space={4} padding={4} >
                <CPressable onPress={() => ToNoteView()} iconName='create-outline' label='Note từ mới' />
                <CPressable onPress={() => ToGameView()} iconName='game-controller-outline' label='Chơi game' />
            </VStack>
        </View>
    )
}

export default HomeView;