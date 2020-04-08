"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const firebase_1 = __importDefault(require("firebase"));
const functions = __importStar(require("firebase-functions"));
const InsertNewPerson_1 = require("./presentation/endpoints/InsertNewPerson");
const getPersons_1 = require("./presentation/endpoints/getPersons");
const deletePersonByCpf_1 = require("./presentation/endpoints/deletePersonByCpf");
const updatePersonByCpf_1 = require("./presentation/endpoints/updatePersonByCpf");
const app = express_1.default();
app.use(cors_1.default({ origin: true }), express_1.default.json());
exports.app = functions.https.onRequest(app);
const firebaseConfig = {
    apiKey: "AIzaSyA3JdeAujgq8hJJdu32rfLZjsAQZg9r8zI",
    authDomain: "softwrap-tabela.firebaseapp.com",
    databaseURL: "https://softwrap-tabela.firebaseio.com",
    projectId: "softwrap-tabela",
    storageBucket: "softwrap-tabela.appspot.com",
    messagingSenderId: "1068900672007",
    appId: "1:1068900672007:web:686c114610a64af99cc0a2",
    measurementId: "G-W76PL6M6BM"
};
firebase_admin_1.default.initializeApp(functions.config().firebase);
firebase_1.default.initializeApp(firebaseConfig);
app.post('/person', InsertNewPerson_1.insertNewPersonEndpoint);
app.get('/persons', getPersons_1.getPersonsEndpoint);
app.delete('/person/:cpf', deletePersonByCpf_1.deletePersonByCpfEndpoint);
app.put('/person/:cpf', updatePersonByCpf_1.updatePersonByCpfEndpoint);
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=index.js.map