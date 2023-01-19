import {Model} from ".";
import { IWord } from "../schemas/word.schema"

class WordModel extends Model<IWord> {
    word: String;
    mean: String;

    constructor(word: String = "", mean: String = ""){
        super()
        this.word = word;
        this.mean = mean;
    }
}

export default WordModel;