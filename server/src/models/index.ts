
// interface IModel<T> {
//     FromSchema(schema: T): void
// }

class Model<TSchema>{
    Schema: TSchema;
    constructor(TSCreator: { new () : TSchema; } ){
        this.Schema = new TSCreator()
    }
    CreateInstance(obj: object): this {
        Object.getOwnPropertyNames(this).forEach(prop => {
            this.reflectionSet(this, prop, Object.values(obj).find(o => o === prop))
        });
        return this;
    }

    ToSchema(): TSchema {
        var schema = this.Schema;
        Object.getOwnPropertyNames(schema).forEach(prop => {
            this.reflectionSet(schema, prop, Object.values(this).find(o => o === prop))
        });
        return schema;
    }
    
    reflectionSet(obj: any, propString: string, value: string) : void {
        return propString.split(".").reduce(function(result, part, index, array) {
            if (index === array.length - 1) {
                result[part] = value;
                return obj;
            }
            return result[part];
        }, obj);
    }
}

export {Model} 