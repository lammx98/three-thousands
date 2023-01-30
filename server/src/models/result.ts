
class Result<T> {
    code: Number | null
    message: String | null
    data: T | null

    constructor(code: Number | null = null, message: String | null = null, data: T | null = null) {
        this.code = code
        this.message = message
        this.data = data
    }

    OK(data: T | null = null) : this {
        this.code = this.code ?? 200
        this.message = this.message ?? "OK"
        this.data = this.data
        return this;
    }

    Error(message: String | null = null) : this {
        this.code = this.code ?? 500
        this.message = this.message ?? "An exception was throwed"
        this.data = this.data
        return this;
    }
}

export {Result}
