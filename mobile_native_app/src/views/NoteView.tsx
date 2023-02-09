import { Input, TextField, View, VStack } from 'native-base';
import React from 'react';

function NoteView(props: any) {
    
    return (
        <View>
            <VStack space={4} padding={4} >
                <Input placeholder='Bạn muốn thêm từ gì ?' textAlign={'center'} />
                <Input placeholder='Nghĩa của từ' textAlign={'center'} />
            </VStack>
        </View>
    )
}

export default NoteView;