import { Input, TextField, View, VStack, Box, Select, CheckIcon, Button, Text, Spacer } from 'native-base';
import React, { useState } from 'react';

class WordModel {
    Text: string | undefined = undefined
    Meaning: string | null = null

}

function NoteView(props: any) {

    const [Word, setWord] = useState('');
    const [Mean, setMean] = useState('');
    const [service, setService] = useState('');

    const onAdd = () => {

    }

    return (
        <View>
            <VStack space={4} padding={4} >
                
                <Input placeholder='Bạn muốn thêm từ gì ?' textAlign={'center'} value={Word} onChangeText={setWord} />
                <Input placeholder='Nghĩa của từ' textAlign={'center'} value={Mean} onChangeText={setMean} />
                <Box maxW="300">
                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Loại từ" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="Danh từ" value="n" />
                        <Select.Item label="Động từ" value="v" />
                        <Select.Item label="Tính từ" value="adj" />
                        <Select.Item label="Trạng từ" value="adv" />
                    </Select>
                </Box>
                <Spacer />
                <Button onPress={() => onAdd()}>
                    <Text>Thêm</Text>
                </Button>
            </VStack>
        </View>
    )
}

export default NoteView;