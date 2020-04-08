import { AddressInfo } from "net";
import express, { Request, Response } from 'express';
import cors from 'cors';
import admin from "firebase-admin";
import firebase from "firebase";
import * as functions from 'firebase-functions';
import { insertNewPersonEndpoint } from "./presentation/endpoints/InsertNewPerson";
import { getPersonsEndpoint } from "./presentation/endpoints/getPersons";
import { deletePersonByCpfEndpoint } from "./presentation/endpoints/deletePersonByCpf";
import { updatePersonByCpfEndpoint } from "./presentation/endpoints/updatePersonByCpf";


const app = express();
app.use(cors({ origin: true }), express.json());

exports.app = functions.https.onRequest(app);

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

admin.initializeApp(functions.config().firebase);
firebase.initializeApp(firebaseConfig);


app.get('/', (req: Request, res: Response) => {
  const info = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
    }
  };
  res.send(info)
});

app.post('/person', insertNewPersonEndpoint)
app.get('/persons', getPersonsEndpoint)
app.delete('/person/:cpf', deletePersonByCpfEndpoint)
app.put('/person/:cpf', updatePersonByCpfEndpoint)

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});