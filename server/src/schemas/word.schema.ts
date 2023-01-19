import mongoose from "mongoose";

interface IWord {
    word: String,
    mean: String
}

const wordSchema = new mongoose.Schema<IWord>({
    word: {type: String, required: true},
    mean: {type: String, required: true}
})

const Word = mongoose.model<IWord>('word', wordSchema)

export {IWord, Word};