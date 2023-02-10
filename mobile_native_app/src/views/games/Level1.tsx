import { Pressable, View } from 'native-base';
import React, { useState } from 'react';

class AnswerModel {
    Index: number | null = null;
    Content: string | null = null;
}

function Level1View(props: any) {
    const [Answers, setAnswers] = useState([AnswerModel]);

    const onSelect = (index: number) => {

    }
    const Answer = (index: number) => {
        return (
            <View>
                <Pressable onPress={() => onSelect(index)}>

                </Pressable>
            </View>
        )
    }

    return (
        <View>
            {
                Answer(0)
            }
        </View>
    )
}

export default Level1View;