"use strict";
// interface IModel<T> {
//     FromSchema(schema: T): void
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
class Model {
    CreateInstance(obj) {
        Object.getOwnPropertyNames(this).forEach(prop => {
            var _a;
            Object.defineProperty(this, prop, {
                value: (_a = Object.entries(obj).find(o => o[0] === prop)) === null || _a === void 0 ? void 0 : _a[1],
                writable: true
            });
        });
        return this;
    }
    CreateSchema(schema) {
        Object.entries(this).forEach(o => {
            schema.set(o[0], o[1]);
        });
        return schema;
    }
}
exports.Model = Model;
//# sourceMappingURL=index.js.map