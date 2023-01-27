
// interface IModel<T> {
//     FromSchema(schema: T): void
// }

class Model<T>{
    ToModel(schema: T): this {
        
        return this;
    }

    ToSchema(body: object, schema: T): void {
        Object.getOwnPropertyNames(schema).forEach(prop => {
            this.reflectionSet(schema, prop, Object.values(body).find(o => o === prop))
        });
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