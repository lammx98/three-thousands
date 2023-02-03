
// interface IModel<T> {
//     FromSchema(schema: T): void
// }

import { Document } from "mongoose";

class Model{
    
    CreateInstance(obj: object): this {
        Object.getOwnPropertyNames(this).forEach(prop => {
            Object.defineProperty(this, prop, {
                value: Object.entries(obj).find(o => o[0] === prop)?.[1],
                writable: true
            })
        });
        return this;
    }

    CreateSchema(schema: Document) : Document{
        Object.entries(this).forEach(o => {
            schema.set(o[0], o[1])
        });
        return schema;
    }
}

export {Model} 