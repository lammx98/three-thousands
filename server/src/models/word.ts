import mongoose from "mongoose";
import {Model} from ".";
import { IWord, Word } from "../schemas/word.schema"

class WordModel extends Model<IWord> {
    async create(body: object) : Promise<mongoose.Types.ObjectId>{
        var newword = new Word();
        newword._id = new mongoose.Types.ObjectId();
        
        return newword._id;
    }

}

export default WordModel;