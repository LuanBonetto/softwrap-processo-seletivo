"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_check_1 = __importDefault(require("cpf-check"));
class CpfCeck {
    validateCpf(cpf) {
        return cpf_check_1.default.validate(cpf);
    }
}
exports.CpfCeck = CpfCeck;
//# sourceMappingURL=cpfCheck.js.map