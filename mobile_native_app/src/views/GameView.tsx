import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View, VStack } from 'native-base';
import React from 'react';
import CPressable from '../components/Pressable';

function GameView(props: any) {
    const navigation = useNavigation()
    
    return (
        <View>
            <VStack>
                <CPressable onPress={() => navigation.navigate('Level1' as never)} iconName='create-outline' label='Cấp độ 1' />
            </VStack>
        </View>
    )
}

export default GameView;