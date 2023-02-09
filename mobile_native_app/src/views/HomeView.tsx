import React from 'react';
import { View } from 'react-native';
import { Badge, Box, Button, Center, Flex, HStack, Pressable, Spacer, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons'

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
                <Pressable onPress={() => ToNoteView()}>
                    {({ isHovered, isFocused, isPressed }) => {
                        return (
                            <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'} p="5" rounded="8" style={{
                                transform: [{
                                    scale: isPressed ? 0.98 : 1
                                }]
                            }}>
                                <HStack>
                                    <Icon name='create-outline' size={20} />
                                    <Text paddingLeft={15}>Note từ mới</Text>
                                </HStack>
                            </Box>
                        )
                    }}
                </Pressable>
                <Pressable onPress={() => ToGameView()}>
                    {({ isHovered, isFocused, isPressed }) => {
                        return (
                            <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'} p="5" rounded="8" style={{
                                transform: [{
                                    scale: isPressed ? 0.98 : 1
                                }]
                            }}>
                                <HStack>
                                    <Icon name='game-controller-outline' size={20} />
                                    <Text paddingLeft={15}>Chơi game</Text>
                                </HStack>
                            </Box>
                        )
                    }}
                </Pressable>
            </VStack>
        </View>
    )
}

export default HomeView;