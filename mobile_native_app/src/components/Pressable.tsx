import { Box, HStack, Pressable, Text } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

function CPressable(props: any) {
    
    return (
        <Pressable onPress={() => props.onPress()}>
            {({ isHovered, isFocused, isPressed }) => {
                return (
                    <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'} p="5" rounded="8" style={{
                        transform: [{
                            scale: isPressed ? 0.98 : 1
                        }]
                    }}>
                        <HStack>
                            <Icon name={props.iconName} size={20} />
                            <Text paddingLeft={15}>{props.label}</Text>
                        </HStack>
                    </Box>
                )
            }}
        </Pressable>
    )
}

export default CPressable;