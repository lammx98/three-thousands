import mongoose from "mongoose";
import {Word} from '../schemas/word.schema'
import WordModel from '../models/word'

async function Create(model: WordModel) : Promise<String>  {
    var newWord = new Word();
    newWord._id = new mongoose.Types.ObjectId()
    newWord.word = model.word;
    newWord.mean = model.mean;
    await newWord.save()
    return "Ok"
}

async function Update(_id: mongoose.Types.ObjectId, model: WordModel) : Promise<String> {
    var update = await Word.findById(_id);
    if (update) {
        update.word = model.word;
        update.mean = model.mean;
        await update.update()
        return "Ok"
    }

    return "item not found";
}

async function GetById(_id: mongoose.Types.ObjectId) : Promise<WordModel> {
    var word = await Word.findById(_id);

    return new WordModel()
}

export { Create, Update }