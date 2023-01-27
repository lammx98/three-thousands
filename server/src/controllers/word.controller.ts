import mongoose from "mongoose";
import {IWord, Word} from '../schemas/word.schema'
import WordModel from '../models/word'

async function Create(model: IWord) : Promise<String>  {
    var newWord = new Word();
    newWord._id = new mongoose.Types.ObjectId()
    newWord.word = model.word;
    newWord.mean = model.mean;
    await newWord.save()
    return "Ok"
}

async function Update(_id: mongoose.Types.ObjectId, model: IWord) : Promise<String> {
    var update = await Word.findById(_id);
    if (update) {
        update.word = model.word;
        update.mean = model.mean;
        await update.update()
        return "Ok"
    }

    return "item not found";
}

async function GetById(_id: mongoose.Types.ObjectId) : Promise<IWord> {
    var word = await Word.findById(_id);
    return new Word()
}

export { Create, Update }