import mongoose, { Document } from "mongoose";
import { ISchema } from './index'

interface IWord extends ISchema {
    word: String,
    mean: String
}

const wordSchema = new mongoose.Schema<IWord>({
    word: {type: String, required: true},
    mean: {type: String, required: true}
})

const Word = mongoose.model<IWord>('word', wordSchema)

export {IWord, Word};