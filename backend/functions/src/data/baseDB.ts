import admin from "firebase-admin";

export abstract class BaseDB {
   protected db = admin.firestore();
}