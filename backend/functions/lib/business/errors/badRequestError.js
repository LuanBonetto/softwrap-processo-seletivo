"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("./BaseError");
class BadRequestError extends BaseError_1.BaseError {
    constructor(message) {
        super(400, message);
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=badRequestError.js.map