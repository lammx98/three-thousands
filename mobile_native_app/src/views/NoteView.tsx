import { Input, TextField, View, VStack, Box, Select, CheckIcon, Button, Text, Spacer } from 'native-base';
import React, { useEffect, useState } from 'react';

class WordModel {
    Word: string | undefined
    Mean: string | undefined
    Type: String | undefined

    constructor(word?: string | undefined, mean?: string | undefined, type?: string | undefined){
        this.Word = word;
        this.Mean = mean;
        this.Type = type;
    }
}

let index: number = 0;

function NoteView(props: any) {

    const [Word, setWord] = useState('');
    const [Mean, setMean] = useState('');
    const [Type, setType] = useState('');
    const [DataList, setDataList] = useState<String[]>([]);

    const Test = () => {
        setDataList([...DataList, "asdasd"]);
        console.log(DataList)
    }
    const onAdd = async () => {
        try {
            var data = {
                "word": Word,
                "mean": Mean,
                "type": Type
            }
            fetch('http://10.10.10.157:1000/api/word/create', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    setDataList([...DataList, `${Word} (${Type}) : ${Mean}` ]);
                    setWord('');
                    setMean('')
                    setType('')
                    index++;
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        
    })

    return (
        <View>
            <VStack space={4} padding={4} >
                
                <Input placeholder='Bạn muốn thêm từ gì ?' textAlign={'center'} value={Word} onChangeText={setWord} />
                <Input placeholder='Nghĩa của từ' textAlign={'center'} value={Mean} onChangeText={setMean} />
                <Box maxW="300">
                    <Select selectedValue={Type} minWidth="200" accessibilityLabel="Choose Service" placeholder="Loại từ" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => setType(itemValue)}>
                        <Select.Item label="Danh từ" value="n" />
                        <Select.Item label="Động từ" value="v" />
                        <Select.Item label="Tính từ" value="adj" />
                        <Select.Item label="Trạng từ" value="adv" />
                        <Select.Item label="Không xác định" value="" />
                    </Select>
                </Box>
                <Spacer />
                <Button onPress={() => onAdd()}>
                    <Text>Thêm</Text>
                </Button>
                <VStack>
                    {
                        DataList.map(item => {
                            return <Text key={index}>{item}</Text>
                        })
                    }
                </VStack>
            </VStack>
        </View>
    )
}

export default NoteView;