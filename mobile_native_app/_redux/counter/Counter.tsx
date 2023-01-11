import React, {useState} from "react";
import { Button, Text, View } from "react-native";
import { useAppSelector, useAppDispatch } from "../hooks";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export default function Counter(){
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <View>
            <Text>{count}</Text>
            <Button title="increment" onPress={() => dispatch(incrementByAmount(1))}/>
        </View>
    )
}