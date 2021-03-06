"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
class BaseDB {
    constructor() {
        this.db = firebase_admin_1.default.firestore();
    }
}
exports.BaseDB = BaseDB;
//# sourceMappingURL=baseDB.js.map